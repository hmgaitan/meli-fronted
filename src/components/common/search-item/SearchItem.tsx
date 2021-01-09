import React, { ChangeEvent, FormEvent, useState } from 'react';

const SearchItem = ({ inputSubmitHandler }: any) => {
  const [formData, setFormData] = useState(initFormData);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputSubmitHandler(formData.searchText);
  };

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form role="search" onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="searchText"
        className="search-input"
        onChange={onChangeInputHandler}
        placeholder="Nunca dejes de buscar"
      />
      <button className="search-input-button" type="submit">
        <div role="img" aria-label="Buscar"></div>
      </button>
    </form>
  );
};

export default SearchItem;

// Initialize form data
function initFormData() {
  return {
    searchText: '',
  };
}
