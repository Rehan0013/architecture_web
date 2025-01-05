import React from 'react';
import { Button, IconBtn } from './Button';
import { Link } from 'react-router-dom';
import { useToggle } from '../hooks/useToggle';
import MenuItems from './MenuItems';
const Header = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <div className='header'>
      <Link className='left' to="/">COMPANY LOGO</Link>
      <div className="right">
        <Link to="/contact">
          <Button children="Contact Us" />
        </Link>
        <Button children="Admin" />
        {!isOpen && (
          <IconBtn children="☰" onClick={toggleIsOpen} />
        )}
        {isOpen && (
          <>
            <MenuItems className={`menu-items ${isOpen ? "show" : ""}`} />
            <IconBtn children="✕" onClick={toggleIsOpen} />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

