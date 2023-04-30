import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'
import NotificationIcon from '../assets/notification.svg'
import ProfileIcon from '../assets/avatar.jpg'
import Profile from './Profile';
import Health from './Health';
import Jobs from './Jobs';
import Collaborate from './Collaborate';
import Calendar from './Calendar';
import Notifications from './Notifications';
import Users from './Users';

const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
        navigate('/');
        }
    }, [navigate]);

    const renderUsers = () => {
        return users.map((user) => {
            const fullName = `${user.firstName}, ${user.lastName}`;
            const course = 'CS-487'; // Hard-coded for now
            const statusClass = user.online ? 'online' : 'offline';

            return (
                <div key={"pp"+user.id}  className="user">
                <div className="profile-picture-wrapper">
                    <img
                        src={user.imageURl}
                        alt="Profile picture"
                        className="profile-picture"
                    />
                    <div className={`status-dot ${statusClass}`} />
                </div>
                <div className="user-details">
                    <span className="full-name">{fullName}</span>
                    <span className="course">{`[${course}]`}</span>
                </div>
                </div>
            );
        });
    };
    const [users, setUsers] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', online: true, imageURl: "https://images.unsplash.com/photo-1525287218326-af08021239f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
        { id: 2, firstName: 'Jane', lastName: 'Doe', online: false, imageURl: "https://images.unsplash.com/photo-1493916665398-143bdeabe500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"},
        { id: 3, firstName: 'Bob', lastName: 'Smith', online: true, imageURl: "https://images.unsplash.com/photo-1483392707171-cb3e4b1cb8b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
        { id: 4, firstName: 'Alice', lastName: 'Jones', online: false, imageURl: "https://images.unsplash.com/uploads/1412433710756bfa9ec14/d568362b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"},
    ]);

    const handleSubmit = ()=>{
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    }

    const [currentPage, setCurrentPage] = useState("profile")

    const handleClick = (profile) => {
        switch (profile) {
            case "profile":
                setCurrentPage("profile")
                break;
            case "health":
                setCurrentPage("health")
                break;
            case "jobs":
                setCurrentPage("jobs")
                break;
            case "collaborate":
                setCurrentPage("collaborate")
                break;
            case "calendar":
                setCurrentPage("calendar")
                break;
            case "logout":
                handleSubmit()
                break;
            default:
                break;
        }
        setIsOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flexCenter' style={{alignItems:"normal"}}>
            <div style={{width:"-webkit-fill-available"}}>
                <div className='flexEnd' style={{padding:"10px"}}>
                    <div className='flexEnd' > 
                        <img src={NotificationIcon} alt='notification' onClick= {()=>setCurrentPage("notifications")} style={{ marginBottom: "4px", cursor:"pointer", width:"40px", height:"40px"}}/>
                        <div className="dropdown-container">
                            <img src={ProfileIcon}  onClick={() => setIsOpen(!isOpen)} className='dropdown-button'
                                alt='notification' style={{cursor:"pointer", marginLeft:"10px", width:"40px", height:"40px",border: "1px solid #000000", borderRadius:"100px"}}/>
                            {isOpen && (
                                <div className="dropdown-menu">
                                <div className="dropdown-option" onClick={() => handleClick("profile")}>
                                    Profile
                                </div>
                                <div className="dropdown-option" onClick={() => handleClick("health")}>
                                    Health
                                </div>
                                <div className="dropdown-option" onClick={() => handleClick("jobs")}>
                                    Jobs
                                </div>
                                <div className="dropdown-option" onClick={() => handleClick("collaborate")}>
                                    Collaborate
                                </div>
                                <div className="dropdown-option" onClick={() => handleClick("calendar")}>
                                    Calendar
                                </div>
                                <div className="dropdown-option" onClick={() => handleClick("logout")}>
                                    Logout
                                </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div style={{padding:"24px"}}> 
                        {
                            currentPage === "profile"  && 
                            <Profile
                                color = {"#99BFE2"}
                                handleClick={handleClick}
                            />
                        }
                        {
                            currentPage === "health"  && 
                            <Health
                                color = {"rgba(180, 40, 40, 0.8)"}
                            />
                        }
                        {
                            currentPage === "jobs"  && 
                            <Jobs
                                color = {"#99BFE2"}
                            />
                        }
                        {
                            currentPage === "collaborate"  && 
                            <Collaborate 
                                color = {"#99BFE2"}
                            />
                        }
                        {
                            currentPage === "calendar"  && 
                            <Calendar
                                color = {"#FD969C"}
                            />
                        }
                        {
                            currentPage === "notifications"  && 
                            <Notifications
                                color = {"#99BFE2"}
                            />
                        }
                </div>
            </div>
            <div className='collab hide-on-mobile' style={{width:"30vw", height:"100vh"}}>
                <div key={"pp"}  className="user flexCenter">
                    Collab
                </div>
                <Users/>
                <button onClick={handleSubmit} type="submit">Log out</button>
            </div>


        </div>
    );
}

export default HomePage;