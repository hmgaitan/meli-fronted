import React from 'react';
import './ItemCard.scss';

const ItemCard = ({ data }: any) => {
  return (
    <div>
      <div className="item-container">
        <div className="item-img">
          <img src={data.picture} alt={'imagen de ' + data.title}></img>
        </div>
        <div className="item-data">
          <div className="item-data-container">
            <h1>
              {data.price.currency} {data.priceFormatted}
            </h1>
            {data.free_shipping ? <div className="icon-shipping"></div> : ''}
            <div className="item-title">
              <span>{data.title}</span>
            </div>
            <div className="item-location-sm">
              <span>{data.address}</span>
            </div>
          </div>
        </div>
        <div className="item-location">
          <span>{data.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
