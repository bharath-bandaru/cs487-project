import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications = (props) => {
    const navigate = useNavigate();
    const [color] = useState(props.color);
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
        navigate('/');
        }
    }, [navigate]);
    return (
        <div style={{width:"100%", textAlign:"start"}}>
            <h1 style={{ fontFamily: 'Futura', fontSize: '32px', position: 'relative' }}>
                Notifications
            <span style={{ content: '', position: 'absolute', bottom: '2px', left: "10px", width: '200px', height: '12px', backgroundColor: color, zIndex: '-1' }}></span>
            </h1>
        </div>
    );
}

export default Notifications;