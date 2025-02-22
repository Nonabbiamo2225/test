import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ShoppingCart as CartIcon } from '@mui/icons-material';

const ProductDetails = () => {
  const { id } = useParams();

  // Mock product data
  const product = {
    id: parseInt(id),
    name: 'Filtro Olio Motore',
    category: 'motore',
    price: 29.99,
    image: '/images/oil-filter.jpg',
    description: 'Filtro olio di alta qualità per motori benzina e diesel. Garantisce una filtrazione ottimale e una lunga durata.',
    specifications: [
      { label: 'Marca', value: 'AutoTech' },
      { label: 'Modello', value: 'FO-2023' },
      { label: 'Compatibilità', value: 'Universale' },
      { label: 'Dimensioni', value: '90mm x 90mm x 120mm' },
      { label: 'Materiale', value: 'Acciaio e materiale filtrante sintetico' },
    ],
  };

  return (
    <Box sx={{
      py: 4,
      bgcolor: 'background.default',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card elevation={2}>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                €{product.price.toFixed(2)}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<CartIcon />}
                sx={{ mt: 2, mb: 4 }}
              >
                Aggiungi al Carrello
              </Button>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Specifiche Tecniche
              </Typography>
              <List>
                {product.specifications.map((spec) => (
                  <ListItem key={spec.label} sx={{ py: 1 }}>
                    <ListItemText
                      primary={spec.label}
                      secondary={spec.value}
                      primaryTypographyProps={{ fontWeight: 'bold' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductDetails;