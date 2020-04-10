import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {
  PreviewCollectionContainer,
  Preview,
  PreviewCollectionTitle,
} from './preview-collection.styles';
const PreviewCollection = ({ title, items }) => {
  return (
    <PreviewCollectionContainer>
      <PreviewCollectionTitle>{title.toUpperCase()}</PreviewCollectionTitle>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </PreviewCollectionContainer>
  );
};

export default PreviewCollection;
