import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Spinner;
