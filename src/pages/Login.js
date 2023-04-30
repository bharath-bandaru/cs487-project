import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EnterButton from '../assets/enter.svg'
import Back from '../assets/back.png'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', true);
    navigate('/home');
  };

  return (
    <>
      <div style={{height: "100vh", justifyContent:"center", flexDirection:"column", display:"flex",  padding:"10px", background: {Back}}}>
        <div style={{position:"absolute", backgroundImage: `url(${Back})`, height:"400px", width: "100vw", zIndex:"-100", top:"0px"}}></div>
        <div>
          <div style={{textAlign:"start", fontFamily:"Futura-Bold", fontSize: "40px", marginBottom:"50px"}}>Welcome <br/> Back</div>
          <div>
          <div className='flexCenter' style={{ flexDirection:"column", width:"100%"}}>
          <div style={{paddingTop:"10px 5px", width:"100%"}}>
            <TextField id="filled-basic" label="Your Email"
              value={email}
              style={{width: "100%"}}
              onClick={(e) => setEmail(e.target.value)}
              variant="filled" />
              </div>
              <div style={{paddingTop:"10px 5px", width:"100%"}}>
                <TextField id="filled-basic"
                  style={{width: "100%"}}
                  onClick={(e) => setPassword(e.target.value)}
                  value={password}
                label="Password" variant="filled" />
              </div>
              <div className='flexAround' style={{width: "100%", alignItems:"center", paddingTop:"30px"}}>
                <div style={{textAlign:"start", fontFamily:"Futura-Bold", fontSize: "30px"}}>Sign In</div>
                <img onClick={handleSubmit} src={EnterButton}/>
              </div>
            </div>
            <div className='flexAround' style={{paddingTop:"50px"}}>
              <div style={{width:"100%", textAlign:"start"}}>
                  <h1 style={{ fontFamily: 'Futura', fontSize: '22px', position: 'relative' }}>
                      Sign Up
                  <span style={{ content: '', position: 'absolute', bottom: '2px', left: "10px", width: '80px', height: '12px', backgroundColor: "#99BFE2", zIndex: '-1' }}></span>
                  </h1>
              </div>
              <div style={{width:"100%", textAlign:"start"}}>
                  <h1 style={{ fontFamily: 'Futura', fontSize: '22px', position: 'relative' }}>
                      Forgot Passwords
                  <span style={{ content: '', position: 'absolute', bottom: '2px', left: "10px", width: '180px', height: '12px', backgroundColor: "#FD969C", zIndex: '-1' }}></span>
                  </h1>
              </div>
            </div>
         </div>
        {/* <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className='inputlabel'
            id="email"
            value={email}

            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Log In</button>
        </form> */}
        </div>
      </div>
    </>
    
  );
}

export default LoginPage;