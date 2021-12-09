import './css/App.scss';
import { Navbar } from './components/Navbar';
import { useDispatch } from 'react-redux'
import React from 'react';
import { startGetProducts } from './redux/actions/products';
import { Outlet } from 'react-router';

function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(startGetProducts())
  }, [])

  return (
    <React.Fragment>
        <Navbar />
        <div className='navbarmt'>
        <Outlet/>
        </div>
        <div className='container primary center'>
          <div className='row'>
            OnlineShop All Right Reserved 2021 &copy;
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
