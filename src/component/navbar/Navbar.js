import React, { useContext } from 'react';
import { ThemeContext } from '../../features/ThemeProvider'; 
import './navbar.css'; 
import { BsCart } from 'react-icons/bs';
import CartContext from '../../features/CartContext';
import { Link } from 'react-router-dom';
import ThemeToggle from '../buttonTheme/toggleTheme';

function Navbar() {
    const { cart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext); 

    const totalQuantity = cart?.reduce((total, item) => total + item.quantity, 0); 

    return (
        <nav className={`navbar ${theme}`}>
            <div className="navbar-container" style={{display:"contents"}}>
                <h1 className="navbar-title">Homepage Summary</h1>
                <ul className="navbar-links">
                    <Link to="/"><li className={`navbar-link ${theme}`}>Home</li></Link>
                    <Link to="/home"><li className={`navbar-link ${theme}`}>Products</li></Link>
                    <li className="navbar-link">About Us</li>
                    <li className="navbar-link">Contact</li>
                </ul>
                <div className='dark_cart'>
                  <div className="navbar-cart">
                    <Link to="/cart" className="navbar-cart-link">
                        <BsCart className='bscart' />
                        <div className='total'>{totalQuantity}</div>
                    </Link>
                  </div> 
                  <ThemeToggle />
              </div>
            </div>
        </nav>
    );
}

export default Navbar;
