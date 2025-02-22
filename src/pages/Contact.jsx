import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
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
          backgroundImage: 'linear-gradient(45deg, rgba(46, 125, 50, 0.95), rgba(102, 187, 106, 0.95))',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.95,
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
            Contattaci
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Invia un messaggio
                  </Typography>
                  <form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Nome"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Cognome"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          type="email"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Messaggio"
                          variant="outlined"
                          multiline
                          rows={4}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                        >
                          Invia Messaggio
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Informazioni di Contatto
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Email color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography>info@autoparts.it</Typography>
                        <Typography variant="body2" color="text.secondary">Risposta entro 24 ore</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Phone color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography>+39 123 456 789</Typography>
                        <Typography variant="body2" color="text.secondary">Supporto tecnico: +39 123 456 790</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <LocationOn color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography>Via Roma 123, Milano</Typography>
                        <Typography variant="body2" color="text.secondary">20123 Milano (MI)</Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Orari di Apertura</Typography>
                    <Box sx={{ ml: 2 }}>
                      <Typography>Lunedì - Venerdì: 8:30 - 18:30</Typography>
                      <Typography>Sabato: 9:00 - 13:00</Typography>
                      <Typography>Domenica: Chiuso</Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>FAQ</Typography>
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="subtitle1" gutterBottom>Come posso tracciare il mio ordine?</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Riceverai un'email con il numero di tracking una volta che l'ordine sarà spedito. Puoi anche accedere al tuo account per visualizzare lo stato in tempo reale.
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>Quali sono i tempi di consegna?</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Le consegne standard vengono effettuate in 24-48 ore lavorative in tutta Italia. Per le zone remote potrebbero essere necessarie 72 ore. Disponibile anche consegna express in 24 ore.
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>Come posso effettuare un reso?</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Hai 30 giorni per restituire il prodotto. Contattaci per avviare la procedura. Offriamo ritiro gratuito a domicilio per i resi.
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>Quali metodi di pagamento accettate?</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Accettiamo carte di credito/debito (Visa, Mastercard, American Express), PayPal, bonifico bancario e pagamento alla consegna.
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>Offrite assistenza tecnica?</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Sì, il nostro team di esperti è disponibile per consulenze tecniche gratuite pre e post vendita. Offriamo anche servizio di installazione professionale.
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>Come funziona la garanzia?</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Tutti i prodotti sono coperti da garanzia di 24 mesi. Per alcuni prodotti premium offriamo estensione di garanzia fino a 48 mesi.
                      </Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Servizi Aggiuntivi</Typography>
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="subtitle1" gutterBottom>Installazione Professionale</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Rete di officine certificate in tutta Italia per l'installazione dei nostri prodotti.
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>Consulenza Tecnica</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Team di esperti disponibile per consigli su compatibilità e performance.
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>Programma Fedeltà</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Accumula punti su ogni acquisto e ottieni sconti esclusivi.
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;