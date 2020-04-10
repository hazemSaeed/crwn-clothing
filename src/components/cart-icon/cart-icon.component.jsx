import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {
  CartShoppingIcon,
  CartIconContainer,
  CartItemIcon,
} from './cart-icon.styles';
const CartIcon = ({ toggleCartHidden, countItem }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <CartShoppingIcon />
      <CartItemIcon>{countItem}</CartItemIcon>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  countItem: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
