import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storeFn from './redux/store'
import { Provider } from 'react-redux';
import { Dashboard } from './components/Dashboard.jsx';
import { CASSection } from './components/ClothesAndShoesSection/CASSection.jsx'
import { ProductDetails } from './components/ProductDetails.jsx'
import { Login } from './components/LoginSignin/Login.jsx'
import {Signin} from './components/LoginSignin/Signin';
import { Cart } from './components/ShoppingCart/Cart';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const store = storeFn()

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="products" element={<CASSection />} />
          <Route path="products" element={<ProductDetails />} >
            <Route path=":productID" element={<ProductDetails />} />
          </Route>
          <Route
            path="*"
            element={
                <div className='container white'>
                  <h1 className='primary-text'>404 Not Found</h1>
                </div>
            }
            />
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
