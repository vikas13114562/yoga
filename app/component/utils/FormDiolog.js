"use client"; // This is a client component
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import style from "./Course.module.css";
import {  MenuItem, Select, TextField } from "@mui/material";

import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function FormDialog({text}) {
  const [open, setOpen] = React.useState(false);
  const [error,setError] = React.useState(null)

  const [formData, setFormData] = React.useState({
    name:'',
    phone:'',
    email:'',
    course:'',
  })

  function handleData(e) {
    const {name,value} = e.target
    setFormData(prev=>({...prev,[name]:value}))
    setError('')
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!formData.name) {
        setError('Please Enter Name')
        return false;
    }if(!formData.phone) {
        setError('Please Enter Mobile Number')
        return false;
    }if(!formData.email) {
        setError('Please Enter Email')
        return false;
    }

    try {
      const response = await axios.post('/api/send-mail', formData);
      
    } catch (error) {
      console.error('Error sending email:', error);
    }
    handleClose()
    setFormData({
      name:'',
      phone:'',
      email:'',
      course:'',
    })
    
  };

  return (
    <div >
      {
        text ? <Button variant="contained" className={style.member} onClick={handleClickOpen}>
          {text}
      </Button>:<Button className={style.member} onClick={handleClickOpen}>
        Become a Member!
      </Button>
      }
      
      <BootstrapDialog
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle  sx={{ m: 0, p: 1 }} id="customized-dialog-title">
          Sarvyog
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{padding:'4px'}}  >
          <div className={style.formDialogContainer}>
            <div>
              <label>Name<sup style={{color:'red'}}>*</sup></label>
              <TextField
                type="text"
                name={'name'}
                value={formData.name}
                onChange={handleData}
                fullWidth
                inputProps={{
                  style: {
                    height: "8px",
                  },
                }}
              />
            </div>
            <div>
              <label>Phone <sup style={{color:'red'}}>*</sup></label>
              <TextField
                type="number"
                name={'phone'}
                value={formData.phone}
                onChange={handleData}
                fullWidth
                inputProps={{
                  style: {
                    height: "8px",
                  },
                }} />
            </div>
            <div>
              <label>Email <sup style={{color:'red'}}>*</sup></label>
              <TextField
                fullWidth
                type="email"
                name={'email'}
                value={formData.email}
                onChange={handleData}
                inputProps={{
                  style: {
                    height: "8px",
                  },
                }} />
            </div>
            <div>
            <label>Select Course</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
             
            fullWidth
              value={formData.course}
              
              onChange={(e)=>{
                setFormData(prev=>({...prev,'course':e.target.value}))
              }}
            >
              <MenuItem value={"Yin Yoga"}>Yin Yoga</MenuItem>
              <MenuItem value={"Prenatal Yoga"}>Prenatal Yoga</MenuItem>
              <MenuItem value={"Ashtanga Yoga"}>Ashtanga Yoga</MenuItem>
              <MenuItem value={"Hatha Yoga"}>Hatha Yoga</MenuItem>
              <MenuItem value={"Nutrition"}>Nutrition</MenuItem>
            </Select></div>
            <p className={style.error}>{error}</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button sx={{backgroundColor:"#E5D283",
        color:'black','&:hover':{
          backgroundColor:'rgb(185, 65, 105)'
        }}} variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
