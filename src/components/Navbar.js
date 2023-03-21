import  React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import logo from "../assets/logo.webp"
import { Stack } from '@mui/system';

import SignUPModal from './SignUpModal';
import LoginModal from './LoginModal';
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../app/SearchSlice';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  
  const dispatch = useDispatch();

  const login = useSelector(state => state.search.isUserLogin);


  const navigate = useNavigate();

   const handleOpen = () =>{
       navigate("/login")
   }
   const handleClick = () =>{
       navigate("/")
   }
   const handleLogout = () =>{
    //  let data = localStorage.getItem("email");

     localStorage.removeItem("email");
      dispatch(UserLogin(false));

      // toast.success("Logout successfully")
    //  setLogin(false);
     toast.success("Logout successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
   }

   useEffect(()=>{
        if(localStorage.getItem("email")){
          dispatch(UserLogin(true));
        }else {
          dispatch(UserLogin(false));

        }
   }, [])

  return (
    <Box sx={{ flexGrow: 1 }} >
     <ToastContainer />
      <AppBar position="static">
     <Toolbar style={{display: "flex", justifyContent: "space-around"}}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
           <img src={logo} width ={40}  alt="Logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Airbus
          </Typography>
          </Stack>
          {
            login ? (
              <Button color="inherit" variant='outlined' onClick={handleLogout}>Logout</Button>

            ):(
             <Button color="inherit" variant='outlined' onClick={handleOpen}>Login</Button>
            )
          }
          
          {/* <LoginModal /> */}

          {/* <BasicModal /> */}
          
          </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/signup" element={<SignUPModal/>} />
        <Route path="/login" element={<LoginModal/>} />
        {/* <Route path="/" element={<Home/>} /> */}


      </Routes>
    </Box>
  );
}