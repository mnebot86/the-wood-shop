import logo from "../../asset/images/logos/woodshoplogo.png";
import FaceBook from "../../asset/images/logos/Facebook.png";
import Yelp from "../../asset/images/logos/Yelp.png";
import Instagram from "../../asset/images/logos/instagram.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className='footer-text'>
        <a href="https://maps.apple.com/maps?q=1500apalachee+pkwy+tallahassee+fl+32301"><p>
          The Wood Shop <br/>Governor's Square Mall <br/>1500 Apalachee Parkway <br/>Tallahassee, FL 32301 <br/> Suite 1010, Next to JCPenney</p>
        </a>
      </div>
      <div className='footer-logo'>
        <img src={logo} alt="The Wood Shop" />
        <a href='https://pearllumi.co'><p>Designed by PearlLumi Creative</p></a>
      </div>
      <div className='footer-icons'>
        <img src={Instagram} onClick={() => window.location.href="https://www.instagram.com/thewoodshop.club/"} alt="link to instagram account" />
        <img src={FaceBook} onClick={() => window.location.href="https://www.facebook.com/The-Wood-Shop-100656319135582"} alt="link to instagram account" />
        <img src={Yelp} alt="link to yelp reviews account" />
      </div>
    </section>
  );
};

export default Footer;
