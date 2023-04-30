import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePic from '../assets/avatar.jpg'
import Post from './Post';

const Profile = (props) => {
    const navigate = useNavigate();
    const [color] = useState(props.color);
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
        navigate('/');
        }
    }, [navigate]);
    return (
        <>
            <div style={{width:"100%", textAlign:"start"}}>
                <h1 style={{ fontFamily: 'Futura', fontSize: '32px', position: 'relative' }}>
                    Profile
                <span style={{ content: '', position: 'absolute', bottom: '2px', left: "10px", width: '100px', height: '12px', backgroundColor: color, zIndex: '-1' }}></span>
                </h1>
            </div>
            <div>
                <div className='flexCenter'>
                    <div className="container">
                        <img style={{borderRadius:"50%", border:"solid 1px #00000040", marginTop:"20px"}} src={ProfilePic}></img>
                        <h4 style={{margin: "7px"}} className='m-0'>Bharath Bandaru</h4>
                        <p  className='m-0' style={{margin: "2px", color: "#00000070", fontWeight: "700", fontSize: "14px"}}>[2021-2023] </p>
                        <p  className='m-0' style={{margin: "1px", color: "#00000070", fontWeight: "700", fontSize: "14px"}}>A20364907</p>
                        <p  className='m-0' style={{margin: "1px", color: "#00000070", fontWeight: "700", fontSize: "14px"}}>bbandaru@hawk.iit.edu </p>
                        <p  className='m-0' style={{color: "#00000070", fontWeight: "700", fontSize: "14px"}}>Masters in Computer Science </p>
                    </div>
                    
                </div>
                    <div className="dropdown">
                        <div className='flexCenter'>
                            <h3 style={{borderTop: "3px solid #dadada", paddingTop:"10px", width: "50%", textAlign:"center"}}>Feed</h3>
                        </div>
                        <div> 
                            <Post/>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Profile;