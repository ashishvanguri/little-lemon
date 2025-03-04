// src/components/MenuPage.js
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import menupage from '../styles/menupage.css'
import grksld from '../images/greek salad.jpg'
import brucht from '../images/bruchetta.jpg'
import cake from '../images/desert.jpg'
import Nav from './Nav';

const menuItems = [
  {
    title: 'Greek Salad',
    description: 'Greek salad recipe is flavorful and refreshing with just a few ingredients',
    image: grksld,
  },
  {
    title: 'Bruchetta',
    description: 'Bruschetta is a classic Italian appetizer featuring toasted bread topped with a flavorful mix of tomatoes, garlic, basil, and olive oil.',
    image: brucht,
  },
  {
    title: 'Lemon Desert',
    description: 'Lemon Desert, a dish that justifies our name Little Lemon',
    image: cake,
  },
];

const MenuPage = () => {
  return (
    <div>
    <Nav></Nav>
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <link rel = 'stylesheet' src = {menupage} />
      <Typography variant="h3" align="center" gutterBottom color="primary">
        Our Menu
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
};

export default MenuPage;
