import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-title">The Busy Bee Cafe And Catering</h2>
          <p className="footer-text">
            Save time, shop online. Artisan Breads, Specialty Cakes, Coffee, and More!
          </p>
        </div>

        {/* Middle Section - Opening Hours */}
        <div className="footer-section">
          <h2 className="footer-title">Opening Hours</h2>
          <ul className="footer-list">
            <li><span className="highlight">Tuesday</span> - 6:30am - 2pm</li>
            <li>Wednesday - 6:30am - 2pm</li>
            <li>Thursday - 6:30am - 2pm</li>
            <li>Friday - 6:30am - 2pm</li>
            <li>Saturday - 7am - 2pm</li>
            <li>Sunday - 7am - 1:30pm</li>
            <li>Monday - 6:30am - 2pm</li>
          </ul>
        </div>

        {/* Right Section - Contact Us */}
        <div className="footer-section">
          <h2 className="footer-title">Contact Us</h2>
          <p className="footer-text">📍 23 Opal St Lightning Ridge, NSW</p>
          <p className="footer-text">📞 0258194001</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <a href="#" className="privacy-policy">Privacy Policy</a>
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
