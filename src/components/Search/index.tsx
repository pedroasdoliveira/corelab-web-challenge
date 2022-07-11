import React from 'react';
import './style.scss'

interface ISearch {
  placeholder: string;
  value: string;
  handleChangeValue: (e: any) => void;
}

const Search = (props: ISearch) => {
  return (
    <>
      <input 
        className='Search' 
        type="text" 
        placeholder={props.placeholder}
        onChange={props.handleChangeValue} 
      />
    </>
  );
};

export default Search;
