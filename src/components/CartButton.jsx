import { MdShoppingCart } from 'react-icons/md';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  border-radius: 50%;
  cursor: pointer;
  `;

const CartIcon = styled(MdShoppingCart)`
  font-size: 1.75rem;
  `;

export const CartButton = () => {
  return (
    <Button>
      <CartIcon />
    </Button>
  );
};
