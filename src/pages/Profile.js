import React, {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePic from '../assets/avatar.jpg'

const Profile = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
        navigate('/');
        }
    }, [navigate]);
    return (
        <>
            <div style={{width:"100%", textAlign:"start"}}>
                    <span className='heading'>
                        Profile
                    </span>
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
            </div>
        </>
    );
}

export default Profile;