import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Grid, Avatar, Stack, Card, CardContent, Button } from '@mui/material';
import Layout from '../../components/Layout';
import PageBody from '../../components/PageBody';
import male from '../images/male.png'
import female from '../images/female.png'


function Profile() {
  const [patient, setPatient] = useState(null);

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const nic = loggedInUser.nic;

  useEffect(() => {
    axios.get(`http://localhost:3001/getPatient/${nic}`)
      .then(response => setPatient(response.data))
      .catch(error => console.error('Error fetching patient:', error));
  }, [nic]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  let surgicalHistoryItems = null;
  if (patient.sh) {
    surgicalHistoryItems = patient.sh.split('\n').map((item, index) => (
      <Typography key={index} variant="body1">
        {item}
      </Typography>
    ));
  }



  return (
    <div>
      
      <Layout>
        <Stack direction="row" spacing={2} justifyContent="space-between">
       
          <PageBody>
            <div style={{ maxHeight: '600px', overflowY: 'scroll' }}>
              <Container maxWidth="md" sx={{ marginTop: 4 }}>
                <Grid container spacing={2}>
                  <Typography variant="h5">{patient.name}</Typography>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar alt={patient.name} src={patient.gender === 'male' ? male : female} sx={{ width: 120, height: 120, marginBottom: 2 }} />

                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link style={{ textDecoration: 'none' }} to={`/updatepatient/${patient._id}`}><Button variant='outlined' style={{ display: 'block' }}>

                      Update

                    </Button></Link>

                  </Grid>




                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Card sx={{ width: '100%', minHeight: '510px' }}>
                          <CardContent>
                            <Typography variant="h6">Personal Details</Typography>
                            <Typography variant="body1"><strong>Name:</strong> <br />{patient.name}</Typography>
                            <Typography variant="body1"><strong>NIC:</strong>  <br />{patient.nic}</Typography>
                            <Typography variant="body1"><strong>Email:</strong> <br /> {patient.email}</Typography>
                            <Typography variant="body1"><strong>Age at Registration:</strong> <br /> {patient.age}</Typography>
                            <Typography variant="body1"><strong>Date of Birth:</strong> <br />{new Date(patient.dob).toLocaleDateString()}</Typography>

                            <Typography variant="body1"><strong>Gender:</strong> <br /> {patient.gender}</Typography>
                            <Typography variant="body1"><strong>Address:</strong> <br /> {patient.address}</Typography>
                            <Typography variant="body1"><strong>Marital Status:</strong>  <br />{patient.maritial}</Typography>
                            <Typography variant="body1"><strong>Phone Number:</strong> <br /> {patient.pnumber}</Typography>

                          </CardContent>
                        </Card>
                      </Grid>


                      <Grid item xs={12} sm={6}>
                        <Card sx={{ width: '100%', minHeight: '510px' }}>
                          <CardContent>
                            <Typography variant="h6">Health Details</Typography>
                            <Typography variant="body1"><strong>Physical Condition:</strong> <br />{patient.physical}</Typography>
                            <Typography variant="body1"><strong>Tobacco Use:</strong>  <br />{patient.tobacco}</Typography>
                            <Typography variant="body1"><strong>Tobacco Chewing:</strong>  <br />{patient.tobaccochew}</Typography>
                            <Typography variant="body1"><strong>Alcohol Consumption:</strong> <br /> {patient.alcohol}</Typography>
                            <Typography variant="body1"><strong>Other Details:</strong>  <br />{patient.other}</Typography>
                            <Typography variant="body1"><strong>Snacks:</strong> <br /> {patient.snacks}</Typography>
                            <Typography variant="body1"><strong>Diseases:</strong> <br /> {patient.diseases}</Typography>
                            <Typography variant="body1"><strong>Allergies:</strong>  <br />{patient.allergies}</Typography>
                            <Typography variant="body1"><strong>Registration Date:</strong> <br /> {new Date(patient.registrationDate).toLocaleDateString()}</Typography>

                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Card sx={{ width: '100%' }}>
                          <CardContent>
                            <Typography variant="body1"><strong>MOH Area:</strong>  {patient.moh}</Typography>
                            <Typography variant="body1"><strong>PHM Area:</strong>{patient.phm}</Typography>
                            <Typography variant="body1"><strong>PHI Area:</strong>  {patient.phi}</Typography>
                            <Typography variant="body1"><strong>GN Division </strong>  {patient.gnd}</Typography>
                          </CardContent></Card>

                      </Grid>


                      <Grid item xs={12} sm={6}>
                        <Card sx={{ width: '100%' }}>
                          <CardContent>
                            <Typography variant="body1"><strong>DS Division:</strong>  {patient.dsd}</Typography>
                            <Typography variant="body1"><strong>Neighbour:</strong>  <br />{patient.neighbour}</Typography>
                            <Typography variant="body1"><strong>Education:</strong>  {patient.education}</Typography>




                          </CardContent></Card></Grid>
                      <Grid item xs={12} sm={12}>

                        <Card sx={{ width: '100%' }}>
                          <CardContent>
                            <CardContent>
                              <Typography variant="body1"><strong>Surgical History</strong></Typography>
                              {surgicalHistoryItems}
                            </CardContent>
                          </CardContent></Card></Grid>

                      <Grid item xs={12} sm={12}>

                        <Card sx={{ width: '100%' }}>
                          <CardContent>
                          
                              <Typography variant="body1"><strong>National Identity card or Driving licence</strong></Typography>
                              <img src={`http://localhost:3001/${patient.imagePath}`} alt="Patient" style={{ maxWidth: '100%', height: 'auto' }} />

                         
                          </CardContent></Card></Grid>




                    </Grid>
                  </Grid>
                </Grid>

              </Container>
            </div>
          </PageBody>
        

        </Stack></Layout>
    </div>
  );
}

export default Profile;
