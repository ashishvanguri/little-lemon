// src/components/BookingForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Alert, Box } from '@mui/material';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date || !time || people < 1) {
      setBookingMessage('Please fill out all fields and choose a valid number of people.');
      return;
    }

    setBookingMessage(`Booking confirmed for ${name} on ${date} at ${time} for ${people} people!`);
  };

  return (
    <Box sx={{ maxWidth: 500, margin: '0 auto', backgroundColor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Book a Table at Little Lemon
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>

          <Grid item>
            <TextField
              label="Number of People"
              variant="outlined"
              type="number"
              fullWidth
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              min="1"
              required
            />
          </Grid>

          <Grid item>
            <TextField
              label="Date"
              variant="outlined"
              type="date"
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Time"
              variant="outlined"
              type="time"
              fullWidth
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item>
            <Button type="submit" variant="contained" fullWidth color="primary">
              Book Table
            </Button>
          </Grid>
        </Grid>
      </form>

      {bookingMessage && <Alert severity="success" sx={{ marginTop: 2 }}>{bookingMessage}</Alert>}
    </Box>
  );
};

export default BookingForm;
