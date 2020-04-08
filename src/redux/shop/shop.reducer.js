import Shop_Data from './shop.data';
const initialState = {
  collections: Shop_Data,
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
