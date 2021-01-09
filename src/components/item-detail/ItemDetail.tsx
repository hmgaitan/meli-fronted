import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Scss
import './ItemDetail.scss';

// Context
import ApiContext from '../../context/ApiContext';
import { Redirect } from 'react-router-dom';
import NavBar from '../common/nav-bar/NavBar';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Spinner from '../common/spinner/Spinner';

const ItemDetail = (props: any) => {
  const { api } = useContext(ApiContext);

  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState({
    picture: '',
    title: '',
    condition: '',
    sold_quantity: 0,
    price: {
      currency: 0,
      decimals: 0,
      amount: '',
    },
    description: '',
  });
  const [searchText, setSearchText] = useState('');

  const formatPrice = (price: string, decimals: number) => {
    return parseFloat(price).toFixed(decimals);
  };

  const onSubmitHandler = (value: string) => {
    setSearchText(value);
  };

  useEffect(() => {
    const fetchItems = async () => {
      let url: string = api + 'items/' + props.match.params.id;

      const result = await axios(url);
      setIsLoading(false);
      setItem(result.data);
      setCategories(result.data.categories);
    };

    fetchItems();
  }, [api, props.match.params.id]);

  if (searchText) {
    return <Redirect to={`/items?search=${searchText}`} />;
  }

  return (
    <Fragment>
      {isLoading ? (
        <Fragment>
          <header className="nav-bar">
            <NavBar />
          </header>
          <main>
            <div className="main-container">
              <div className="breadcrumb-container">
                <Breadcrumb categories={categories} />
              </div>
              <div className="route-view-container">
                <Spinner />
              </div>
            </div>
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
                <div className="detail-padding">
                  <div className="detail-container">
                    <div className="detail-img-container">
                      <div className="img-container">
                        <img
                          src={item.picture}
                          alt={'imagen de ' + item.title}
                        ></img>
                      </div>
                    </div>
                    <div className="detail-item-data">
                      <div className="detail-state">
                        <span>
                          {item.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
                          {item.sold_quantity > 1
                            ? item.sold_quantity + ' Vendidos'
                            : item.sold_quantity + ' Vendido'}
                        </span>
                      </div>
                      <div className="detail-title">
                        <span>{item.title}</span>
                      </div>
                      <div className="detail-price">
                        <span>
                          {item.price.currency}
                          {formatPrice(item.price.amount, item.price.decimals)}
                        </span>
                      </div>
                      <div className="detail-button">
                        <button type="button" className="">
                          <span>Comprar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="detail-description-container">
                    <div>
                      <h1>Descripcion del producto</h1>
                    </div>
                    <div className="description-body">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ItemDetail;
