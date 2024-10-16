import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as per your project structure
import { Box, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import hospital from './images/hospital.jpg'; // Adjust the path for the hospital image
import Layout from '../components/Layout'; // Adjust the path as per your project structure
import { Calendar } from 'antd'; // Adjust the path for antd if necessary
import 'antd/dist/reset.css'; // Adjust the path for antd CSS if necessary
import Dash from '../components/Dashboard/Dash';
import NurseLeftbar from './NursePages/NurseLeftbar';
import LabSidebar from '../components/LabSidebar';
import LDash from '../components/Dashboard/LDash';
import PharmacySidebar from '../components/PharmacySidebar';
import PDash from '../components/Dashboard/PDash';
import Calender from '../components/Calender';

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 10,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function PharmacyDash() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hour = currentDateTime.getHours();
    let greetingMessage = '';

    if (hour >= 5 && hour < 12) {
      greetingMessage = 'Good Morning user...!';
    } else if (hour >= 12 && hour < 18) {
      greetingMessage = 'Good Afternoon user...!';
    } else if (hour >= 18 && hour < 22) {
      greetingMessage = 'Good Evening user...!';
    } else {
      greetingMessage = 'Good Night user ....!';
    }

    setGreeting(greetingMessage);
  }, [currentDateTime]);

  return (
    <div>
      <Navbar pageTitle="Hospital Pharmacy Dashboard" />
      <Layout>
      <Grid container spacing={3}>
      <Grid item xs={1.6}>
        <PharmacySidebar/>
      </Grid>
      <Grid item xs={7.4}>
          
                  <Card sx={{ margin: 'auto', marginBottom: 2, borderRadius: 8, marginTop: 3 }}>
                    <CardContent>
                      <Typography variant="h5" component="div" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                        <Typography variant="body2" component="span" style={{ float: 'right' }}>
                          {currentDateTime.toLocaleTimeString()}
                        </Typography>
                      </Typography>
                      <Grid container justifyContent="center">
                        <Grid item xs={6} md={6}>
                          <Typography variant="h6" gutterBottom>
                            Welcome
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            {greeting}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <CardMedia
                            component="img"
                            height="150"
                            image={hospital}
                            alt="Welcome Image"
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
               
                {/* Dash Component */}
               
                <PDash/>
               

      </Grid>
      <Grid item xs={3}>
      <Card sx={{ backgroundColor: 'transparent' ,margin: 'auto', marginBottom: 2, borderRadius: 6, marginTop: 3, minHeight: '600px', display: 'flex', flexDirection: 'column' }}>
                <CardContent style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="div" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                    <Typography variant="h5" component="span" >
                      Calendar
                    </Typography>
                  </Typography>
                  <br/>  <br/>  <br/>  <br/>  <br/>
                  <div style={{ flex: 1, overflowY: 'auto' }}>
                    <Calender/>
                  </div>
                </CardContent>
              </Card>

      </Grid>
</Grid>
      </Layout>
    </div>
  );
}

export default PharmacyDash;
