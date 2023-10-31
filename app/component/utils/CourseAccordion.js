"use client"; // This is a client component 
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomList from './CustomList';


export default function CourseAccordion({data}) {

  const {title,subtitle} = data;
  

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={subtitle ? <ExpandMoreIcon /> : false}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography 
            sx={{
              fontWeight:500,
              fontSize:'1.15rem',
              color:'#cfcb62',
              '&:hover':{
                color:'rgb(185,65,105)'
              }
            }}
          >
            
            {title ? title: "Title"}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            subtitle && subtitle.map((ele,ind)=>{
              
              return (
                <CustomList
                  key={ind}
                  data = {ele}
                />
              )
            })
          }
        </AccordionDetails>
      </Accordion>
      
    </>
  );
}