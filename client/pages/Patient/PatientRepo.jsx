import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, Stack, Card, CardContent, Box, Typography,
  InputAdornment, TextField, Button
} from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Pnav from './Pnav';

function PatientRepo() {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const nic = loggedInUser.nic;

  useEffect(() => {
    axios.get(`http://localhost:3001/getReports/nic/${nic}`)
      .then(response => {
        if (Array.isArray(response.data)) {
          const sortedReports = response.data.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
          setReports(sortedReports);
          setFilteredReports(sortedReports);
        } else {
          console.error('Invalid data format received from server:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
      });
  }, [nic]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredReports(reports);
    } else {
      const filtered = reports.filter(report =>
        report.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredReports(filtered);
    }
  }, [searchTerm, reports]);

  return (
    <div>
      <Pnav />
      <Layout>
        <Stack direction="row" justifyContent="center" sx={{ padding: 2 }}>
          <Card sx={{ borderRadius: 2, maxWidth: '90%' }}>
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Button component={Link} to="/patienthome">
                  <ArrowBackIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                  <TextField
                    label="Search by Report Type"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: '300px' }}
                  />
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    Total Reports: {filteredReports.length}
                  </Typography>
                </Box>
              </Box>
              <TableContainer component={Paper} sx={{ maxHeight: 500, overflow: 'auto' }}>
                <Table>
                  <TableHead sx={{ backgroundColor: 'background.paper' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Report Type</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Uploaded Date</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>PDF Report</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Array.isArray(filteredReports) && filteredReports.map(report => (
                      <TableRow key={report._id} hover>
                        <TableCell>
                          <Typography variant="body1">{report.type}</Typography>
                        </TableCell>
                        <TableCell>{new Date(report.uploadDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <IconButton
                            href={`http://localhost:3001/reports/${report.patientReport}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                          >
                            <SummarizeIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredReports.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={3} sx={{ textAlign: 'center' }}>No reports found</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Stack>
      </Layout>
    </div>
  );
}

export default PatientRepo;
