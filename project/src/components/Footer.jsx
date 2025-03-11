import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">The Busy Bee TakeAway</h2>
          <p className="footer-text">
            Burgers,Pizzas,Loaded chips and many more !!!
          </p>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">Opening Hours</h2>
          <ul className="footer-list">
            <li><span className="highlight">Tuesday</span> - 6:30am - 2pm</li>
            <li> MON - FRI 6AM-8PM </li>
            <li> SAT  6AM-1PM AND 4PM-9PM</li>
            <li>SUN  6AM-1PM</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">Contact Us</h2>
          <p className="footer-text"> ADDRESS
 SHOP 1/ 53 HARBOUR ROAD
 NORTH MACKAY</p>
          <p className="footer-text">CALL US ON 
          (07) 49448518</p>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#" className="privacy-policy">Privacy Policy</a>
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
