import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {MdLockOpen} from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import SignUPModal from './SignUpModal';
import { UserLogin } from '../app/SearchSlice';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineClose } from "react-icons/ai";


import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Stack } from '@mui/material';
import { textAlign, width } from '@mui/system';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginModal(props) {

  const dispatch = useDispatch();

  const navigate = useNavigate();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");



  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  const handleClick = () =>{

    // if(localStorage.getItem("email")){
      handleClose();
      navigate("/signup")
    // }

  }
  const handleSignIn = () =>{
   if(!(email) || !(password)){
       toast.error("Please fill the input fields!");

   }else if(!(email.includes("@"))){
     toast.error("Please fill valid email id")

   }else if(localStorage.getItem("email") === email){
       dispatch(UserLogin(true));
      handleClose();
      toast.success("Login successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() =>{
          navigate("/");
                
           }, 3500)
    
      


    }else {
      // toast.error("First SignUp!")
      toast.error("User not found, please signup", {
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
   

  }
  
  const handleCancel = () =>{
    handleClose();
    navigate("/");
 }

  return (
    <Box>
      {/* <Button onClick={handleOpen} variant = "outlined" color="inherit" >Login</Button> */}
      <ToastContainer />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box bgcolor={"white"} width={"50%"} position="absolute" top="15%" left="25%" transform={"translate(-15%, -25%"}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
       {/* <MdLockOpen position={"absolute"} size="20px" textAlign="center"/>
        */}
        {/* {LockIcon} */}
        <AiOutlineClose id="cancelButton" onClick={handleCancel}/>

        <Box style={{width: "100%", display: 'flex', justifyContent: "center"}}>
          <Typography style={{backgroundColor: "#9c27b0", textAlign: "center", color :"white", width: "30px", padding: "3px", borderRadius: "100px"}}><MdLockOpen/></Typography>
        </Box>
        <Box className="text-center">
          <h5>Log In</h5>
      </Box>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <MDBBtn className="mb-4"  onClick={handleSignIn}>Sign in</MDBBtn>

      <Box className="text-center">
        <Typography style={{color:"rgb(81,118, 178)", textAlign:"right", textDecoration:"underline"}}>New user? <span onClick={handleClick}>Sign Up</span></Typography>
      </Box>

      </MDBContainer>
      </Box>

      </Modal>
    </Box>
  );
}