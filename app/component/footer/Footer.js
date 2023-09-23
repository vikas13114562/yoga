import "./footer.css";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Form from "./Form";
import Logo from '../../../public/logo2.png'

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <div className="address">
          <div className="add-heading">Contact Me</div>
          <div className="add">
            F 119 Ladosarai Saket <br />
            New Delhi 110030
          </div>
        </div>
        <div>
        
        <div className="allLink">
          <Link href="https://www.instagram.com/">
            <FaInstagram />
          </Link>
          <Link href="https://www.youtube.com/">
            <FaYoutube />
          </Link>
          <Link href="https://www.facebook.com/">
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com/">
            <FaTwitter />
          </Link>
        </div>
      </div>
      </div>
      
      <Form />
      <div className="tag" 
        
      >
        <h2>Sarvyog</h2>
        <p>An integration of body, mind, & soul.</p>
        <img id='footer-logo' src={'logo2.png'} />
      </div>
    </div>
  );
}
