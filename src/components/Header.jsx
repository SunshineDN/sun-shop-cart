import styled from 'styled-components';
import { SearchBar } from './SearchBar';
import { CartButton } from './CartButton';
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
        <CartButton />
      </HeaderContainer>
    </HeaderWrapper>
  );
};
