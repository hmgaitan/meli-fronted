import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';

// Custom components
import NavBar from '../common/nav-bar/NavBar';

const Home = (props: any) => {
  const [inputText, setInputText] = useState('');

  const inputSubmitHandler = (value: string) => {
    setInputText(value);
  };

  if (inputText) {
    return <Redirect to={`/items?search=${inputText}`} />;
  }

  return (
    <Fragment>
      <header className="nav-bar">
        <NavBar inputSubmitHandler={inputSubmitHandler} />
      </header>
      <main></main>
    </Fragment>
  );
};

export default Home;
