import React from 'react';
import {
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemName,
  CartItemPrice,
  CartItemImg,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name} />
      <CartItemDetailsContainer>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          {quantity} x {price}
        </CartItemPrice>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
