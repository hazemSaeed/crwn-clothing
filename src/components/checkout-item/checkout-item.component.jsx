import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutImage,
  RemoveButton,
  CheckoutName,
  CheckoutPrice,
  CheckoutQuantity,
  QuantityArrow,
  QuantityValue,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImage src={imageUrl} alt="item" />
      </ImageContainer>
      <CheckoutName>{name}</CheckoutName>
      <CheckoutQuantity>
        <QuantityArrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow onClick={() => addItem(cartItem)}>
          &#10095;
        </QuantityArrow>
      </CheckoutQuantity>
      <CheckoutPrice>{price}</CheckoutPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10007;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
