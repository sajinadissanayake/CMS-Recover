import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PeopleIcon from '@mui/icons-material/People';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ArticleIcon from '@mui/icons-material/Article';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
const Sidebar = () => {
  return (
    <div>
      <Box bgcolor="" flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}> 
        <h3>Menu</h3>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/blogadd">
              <ListItemIcon>
              <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Add Posts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/addpatient">
              <ListItemIcon>
                <PersonAddAlt1Icon />
              </ListItemIcon>
              <ListItemText primary="Add patient" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/patientslist">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Patients" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/addreports">
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Report" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/reports">
              <ListItemIcon>
                <DocumentScannerIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/MEform">
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Medical examination" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/bloodsugar">
              <ListItemIcon>
                <MedicalInformationIcon />
              </ListItemIcon>
              <ListItemText primary="Blood Sugar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/appointmentadd">
              <ListItemIcon>
                <BookOnlineIcon />
              </ListItemIcon>
              <ListItemText primary="Add Appointment" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default Sidebar;
