import styled from 'styled-components';
import { SearchBar } from './SearchBar';

const HeaderWrapper = styled.header`
  background-color: #000;
`;

const HeaderContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <SearchBar />
        <h1>Header</h1>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
