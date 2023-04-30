import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import EventCard from './EventCard';
import { TextField } from '@mui/material';
const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement;
        },
        ref: React.Ref<unknown>,
        ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
const Calendar = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const [color] = useState(props.color);
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
        navigate('/');
        }
    }, [navigate]);
    return (
        <>
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
            <Toolbar style={{background:"rgb(192 75 82)"}}>
                <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                >
                <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Add Event
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                Save
                </Button>
            </Toolbar>
            </AppBar>
            <div style={{padding:"20px"}}>
            <h4>Select Date</h4>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
            <h4>Title</h4>
            <TextField style={{width:"100%"}} id="outlined-basic" label="Title" variant="outlined" />
            <h4>Description</h4>
            <TextField style={{width:"100%"}} id="outlined-basic" label="Description" variant="outlined" />
            </div>
        </Dialog>
        <div style={{maxWidth:"500px"}}>
            <div style={{width:"100%", textAlign:"start"}}>
                <h1 style={{ fontFamily: 'Futura', fontSize: '32px', position: 'relative' }}>
                    Time Management
                <span style={{ content: '', position: 'absolute', bottom: '2px', left: "10px", width: '300px', height: '12px', backgroundColor: color, zIndex: '-1' }}></span>
                </h1>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
            <EventCard
                time={new Date()}
                title={"Meet with Professor"}
                description={"sas"}
                location={"Google Meet"}
            />
            <div style={{width:"100%", textAlign:"start"}}>
                <h1 style={{ fontFamily: 'Futura', fontSize: '32px', position: 'relative' }}>
                    Goal
                <span style={{ content: '', position: 'absolute', bottom: '2px', left: "10px", width: '80px', height: '12px', backgroundColor: color, zIndex: '-1' }}></span>
                </h1>
                <p className='add'  onClick={handleClickOpen} >Add Goal to Calendar</p>
            </div>
        </div>
        </>
    );
}

export default Calendar;