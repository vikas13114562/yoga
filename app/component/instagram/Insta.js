import { Btn } from "../utils/Allbtn";
import Border from "../utils/Border";
import Heading from "../utils/Heading";
import ImageCarousel from "./ImageCarousel";
import "./insta.css";
import Link from "next/link";

export default function Insta() {
  const picArr = [1, 2, 3, 4,1,2,3,4,1];

  return (
    <div className="insta-container">
      <Heading name="Follow me on Instagram" />
      <Border />
      <ImageCarousel images={picArr} />
      <div className="dfc">
        <Link
          href={
            "https://instagram.com/upadhyay_aishu1626?igshid=MzRlODBiNWFlZA=="
          }
        >
          <Btn name="Follow Me" width={"140px"} />
        </Link>
      </div>
    </div>
  );
}
