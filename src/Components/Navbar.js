import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">REDUX STORE</span>
            <div style={{marginRight:'50px'}}>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart (<span>{items.length}</span>)
                </Link>
                
            </div>
        </div>
    );
};

export default Navbar;