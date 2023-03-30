import React,{useContext, useState} from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../../firebaseConfig/index'
import { userContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import sideImage from "../../assests/images/sideImage.png";
import Authentication from '../../assests/images/authentication.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import './landingPage.css';

// import { Button, TextField, Typography } from '@mui/material';
function LandingPage() {
  

  
  const navigate=useNavigate();
  const [state,dispatch]=useContext(userContext);
    const redirectUser=({displayName,email,photoUrl})=>{
      console.log(displayName)
        dispatch({
          type:"LOGIN",
          payload:{
            displayName,
            email,
            photoUrl
          }

        })

    
    if(state.isAuth){
      navigate('/dashboard');
    }
    else{
      navigate('/');
    }
  }
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const auth=getAuth();
  const signUp=()=>{
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user);
      
      alert('Successfully created an account')
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      // ..
    });

  }
    const signIn=()=>{
        
        const provider=new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(token)
        
            // The signed-in user info.
            const user = result.user;
            const {displayName,email,photoUrl}=user;
            redirectUser({displayName,email,photoUrl})
            // const {displayName,email,photoURL
            // }=user;
            
            // redirectUser({displayName,email,photoURL})
            
            console.log(user)
            // redirectUser();
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
    const redirectUser1=()=>{
      dispatch({
        type:'LOGIN'
      })
      if(state.isAuth){
        navigate('/details');
      }
      else{
        navigate('/');
      }
    }
    const signedIn=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  
     redirectUser1();
    alert('This user has successfully signed in');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode)
  });
    }
  return (
   
   <div className='wrapper-container'>
    <div className='side-image-container'>
        <img src={sideImage}/>
    </div>
   
    <div className='signin-container'>
      <h2>
        Welcome
      </h2>
      <img src={Authentication}/>

        
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} style={{marginBottom:"20px"}}/>
     
      <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} style={{marginBottom:'5px'}}/>
    
      <Button  onClick={signUp} style={{marginBottom:'5px'}}>Create Account</Button>
      <Button onClick={signedIn} style={{marginBottom:'5px'}}>Sign in</Button>

     
     <p style={{marginBottom:'5px'}}>OR</p>
    <Button onClick={signIn}>
Sign in with Google
      
        
      </Button>
    </div>
    
    </div>
   
  )
}

export default LandingPage

