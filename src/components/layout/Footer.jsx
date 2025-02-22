import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Navigazione',
      links: [
        { text: 'Home', path: '/' },
        { text: 'Catalogo', path: '/catalogo' },
        { text: 'Contatti', path: '/contatti' },
      ],
    },
    {
      title: 'Servizi',
      links: [
        { text: 'Spedizioni', path: '#' },
        { text: 'Resi', path: '#' },
        { text: 'Garanzia', path: '#' },
      ],
    },
    {
      title: 'Contatti',
      links: [
        { text: 'Email: info@autoparts.it', path: 'mailto:info@autoparts.it' },
        { text: 'Tel: +39 123 456 789', path: 'tel:+39123456789' },
        { text: 'Indirizzo: Via Roma 123, Milano', path: '#' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="space-between">
            {footerSections.map((section) => (
              <Grid item xs={12} sm={4} key={section.title}>
                <Typography variant="h6" gutterBottom>
                  {section.title}
                </Typography>
                <Box>
                  {section.links.map((link) => (
                    <Box key={link.text} mb={1}>
                      <Link
                        component={RouterLink}
                        to={link.path}
                        color="inherit"
                        sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
                      >
                        {link.text}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: 4,
              pt: 2,
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="body2" sx={{ my: 2 }}>
              © {new Date().getFullYear()} Auto Parts. Tutti i diritti riservati.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;