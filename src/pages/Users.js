import { Divider, List, ListItem, ListItemText } from '@mui/material';
import React, {  useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Messaging from './Messaging';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Users = (props) => {
    const [users, setUsers] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', online: true, imageURl: "https://images.unsplash.com/photo-1525287218326-af08021239f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",recentMessage:"Hey!"},
        { id: 2, firstName: 'Jane', lastName: 'Doe', online: false, imageURl: "https://images.unsplash.com/photo-1493916665398-143bdeabe500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",recentMessage:"Glad to meet you!"},
        { id: 3, firstName: 'Bob', lastName: 'Smith', online: true, imageURl: "https://images.unsplash.com/photo-1483392707171-cb3e4b1cb8b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",recentMessage:"Howdy!"},
        { id: 4, firstName: 'Alice', lastName: 'Jones', online: false, imageURl: "https://images.unsplash.com/uploads/1412433710756bfa9ec14/d568362b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",recentMessage:"Nice!"},
    ]);
    const [open, setOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const handleClickOpen = (name) => {
        setSelectedUser(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
                <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                >
                <CloseIcon onClick={handleClose}/>
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {selectedUser}
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                Done
                </Button>
            </Toolbar>
            </AppBar>
            <Messaging/>
        </Dialog>
        {   
            users.map((user) => {
            const fullName = `${user.firstName}, ${user.lastName}`;
            const course = 'CS-487'; // Hard-coded for now
            const statusClass = user.online ? 'online' : 'offline';

            return (
                <div style={{width:"100%"}}>
                    <List style={{width:"100%"}}>
                    <div style={{display:"flex", justifyContent:"start", alignItems:"center"}}>
                        <img
                            src={user.imageURl}
                            style={{width:"50px", height:"50px"}}
                            alt="Profile picture"
                            className="profile-picture"
                        />
                        <div style={{width:"100%"}}>
                        <ListItem button onClick={()=>handleClickOpen(fullName)}>
                            <ListItemText primary={fullName+" "+`[${course}]`} secondary={user.recentMessage} />
                        </ListItem>
                        <Divider style={{width:"100%"}}/>
                        </div>
                        </div>
                        </List> 
                </div>
                
            );
        })
    }
    </>
    );
}

export default Users;