import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { RecyclingRounded, Co2 } from '@mui/icons-material';

const SustainabilityCalculator = () => {
  const [weight, setWeight] = useState('');
  const [partType, setPartType] = useState('');

  const calculateImpact = () => {
    // Example calculation (simplified)
    const co2Savings = weight * 2.5; // 2.5 kg CO2 saved per kg of recycled metal
    const energySavings = weight * 1.8; // 1.8 kWh saved per kg of recycled metal
    return { co2Savings, energySavings };
  };

  const { co2Savings, energySavings } = calculateImpact();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <RecyclingRounded color="primary" />
            Calcolatore di Sostenibilità
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Scopri l'impatto ambientale positivo utilizzando parti auto riciclate
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Peso del Componente (kg)"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                helperText="Inserisci il peso approssimativo del componente"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Tipo di Componente"
                value={partType}
                onChange={(e) => setPartType(e.target.value)}
                helperText="Es: Paraurti, Portiera, ecc."
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Il Tuo Impatto Ambientale Positivo:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Co2 color="primary" />
                      Riduzione CO2
                    </Typography>
                    <Typography variant="h4" color="primary">
                      {weight ? co2Savings.toFixed(1) : '0'} kg
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      di CO2 risparmiata
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1">
                      Risparmio Energetico
                    </Typography>
                    <Typography variant="h4" color="primary">
                      {weight ? energySavings.toFixed(1) : '0'} kWh
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      di energia risparmiata
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SustainabilityCalculator;