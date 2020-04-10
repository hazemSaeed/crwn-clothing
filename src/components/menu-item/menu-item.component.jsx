import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  MenuItemImage,
  MenuItemContentSubtitle,
  MenuItemContentTitle,
  MenuItemContent,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <MenuItemImage img={imageUrl}>
        <MenuItemContent>
          <MenuItemContentTitle>{title.toUpperCase()}</MenuItemContentTitle>
          <MenuItemContentSubtitle>SHOP NOW</MenuItemContentSubtitle>
        </MenuItemContent>
      </MenuItemImage>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
