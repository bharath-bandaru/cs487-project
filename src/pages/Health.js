import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InsuranceCard from '../assets/ambetter.png'
import CalendarIcon from '../assets/calendar.png';
const Health = (props) => {
    const navigate = useNavigate();
    const [color] = useState(props.color);
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
        navigate('/');
        }
    }, [navigate]);
    return (
        <div style={{maxWidth: "500px"}}>
            <div style={{width:"100%", textAlign:"start"}}>
                <h1 style={{ fontFamily: 'Futura', fontSize: '32px', position: 'relative', margin:0 }}>
                    Health
                <span style={{ content: '', position: 'absolute', bottom: '2px', left: "10px", width: '110px', height: '12px', backgroundColor: color, zIndex: '-1' }}></span>
                </h1>
            </div>
            <div>
                <div className='flexStart'>
                    <div className="container" style={{textAlign: "start"}}>
                        <h2>Insurance Info</h2>
                        <div style={{ borderRadius: '10px', overflow: 'hidden', border: '2px solid' }}>
                            <img src={InsuranceCard} alt="Insurance Card" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
                <div className=''>
                <div className="container" style={{textAlign: "start"}}>
                    <h2>Appointments</h2>
                    <div className='flexEven'>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: "23px", border:"1px solid", borderRadius:"15px", background: "#D9D9D9", cursor:"pointer" }}>
                            <div style={{ width: '50px' }}>
                                <img src={CalendarIcon} alt="Calendar Icon" style={{ width: '100%' }} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '1.2' }}>Schedule<br />Appointment</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: "23px", border:"1px solid", borderRadius:"15px", background: "#D9D9D9", cursor:"pointer" }}>
                            <div style={{ width: '50px' }}>
                                <img src={CalendarIcon} alt="Calendar Icon" style={{ width: '100%' }} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '1.2' }}>Cancel<br />Appointment</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{textAlign: "start"}}>
                    <h2>Appointment Details</h2>
                    <div style={{ borderRadius: "15px", border:"1px solid", padding:"1px 20px"}}>
                            <p>No appointments</p>
                    </div>
                </div>
                <div className="container" style={{textAlign: "start"}}>
                    <h2>Immunization</h2>
                    <div style={{borderRadius: "15px", border:"1px solid", padding:"1px 20px"}}>
                            <p>All Done</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Health;