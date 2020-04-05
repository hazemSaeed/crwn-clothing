import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homePage.component';
import './App.css';
import ShopPage from './pages/shop/shop.component';

// const Hats = ({ history }) => {
//   const str = history.location.pathname.split('/').join(' ').toUpperCase();
//   return (
//     <div>
//       <h1>{str}</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
