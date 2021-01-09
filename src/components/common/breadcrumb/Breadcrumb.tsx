import React from 'react';
import * as _ from 'lodash';

import './Breadcrumb.scss';

const Breadcrumb = ({ categories }: any) => {
  return (
    <div className="breadcrumb">
      {_.map(categories, (cat: any, idx: number) => {
        let content;
        if (idx === categories.length - 1) {
          content = (
            <div key={cat.id} className="breadcrumb-item">
              <span>{cat.name}</span>
            </div>
          );
        } else {
          content = (
            <div key={cat.id} className="breadcrumb-item">
              <span>{cat.name}</span>
              <span className="icon-chevron-right"></span>
            </div>
          );
        }
        return content;
      })}
    </div>
  );
};

export default Breadcrumb;
