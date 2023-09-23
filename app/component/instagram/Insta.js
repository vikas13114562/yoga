import { Btn } from "../utils/Allbtn";
import Border from "../utils/Border";
import Heading from "../utils/Heading";
import "./insta.css";
import Link from "next/link";

export default function Insta() {
  const picArr = [1, 2, 3, 4];

  return (
    <div className="insta-container">
      {/* <div className="dfc">
        <div
          className="instaPic"
          style={{
            backgroundImage: `url('instaPic.jpg')`,
          }}
        ></div>
      </div> */}
      <Heading name ='Follow me on Instagram' />
      <Border />
      <div className="pics-container">
        {picArr.map((ele,ind) => (
          <div
          key={ind}
            className="pics"
            style={{
              backgroundImage: `url('insta/0${ele}.jpg')`,
            }}
          ></div>
        ))}
      </div>
      <div className="dfc">
        <Link
          href={
            "https://instagram.com/upadhyay_aishu1626?igshid=MzRlODBiNWFlZA=="
          }
        >
          <Btn name='Follow Me'  width={'140px'} />
        </Link>
      </div>
    </div>
  );
}
