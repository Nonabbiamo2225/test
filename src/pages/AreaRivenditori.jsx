import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

const AreaRivenditori = () => {
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.40,
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
          <Typography variant="h2" gutterBottom>
            Area Rivenditori
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Vantaggi per i Rivenditori
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Unisciti alla nostra rete di rivenditori autorizzati e scopri i vantaggi esclusivi:
                  </Typography>
                  <ul>
                    <Typography component="li" variant="body1">Prezzi all'ingrosso competitivi</Typography>
                    <Typography component="li" variant="body1">Supporto tecnico dedicato</Typography>
                    <Typography component="li" variant="body1">Consegne prioritarie</Typography>
                    <Typography component="li" variant="body1">Catalogo prodotti esclusivo</Typography>
                    <Typography component="li" variant="body1">Formazione tecnica specializzata</Typography>
                  </ul>
                  <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                    Richiedi Informazioni
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Programma Partnership
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Il nostro programma partnership è progettato per supportare la crescita del tuo business:
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      {
                        title: 'Partner Silver',
                        benefits: ['Sconti base', 'Supporto email', 'Catalogo standard'],
                      },
                      {
                        title: 'Partner Gold',
                        benefits: ['Sconti maggiorati', 'Supporto prioritario', 'Prodotti esclusivi'],
                      },
                      {
                        title: 'Partner Platinum',
                        benefits: ['Sconti massimi', 'Account manager dedicato', 'Accesso anticipato'],
                      },
                    ].map((level) => (
                      <Grid item xs={12} key={level.title}>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              {level.title}
                            </Typography>
                            <ul>
                              {level.benefits.map((benefit) => (
                                <Typography component="li" key={benefit}>
                                  {benefit}
                                </Typography>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AreaRivenditori;