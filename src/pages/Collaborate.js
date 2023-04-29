import React, {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Collaborate = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
        navigate('/');
        }
    }, [navigate]);
    return (
        <div style={{width:"100%", textAlign:"start"}}>
            <span className='heading'>
                Collaborate
            </span>
        </div>
    );
}

export default Collaborate;