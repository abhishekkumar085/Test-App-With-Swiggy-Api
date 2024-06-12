import React, { useContext } from 'react';
import img from '../assets/images.png';
import { Link } from 'react-router-dom';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const { user } = useContext(userContext);
  return (
    <>
      <nav className="h-[60px] bg-gray-500 flex items-center justify-around pr-4">
        <Link to="/">
          <img src={img} alt="logo" className="h-[45px]" />
        </Link>
        <h1>
          {user.name}-{user.email}
        </h1>
        <ul className="flex gap-10">
          <Link to="/">
            <li className="text-lg text-black">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-lg text-black">About</li>
          </Link>
          <Link to="/contact">
            <li className="text-lg text-black">contact us</li>
          </Link>
          <Link to="/instamart">
            <li className="text-lg text-black">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="text-lg text-black">
              Cart-{cartItems.length} items
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
