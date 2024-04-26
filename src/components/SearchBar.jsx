import styled from 'styled-components';
import Icon from '../assets/icons/search.svg';

const Form = styled.form`
`;

const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Buscar produtos...',
  required: true,
})`
`;

const SearchButton = styled.button.attrs({
  type: 'submit',
})`
`;

const SearchIcon = styled.img.attrs({
  src: Icon,
  alt: 'Ícone de lupa',
})`
`;

export const SearchBar = () => {
  return (
    <Form>
      <SearchInput />
      <SearchButton>
        <SearchIcon/>
      </SearchButton>
    </Form>
  );
};
