import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="left-top">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/gallery" className="footer-link">Gallery</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="left-bottom">
          &copy; 2025 Company Name
        </div>
      </div>
      <div className="footer-right">
        <div className="right-top">
          <a
            href="https://www.facebook.com"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
      Facebook
    </a>
    <a
      href="https://www.instagram.com"
      className="footer-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>
  </div>

        <div className="right-bottom">
          <a href="/">BUILT BY RUS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;