import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionCustomButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const CollectionFooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionFooterPrice = styled.span`
  width: 10%;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover ${CollectionItemImage} {
    opacity: 0.8;
  }

  &:hover ${CollectionCustomButton} {
    opacity: 0.85;
    display: flex;
  }
`;
