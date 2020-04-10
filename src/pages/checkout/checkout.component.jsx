import React from 'react';
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  ChechoutContainer,
  ChechoutHeader,
  ChechoutHeaderBlock,
  ChechoutTotal,
  ChechoutStripeButton,
  ChechoutTestWarning,
} from './checkout.styles';

const Chechout = ({ cartItems, total }) => {
  return (
    <ChechoutContainer>
      <ChechoutHeader>
        <ChechoutHeaderBlock>
          <span>Product</span>
        </ChechoutHeaderBlock>
        <ChechoutHeaderBlock>
          <span>Description</span>
        </ChechoutHeaderBlock>
        <ChechoutHeaderBlock>
          <span>Quantity</span>
        </ChechoutHeaderBlock>
        <ChechoutHeaderBlock>
          <span>Price</span>
        </ChechoutHeaderBlock>
        <ChechoutHeaderBlock>
          <span>Remove</span>
        </ChechoutHeaderBlock>
      </ChechoutHeader>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <ChechoutTotal>TOTAL ${total}</ChechoutTotal>

      <ChechoutTestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </ChechoutTestWarning>

      <ChechoutStripeButton price={total} />
    </ChechoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Chechout);
