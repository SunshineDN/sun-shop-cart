import styled from 'styled-components';
import { SearchBar } from './SearchBar';
import { MdShoppingCart } from 'react-icons/md';

const HeaderWrapper = styled.header`
  background-color: #fff159;
  position: fixed;
  width: 100%;
`;

const HeaderContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <SearchBar />
        <button>
          <MdShoppingCart />
        </button>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
