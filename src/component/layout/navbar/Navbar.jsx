import React,{useState} from 'react';
import Container from '../../container/Container';
import Cart from '../../cart/Cart'
import {ReactComponent as UserIcon} from '../../../assets/svg/user-icon.svg';
import {ReactComponent as SearchIcon} from '../../../assets/svg/search-icon.svg';
import {ReactComponent as CartIcon} from '../../../assets/svg/cart-icon.svg';
import IconButton from '../../icon_button/IconButton';
import "./navbar.style.scss";
import { Link } from 'react-router-dom';

const menuItem=[{
    title:"فروشگاه",
    href:"/"
},{
    title:"درباره ما",
    href:"/about-us"
}]
const Navbar = ({cartItems, dispatch}) => {
   // console.log(menuItem)
   const [showCart, setShowCart] = useState(false);
   const totalCount = cartItems.reduce((prev, p) => prev + p.count, 0);

    return (
        <nav className='Navbar'>
            <Container>
                <div className='Navbar__content'>
                    <ul>
                        {menuItem.map(item=>(
                             <li key={item.title}><Link to={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li>
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <UserIcon/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton onClick={() => setShowCart(true)}>
                                {totalCount}
                                <CartIcon/>
                            </IconButton>
                            <Cart cartItems={cartItems} dispatch={dispatch} open={showCart} handleClose={() => setShowCart(false)} />
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
      );
}
 
export default Navbar;