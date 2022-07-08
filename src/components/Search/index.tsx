import React from 'react';
import './style.scss'

interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Search = (props: ISearch) => {
  return (
    <>
      <input className='Search' type="text" placeholder={props.placeholder} value={props.value} />
    </>
  );
};

export default Search;
