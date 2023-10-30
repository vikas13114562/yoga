import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Helper({ dataEle }) {
  return (
    <>
      {dataEle?.mainHeading ? (
        <>
          <Typography variant="h5" className="my-4" sx={{color:'#E5D283'}}>
            {dataEle.mainHeading}
          </Typography>
          {dataEle.aboutMainHeading.split("\n").map((paragraph, ind) => (
            <p key={ind} className="my-2">
              {paragraph}
            </p>
          ))}
        </>
      ) : (
        ""
      )}

      {dataEle?.subHeading ? (
        <>
          <div className="p-0 my-3">
            <Typography variant="h6" className="mb-2">
              {dataEle.subHeading}
            </Typography>
            <List>
              {dataEle?.subHeadingItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ color: "rgb(185,65,105)" }}>
                    <SelfImprovementIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
