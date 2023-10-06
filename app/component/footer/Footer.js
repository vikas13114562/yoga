import "./footer.css";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Form from "./Form";

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
            <Link
              href={
                "https://instagram.com/upadhyay_aishu1626?igshid=MzRlODBiNWFlZA=="
              }
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://youtube.com/@sarvyog7426?si=Dz0MKc2UX09eJctL"
              target="_blank"
            >
              <FaYoutube />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      <Form />
      <div className="tag">
        <img id="footer-logo" src={"logo2.png"} alt="logo" />
        <p>An integration of body, mind, & soul.</p>
        <div className="copy">&copy; {new Date().getFullYear()} SARVYOG</div>
      </div>
    </div>
  );
}
