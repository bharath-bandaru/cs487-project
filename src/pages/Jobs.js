import { Search } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const Jobs = (props) => {
    const jobs = [
        { company: 'Amazon', role: 'Software Engineer' },
        { company: 'InLumon Inc.', role: 'Web Developer' },
        { company: '123 Corporation', role: 'Data Analyst' }
        ];
    const JobCard = ({ job }) => {
    return (
        <Card style={{border: "1px solid", margin: "10px 0px", borderRadius:"0", background:"#D9D9D9"}}>
        <CardContent>
            <Typography variant="h5" component="h2">
            {job.company}
            </Typography>
            <Typography color="textSecondary">
            {job.role}
            </Typography>
        </CardContent>
        <CardActions className='flexEnd'>
            <Button  size="small" color="primary">
            Apply
            </Button>
        </CardActions>
        </Card>
    );
    }
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
                <h1 style={{ fontFamily: 'Futura', fontSize: '32px', position: 'relative' }}>
                    Jobs
                <span style={{ content: '', position: 'absolute', bottom: '2px', left: "10px", width: '75px', height: '12px', backgroundColor: color, zIndex: '-1' }}></span>
                </h1>
            </div>
            <div>
                {/* <TextField style={{width: "100%"}} id="outlined-basic" label="Search" variant="outlined" /> */}
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "auto", border: "1px solid",background: "#ededed" }}
                    >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Jobs"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                        <FilterListIcon />
                    </IconButton>
                </Paper>
                <div>
                    {jobs.map(job => (
                        <JobCard job={job} key={job.company} />
                    ))}
                     <div className='flexEnd'>
                        <Button  size="small" color="primary">
                        View All
                        </Button>
                    </div>
                </div>
            <div style={{width:"100%", textAlign:"start"}}>
                <h1 style={{ fontFamily: 'Futura', fontSize: '32px', position: 'relative' }}>
                    Career Fair
                <span style={{ content: '', position: 'absolute', bottom: '2px', left: "10px", width: '175px', height: '12px', backgroundColor: color, zIndex: '-1' }}></span>
                </h1>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>
                <div className="container" style={{textAlign: "start"}}>
                    <h2>Event Details</h2>
                    <div style={{ borderRadius: "15px", border:"1px solid", padding:"1px 20px"}}>
                            <p>No Events</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Jobs;