import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Cart = () => {

  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: 'Filtro Olio Motore',
      price: 29.99,
      quantity: 2,
      image: '/images/oil-filter.jpg',
    },
    {
      id: 2,
      name: 'Pastiglie Freno Anteriori',
      price: 45.99,
      quantity: 1,
      image: '/images/brake-pads.jpg',
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box
      sx={{
        py: 4,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1516972810927-80185027ca84?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 70%',
          opacity: 0.40,
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          <Typography variant="h2" gutterBottom>
            Carrello
          </Typography>

          {cartItems.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: 'center', my: 4 }}>
              Il tuo carrello è vuoto
            </Typography>
          ) : (
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card sx={{ mb: 2 }}>
                      <Grid container>
                        <Grid item xs={4} sm={3}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={item.image}
                            alt={item.name}
                            sx={{ objectFit: 'cover' }}
                          />
                        </Grid>
                        <Grid item xs={8} sm={9}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              {item.name}
                            </Typography>
                            <Typography variant="h6" color="primary" gutterBottom>
                              €{item.price.toFixed(2)}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton size="small">
                                  <RemoveIcon />
                                </IconButton>
                                <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                                <IconButton size="small">
                                  <AddIcon />
                                </IconButton>
                              </Box>
                              <IconButton color="error">
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Card>
                  </motion.div>
                ))}
              </Grid>

              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Riepilogo Ordine
                    </Typography>
                    <Box sx={{ my: 2 }}>
                      <Grid container justifyContent="space-between">
                        <Typography>Subtotale</Typography>
                        <Typography>€{total.toFixed(2)}</Typography>
                      </Grid>
                      <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                        <Typography>Spedizione</Typography>
                        <Typography>Gratuita</Typography>
                      </Grid>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Grid container justifyContent="space-between" sx={{ mb: 2 }}>
                      <Typography variant="h6">Totale</Typography>
                      <Typography variant="h6">€{total.toFixed(2)}</Typography>
                    </Grid>
                    <Button variant="contained" color="primary" fullWidth size="large">
                      Procedi all'Acquisto
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Cart;