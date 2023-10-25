import React from "react";
import "./insta.css"; // Create a CSS file for styling
import Image from "next/image";
import { instaPicArr } from "../schedule/data";
import Link from "next/link";

function ImageCarousel() {
  return (
    <div className="scrolling-container">
      <div className="scrolling-content">
        {instaPicArr.map((ele, index) => (
          <div className="image-container" key={index}>
               
            <Link href={ele.link} target="_blank">
              <Image
                className="insta-pic"
                src={ele.path}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
              />
            </Link>
            {/* <div class="overlay">
              <div class="text">
                <span class="likes">100 Likes</span>
                <span class="comments">20 Comments</span>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
