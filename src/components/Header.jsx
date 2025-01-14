import React from 'react';
import { Button, IconBtn } from './Button';
import { Link } from 'react-router-dom';
import { useToggle } from '../hooks/useToggle';
import MenuItems from './MenuItems';
import { logo } from '../assets/assests.js';
const Header = () => {

  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <div className='header'>
      <Link className='left' to="/"><img src={logo} alt="logo"/></Link>
      <div className="right">
        <Link to="/contact" className='hidden'>
          <Button className='nav_button' children="Contact Us" />
        </Link>
        <Button className='nav_button' children="Admin" />
        {!isOpen && (
          <IconBtn children="☰" onClick={toggleIsOpen} />
        )}
        {isOpen && (
          <>
            <MenuItems className={`menu-items ${isOpen && "show"}`} />
            <IconBtn children="✕" onClick={toggleIsOpen} />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

