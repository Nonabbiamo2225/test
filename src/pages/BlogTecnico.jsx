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
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

const BlogTecnico = () => {
  const articoli = [
    {
      id: 1,
      titolo: 'Guida Completa alla Manutenzione del Motore',
      categoria: 'Manutenzione',
      data: '15 Settembre 2023',
      immagine: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
      descrizione: 'Scopri tutti i segreti per mantenere il motore della tua auto in condizioni ottimali, inclusi consigli su olio, filtri e intervalli di manutenzione.',
    },
    {
      id: 2,
      titolo: 'Come Scegliere i Freni Giusti per la Tua Auto',
      categoria: 'Guide Acquisto',
      data: '10 Settembre 2023',
      immagine: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
      descrizione: 'Una guida dettagliata alla scelta del sistema frenante, con focus su materiali, prestazioni e rapporto qualità-prezzo.',
    },
    {
      id: 3,
      titolo: 'Innovazioni nella Diagnostica Elettronica',
      categoria: 'Tecnologia',
      data: '5 Settembre 2023',
      immagine: 'https://images.unsplash.com/photo-1635784063754-0f5773e26e2e?w=500',
      descrizione: 'Esplora le ultime tecnologie nella diagnostica auto, inclusi scanner OBD-II e software di ultima generazione.',
    },
    {
      id: 4,
      titolo: 'Sospensioni: Comfort vs Prestazioni',
      categoria: 'Tecnica',
      data: '1 Settembre 2023',
      immagine: 'https://images.unsplash.com/photo-1629385701021-6d6264212099?w=500',
      descrizione: 'Analisi approfondita dei diversi tipi di sospensioni e come influenzano la guida della tua auto.',
    },
    {
      id: 5,
      titolo: 'Guida al Risparmio Carburante',
      categoria: 'Efficienza',
      data: '28 Agosto 2023',
      immagine: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
      descrizione: 'Consigli pratici e modifiche tecniche per ottimizzare i consumi della tua auto.',
    },
    {
      id: 6,
      titolo: 'Manutenzione Cambio Automatico',
      categoria: 'Manutenzione',
      data: '25 Agosto 2023',
      immagine: 'https://images.unsplash.com/photo-1635784063754-0f5773e26e2e?w=500',
      descrizione: 'Tutto quello che devi sapere sulla manutenzione del cambio automatico moderno.',
    },
    {
      id: 4,
      titolo: 'Sospensioni: Comfort vs Prestazioni',
      categoria: 'Tecnica',
      data: '1 Settembre 2023',
      immagine: 'https://images.unsplash.com/photo-1629385701021-6d6264212099?w=500',
      descrizione: 'Analisi approfondita dei diversi tipi di sospensioni e come influenzano la guida della tua auto.',
    },
    {
      id: 5,
      titolo: 'Guida al Risparmio Carburante',
      categoria: 'Efficienza',
      data: '28 Agosto 2023',
      immagine: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
      descrizione: 'Consigli pratici e modifiche tecniche per ottimizzare i consumi della tua auto.',
    },
    {
      id: 6,
      titolo: 'Manutenzione Cambio Automatico',
      categoria: 'Manutenzione',
      data: '25 Agosto 2023',
      immagine: 'https://images.unsplash.com/photo-1635784063754-0f5773e26e2e?w=500',
      descrizione: 'Tutto quello che devi sapere sulla manutenzione del cambio automatico moderno.',
    }
  ];

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
          backgroundImage: 'url(https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" gutterBottom sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            padding: 2,
            borderRadius: 2,
          }}>
            Blog Tecnico
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            padding: 2,
            borderRadius: 2,
          }}>
            Approfondimenti tecnici e guide pratiche per professionisti e appassionati
          </Typography>

          <Grid container spacing={4}>
            {articoli.map((articolo) => (
              <Grid item xs={12} md={4} key={articolo.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * articolo.id }}
                >
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={articolo.immagine}
                      alt={articolo.titolo}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={articolo.categoria}
                          color="primary"
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          {articolo.data}
                        </Typography>
                      </Box>
                      <Typography variant="h5" gutterBottom component="h2">
                        {articolo.titolo}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {articolo.descrizione}
                      </Typography>
                      <Button variant="outlined" color="primary">
                        Leggi di più
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Vuoi Contribuire al Blog?
            </Typography>
            <Typography variant="body1" paragraph>
              Sei un esperto del settore? Condividi le tue conoscenze con la nostra community.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Proponi un Articolo
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogTecnico;