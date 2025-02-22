import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import SustainabilityCalculator from '../components/SustainabilityCalculator';
import { motion } from 'framer-motion';

const Home = () => {
  const categories = [
    { title: 'Motore', image: '/images/engine.jpg', path: '/catalogo?categoria=motore' },
    { title: 'Freni', image: '/images/brakes.jpg', path: '/catalogo?categoria=freni' },
    { title: 'Sospensioni', image: '/images/suspension.jpg', path: '/catalogo?categoria=sospensioni' },
    { title: 'Carrozzeria', image: '/images/body.jpg', path: '/catalogo?categoria=carrozzeria' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1
            }
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/videos/auto-parts-bg.mp4" type="video/mp4" />
          </video>
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: 4,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 3,
                fontWeight: 700,
              }}
            >
              Ricambi Auto Sostenibili
              <br />
              per un Futuro più Verde
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, maxWidth: '800px' }}>
              Diamo nuova vita ai ricambi auto. Il nostro impegno per la sostenibilità
              si traduce nel recupero e riutilizzo di componenti di qualità,
              riducendo l'impatto ambientale e lo spreco di risorse preziose.
            </Typography>
            <Button
              component={RouterLink}
              to="/catalogo"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ py: 1.5, px: 4 }}
            >
              Esplora il Catalogo
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Sustainability Message Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ overflow: 'hidden' }}
        >
          <Box sx={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(5px)', p: 4, borderRadius: 2 }}>
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: 'primary.main'
                }}
              >
                Ricicla. Rinnova. Rispetta.
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                  fontWeight: 600,
                  mb: 3,
                  color: 'primary.main'
                }}
              >
                Il Futuro dell'Auto è Sostenibile
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: 'primary.main',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: 1.8
                }}
              >
                La nostra missione è trasformare il settore automobilistico attraverso pratiche sostenibili.
                Ogni componente ricondizionato rappresenta un passo verso un futuro più verde, riducendo
                l'impatto ambientale e preservando le risorse preziose del nostro pianeta.
              </Typography>
            </motion.div>
            
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                {
                  title: 'Impatto Ambientale',
                  description: 'Riduciamo le emissioni di CO2 e il consumo di risorse attraverso il riutilizzo responsabile dei componenti auto.',
                  icon: '🌱'
                },
                {
                  title: 'Economia Circolare',
                  description: 'Promuoviamo un modello di business sostenibile che massimizza il valore dei componenti esistenti.',
                  icon: '♻️'
                },
                {
                  title: 'Qualità Certificata',
                  description: 'Ogni pezzo ricondizionato viene sottoposto a rigorosi controlli di qualità per garantire prestazioni ottimali.',
                  icon: '✅'
                }
              ].map((item) => (
                <Grid item xs={12} md={4} key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)'
                        }
                      }}
                    >
                      <Typography variant="h1" sx={{ fontSize: '3rem', mb: 2 }}>
                        {item.icon}
                      </Typography>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" textAlign="center" color="primary.main">
                        {item.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography variant="h2" align="center" sx={{ mb: 6 }}>
              Perché Sceglierci
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Spedizione Veloce',
                  description: 'Consegna in 24/48 ore in tutta Italia',
                },
                {
                  title: 'Garanzia Assicurata',
                  description: 'Tutti i prodotti sono garantiti 24 mesi',
                },
                {
                  title: 'Supporto Tecnico',
                  description: 'Assistenza specializzata pre e post vendita',
                },
                {
                  title: 'Impegno Ambientale',
                  description: 'Promuoviamo il riutilizzo responsabile dei ricambi auto per ridurre gli sprechi',
                },
                {
                  title: 'Ricambi Certificati',
                  description: 'Ogni componente è testato e certificato per garantire qualità e sicurezza',
                },
                {
                  title: 'Economia Circolare',
                  description: 'Contribuiamo a un futuro sostenibile attraverso il recupero e il riutilizzo',
                },
              ].map((feature) => (
                <Grid item xs={12} md={4} key={feature.title}>
                  <motion.div variants={itemVariants}>
                    <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                      <CardContent>
                        <Typography variant="h5" gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" color="primary.main">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 6, backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', p: 4, borderRadius: 2 }}>
              <Typography variant="h4" gutterBottom align="center">
                Impatto Ambientale
              </Typography>
              <Typography variant="subtitle1" paragraph align="center" color="primary.main">
                Calcola il tuo contributo alla sostenibilità ambientale utilizzando parti auto riciclate
              </Typography>
              <SustainabilityCalculator />
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;