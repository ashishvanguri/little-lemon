import React from 'react';
import Nav from './Nav';
import { Container, Box } from '@mui/material';
import BookingForm from './BookingForm';

const ReserveNow =() => {

    return(
        <div>
            <Nav></Nav>
            <Box sx={{ backgroundColor: '#ffeb3b', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <BookingForm />
      </Container>
    </Box>
        </div>

    );
};
export default ReserveNow;