import { Link } from "react-router-dom";

const MenuItems = ({ className }) => {
  return (
    <div className={className}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
    </div>
  );
};

export default MenuItems;