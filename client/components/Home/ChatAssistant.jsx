import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Grid, Container, IconButton } from '@mui/material';
import Header from './Header';
import ALayout from './ALayout';
import axios from 'axios';
import { Send } from '@mui/icons-material'; 

const ChatAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;

    // Simulate sending message to the assistant
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    try {
      const response = await axios.get('http://localhost:3001/chat', {
        params: {
          messages: JSON.stringify(newMessages)
        }
      });
      
      const assistantResponse = response.data.message;
      // Split the response by line breaks
      const lines = assistantResponse.split('\n');
      // Create message objects for each line
      const assistantMessages = lines.map((line) => ({ text: line, sender: 'assistant' }));
      // Update the messages state with the new assistant messages
      setMessages([...newMessages, ...assistantMessages]);
    } catch (error) {
      console.error('Error fetching response from server:', error);
    }
  };

  return (
    <div>
      <Header />
      <ALayout>
        <Container maxWidth="md">
          <Paper elevation={3} style={{ padding: '20px', minHeight: '300px', marginTop: '100px' }}>
            <Typography variant="h5" gutterBottom>
             Medical  Assistant
            </Typography>
            <div style={{ overflowY: 'auto', maxHeight: '200px', minHeight: '400px', marginBottom: '10px' }}>
              {messages.map((message, index) => (
                <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: '5px',
                      padding: '8px',
                      borderRadius: '8px',
                      backgroundColor: message.sender === 'user' ? '#CAF0F8' : '#fce4ec',
                    }}
                  >
                    {message.text}
                  </Typography>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type your message here..."
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={2}>
                <IconButton type="submit" style={{ color: '#086788' }}>
                    <Send />
                  </IconButton>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </ALayout>
    </div>
  );
};

export default ChatAssistant;
