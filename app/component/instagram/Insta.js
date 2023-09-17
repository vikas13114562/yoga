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
      <div className="dfc">FOLLOW ME ON INSTAGRAM</div>
      <div className="pics-container">
        {picArr.map((ele) => (
          <div
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
          <div className="dfc insta-btn">Follow</div>
        </Link>
      </div>
    </div>
  );
}
