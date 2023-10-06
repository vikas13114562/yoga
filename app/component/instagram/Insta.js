import { Btn } from "../utils/Allbtn";
import Border from "../utils/Border";
import Heading from "../utils/Heading";
import ImageCarousel from "./ImageCarousel";
import "./insta.css";
import Link from "next/link";

export default function Insta() {
  

  return (
    <div className="insta-container">
      <Heading name="Follow me on Instagram" />
      <Border />
      <ImageCarousel />
      <div className="dfc">
        <Link
          href={
            "https://instagram.com/upadhyay_aishu1626?igshid=MzRlODBiNWFlZA=="
          }
          target="_blank"
        >
          <Btn name="Follow Me" width={"140px"} />
        </Link>
      </div>
    </div>
  );
}
