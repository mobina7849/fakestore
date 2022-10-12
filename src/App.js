 import './App.css';
//import Home from './pages/home';
//import Layout from './component/layout';
//import router from './routes/routes';
//import {RouterProvider,} from "react-router-dom";
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom";
import Layout from './component/layout';
import Home from './pages/home/index';
import AboutUs from "./pages/about-us/AboutUs"
import Categories from './pages/categories/categories';
import {useReducer} from 'react';
import {cartReducer} from './component/cart/cart.reducer';
import image from "./assets/images/controller.png"


function App() {
  const [ cartItems, dispatch ] = useReducer(cartReducer,[]);
  return (
    //<RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout cartItems={cartItems} dispatch={dispatch}/>}>
              <Route index element={<Home cartItems={cartItems} dispatch={dispatch}/>}></Route>
              <Route path='about-us' element={<AboutUs/>}></Route>
              <Route path='categories/:categoryID' element={<Categories/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
