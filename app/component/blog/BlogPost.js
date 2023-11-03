import React from "react";
import { Paper } from "@mui/material";
import style from '../All.module.css'
import Helper from "./Helper";
import FormDialog from "../utils/FormDiolog";
import ImagesList from "./ImagesList";
import Link from "next/link";

const BlogPost = ({ data }) => {
  return (
    <Paper className={`px-16 py-5 ${style.customP}`}>
      {data.blogText.map((ele, ind) => {
        return <Helper key={ind} dataEle={ele}  />;
      })}
      {
        data.blogLink && (<div className={style.allBtn} style={{width:'130px',color:'aqua'}}>
          <Link href={data.blogLink} target="_blank">Lear More..</Link>
          </div>)
      }
      <div className={style.formBtn}
      >
        <div className={style.allBtn} style={{width:'190px'}}>
        <FormDialog text="Join Me Today" variant={'text'} /></div>
      </div>

      <ImagesList itemData={data.imageArray} />
    </Paper>
  );
};

export default BlogPost;
