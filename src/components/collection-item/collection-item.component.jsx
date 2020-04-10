import React from 'react';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionCustomButton,
  CollectionItemFooter,
  CollectionFooterName,
  CollectionFooterPrice,
} from './collection-item.styles';
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={imageUrl} />
      <CollectionItemFooter>
        <CollectionFooterName>{name}</CollectionFooterName>
        <CollectionFooterPrice>{price}</CollectionFooterPrice>
      </CollectionItemFooter>
      <CollectionCustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CollectionCustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
