import axios from 'axios';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';

// Context
import ApiContext from '../../context/ApiContext';

// Custom components
import NavBar from '../common/nav-bar/NavBar';
import Spinner from '../common/spinner/Spinner';
import ItemCard from '../item-card/ItemCard';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';

// Scss
import './SearchResult.scss';

const SearchResult = (props: any) => {
  // Get api context
  const { api } = useContext(ApiContext);

  // Set states
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  const onSubmitHandler = (value: string) => {
    setIsLoading(true);
    setInputSearch(value);
  };

  useEffect(() => {
    const setUrl = (searchText: string, amountResult: number): string => {
      return `${api}items?searchText=${searchText}&amountResults=${amountResult}`;
    };

    const fetchItems = async () => {
      let amountResult: number = 4;
      let searchText: string =
        inputSearch.length > 0
          ? inputSearch
          : props.location.search.split('search=')[1];
      let url: string = setUrl(searchText, amountResult);
      const result = await axios(url);

      setIsLoading(false);
      setItems(result.data.items);
      setCategories(result.data.categories);
    };
    fetchItems();
  }, [api, inputSearch, props.location.search]);

  const priceFormatter = (price: string, decimals: number) => {
    return parseFloat(price).toFixed(decimals);
  };

  return (
    <Fragment>
      {isLoading || !categories ? (
        <Fragment>
          <header className="nav-bar">
            <NavBar />
          </header>
          <main>
            <Spinner />
          </main>
        </Fragment>
      ) : (
        <Fragment>
          <header className="nav-bar">
            <NavBar inputSubmitHandler={onSubmitHandler} />
          </header>
          <main>
            <div className="main-container">
              <div className="breadcrumb-container">
                <Breadcrumb categories={categories} />
              </div>
              <div className="route-view-container">
                {_.map(items, (item: any, idx: number) => {
                  let content;
                  item.priceFormatted = priceFormatter(
                    item.price.amount,
                    item.price.decimals
                  );

                  if (idx === items.length - 1) {
                    content = (
                      <Link to={`/items/${item.id}`} key={item.id}>
                        <ItemCard data={item} />
                      </Link>
                    );
                  } else {
                    content = (
                      <Link to={`/items/` + item.id} key={item.id}>
                        <ItemCard data={item} />
                        <div className="line-divisor-container">
                          <div className="line-divisor"></div>
                        </div>
                      </Link>
                    );
                  }
                  return content;
                })}
              </div>
            </div>
          </main>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SearchResult;
