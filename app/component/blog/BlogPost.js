import React from "react";
import { Paper } from "@mui/material";

import Helper from "./Helper";
import FormDialog from "../utils/FormDiolog";
import ImagesList from "./ImagesList";
import { Btn } from "../utils/Allbtn";
import Link from "next/link";

const BlogPost = ({ data }) => {
  return (
    <Paper className="p-6">
      {data.blogText.map((ele, ind) => {
        return <Helper key={ind} dataEle={ele} />;
      })}
      {
        data.blogLink && (<div style={{
          margin:'20px 0px',
          padding:'8px',
          color:'blue',
          border:'1px solid gray',
          width:'125px',
          borderRadius:'4px'
        }}>
          <Link href={data.blogLink} target="_blank">Lear More..</Link>
          </div>)
      }
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          color: "black",
        }}
      >
        <FormDialog text="Join Me Today" />
      </div>

      <ImagesList itemData={data.imageArray} />
    </Paper>
  );
};

export default BlogPost;
