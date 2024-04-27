import { useState } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

const Form = styled.form`
  display: flex;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  gap: 13px;
  padding-right: 13px;
`;

const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Buscar produtos...',
  required: true,
})`
  padding: 13px;
  border: none;
  flex-grow: 1;
  outline: none;
  font-size: 0.8rem;
  font-weight: 500;
  border-right: 1px solid #ddd;
`;

const SearchButton = styled.button.attrs({
  type: 'submit',
})`
  background: none;
  border: none;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

export const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <Form>
      <SearchInput
        onChange={ ({ target }) =>{
          setSearchValue(target.value);
        }} />
      {searchValue}
      <SearchButton>
        <IoIosSearch />
      </SearchButton>
    </Form>
  );
};
