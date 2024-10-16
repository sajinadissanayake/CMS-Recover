import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CampaignIcon from '@mui/icons-material/Campaign';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import FeedbackIcon from '@mui/icons-material/Feedback';

const AdminLeftbar = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" >
      <Card sx={{ marginTop:5,borderTopRightRadius:30, borderBottomRightRadius: 30, backgroundColor: "background.bgw", flexGrow: 1, width: '100%' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admindash">
              <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid item>
                  <HomeIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">Home</Typography>
                </Grid>
              </Grid>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/staff">
              <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid item>
                  <PersonIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">Users</Typography>
                </Grid>
              </Grid>
            </ListItemButton>
          </ListItem>
         
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/clinicstatus">
              <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid item>
                  <EqualizerIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">Clinic status</Typography>
                </Grid>
              </Grid>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/blog">
              <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid item>
                  <ArticleIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">Blog</Typography>
                </Grid>
              </Grid>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/feedbacks">
              <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid item>
                  <FeedbackIcon sx={{ fontSize: 40, color: 'background.bg2' }} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">Feedbacks</Typography>
                </Grid>
              </Grid>
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default AdminLeftbar;
