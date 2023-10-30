'use client'
import { mainBlogData } from '../component/all-data/AllData';
import { useRouter } from 'next/navigation'
import style from '../component/All.module.css'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

const Page = () => {
  const router = useRouter()
   
    function handleClick(path) {
        router.push(`/blog/${path}`)
    }
  return (
    <div className={style.blogContainer}>
      
          {
            mainBlogData.map((ele)=>{
              return (
                <ListItem   key={ele.index} onClick={()=>{
                  handleClick(ele.index)
                }}>
                  <ListItemIcon sx={{ color: "rgb(185,65,105)" }}>
                    <SelfImprovementIcon />
                  </ListItemIcon>
                  <ListItemText style={{fontSize:'2rem'}}  primary={ele.title} />
                </ListItem>
              )
            })
          }
      
    </div>
  );
};

export default Page;
