import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Container } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HistoryIcon from '@mui/icons-material/History';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ShortcutIcon from '@mui/icons-material/Shortcut';

function Pdiv2() {
  return (
    <div>
      <Container>
          <br/>

          <Grid container spacing={2}>

          <Grid item xs={6} sm={4}>
            <Card sx={{ borderRadius: 6 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Button component={Link} to="/patientpresc">
                  <Grid container direction="column" alignItems="center" spacing={1}>
                    <Grid item>
                      <DescriptionIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">Prescriptions</Typography>
                    </Grid>
                  </Grid>
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
            <Grid item xs={6} sm={4}>
            <Card sx={{ borderRadius: 6 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Button component={Link} to="/patientrepo">
                    <Grid container direction="column" alignItems="center" spacing={1}>
                      <Grid item>
                      <TextSnippetIcon sx={{ fontSize: 40, color: 'background.bg2' }} />

                      </Grid>
                      <Grid item>
                      <Typography variant="caption"> Reports</Typography>

                      </Grid>
                    </Grid>
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4}>
            <Card sx={{ borderRadius: 6 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Button component={Link} to="/patientcheckups">
                    <Grid container direction="column" alignItems="center" spacing={1}>
                      <Grid item>
                      <MonitorHeartIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                      </Grid>
                      <Grid item>
                      <Typography variant="caption"> Checkups</Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4}>
            <Card sx={{ borderRadius: 6 }}>
                 <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                  <Button component={Link} to="/patientbs">
                    <Grid container direction="column" alignItems="center" spacing={1}>
                      <Grid item>
                        <WaterDropIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                      </Grid>
                      <Grid item>
                      <Typography variant="caption"> Blood Sugar</Typography>

                      </Grid>
                    </Grid>
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4}>
            <Card sx={{ borderRadius: 6 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Button component={Link} to="/patientbp">
                    <Grid container direction="column" alignItems="center" spacing={1}>
                      <Grid item>
                        <WaterDropIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                      </Grid>
                      <Grid item>
                      <Typography variant="caption"> Blood Pressure</Typography>

                      </Grid>
                    </Grid>
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4}>
            <Card sx={{ borderRadius: 6 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Button component={Link} to="/patientLp">
                    <Grid container direction="column" alignItems="center" spacing={1}>
                      <Grid item>
                        <WaterDropIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                      </Grid>
                      <Grid item>
                      <Typography variant="caption"> lipid</Typography>

                      </Grid>
                    </Grid>
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4}>
            <Card sx={{ borderRadius: 6 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Button component={Link} to="/clinichistory">
                    <Grid container direction="column" alignItems="center" spacing={1}>
                      <Grid item>
                        <HistoryIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                      </Grid>
                      <Grid item>
                      <Typography variant="caption"> Clinic History</Typography>

                      </Grid>
                    </Grid>
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4}>
            <Card sx={{ borderRadius: 6 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Button component={Link} to="/prepreq">
                    <Grid container direction="column" alignItems="center" spacing={1}>
                      <Grid item>
                      <ShortcutIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                      </Grid>
                      <Grid item>
                      <Typography variant="caption"> Report Requests</Typography>

                      </Grid>
                    </Grid>
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4}>
            <Card sx={{ borderRadius: 6 }}>
                 <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Button component={Link} to="/precreq">
                    <Grid container direction="column" alignItems="center" spacing={1}>
                      <Grid item>
                        <ShortcutIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                      </Grid>
                      <Grid item>
                      <Typography variant="caption">Record Requests</Typography>

                      </Grid>
                    </Grid>
                  </Button>
                </CardContent>
              </Card>
            </Grid>


            
         
          </Grid>
          </Container><br/><br/>
    </div>
  );
}

export default Pdiv2;
