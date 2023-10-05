import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import style from './Course.module.css'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function CustomList({ data }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
        className={style.list}
      sx={{ width: "100%", maxWidth: '60%', bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        ></ListSubheader>
      }
    >
      {typeof data === "string" ? (
        <ListItemButton>
          <ListItemIcon  sx={{color:'rgb(185,65,105)'}}>
            <SelfImprovementIcon />
          </ListItemIcon>
          <ListItemText sx={{color:'black',
                    fontWeight:500,
                    fontSize:'1rem',
        }} primary={data} />
        </ListItemButton>
      ) : (
        <>
          <ListItemButton onClick={handleClick} sx={{width:'max-content'}}>
          <ListItemIcon sx={{color:'rgb(185,65,105)'}}>
            <SelfImprovementIcon />
          </ListItemIcon>
            <ListItemText primary={data.title} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List className={style.nestedList} component="div" disablePadding >
              {data.subsubtitle.map((ele, ind) => {
                return (
                  <ListItemButton sx={{ pl: 6,width:'max-content' }} key={ind}>
                    <ListItemIcon sx={{color:'rgb(185,65,105)',
                        fontSize:'5px'
                        }}>
                      <FiberManualRecordIcon />
                    </ListItemIcon>
                    <ListItemText primary={ele} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </>
      )}
    </List>
  );
}
