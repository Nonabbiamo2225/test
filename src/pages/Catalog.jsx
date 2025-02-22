import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  // Mock data for products
  const products = [
    {
      id: 1,
      name: 'Filtro Olio Motore Premium',
      category: 'motore',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1635784063754-0f5773e26e2e?w=500',
      description: 'Filtro olio di alta qualità per prestazioni ottimali del motore',
      specs: [
        'Compatibile con motori benzina e diesel',
        'Filtrazione particelle fino a 0.01 micron',
        'Durata: 15.000 km',
        'Certificazione ISO 9001'
      ],
      features: ['Alta efficienza', 'Lunga durata', 'Facile installazione']
    },
    {
      id: 2,
      name: 'Pastiglie Freno Anteriori Sport',
      category: 'freni',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
      description: 'Pastiglie freno ad alte prestazioni per una frenata sicura e potente',
      specs: [
        'Materiale: Ceramica ad alta densità',
        'Temperatura operativa: fino a 800°C',
        'Durata: 40.000 km',
        'Certificazione ECE R90'
      ],
      features: ['Bassa rumorosità', 'Minima produzione di polveri', 'Prestazioni costanti']
    },
    {
      id: 3,
      name: 'Ammortizzatori Posteriori Pro',
      category: 'sospensioni',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1629385701021-6d6264212099?w=500',
      description: 'Ammortizzatori di qualità superiore per un comfort ottimale e handling preciso',
      specs: [
        'Tipo: Idraulici a gas',
        'Regolazione: 12 posizioni',
        'Garanzia: 3 anni',
        'Certificazione TÜV'
      ],
      features: ['Regolabili in altezza', 'Resistenti alla corrosione', 'Setup personalizzabile']
    },
    {
      id: 4,
      name: 'Specchietto Retrovisore LED',
      category: 'carrozzeria',
      price: 35.99,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500',
      description: 'Specchietto retrovisore con indicatori LED integrati e funzione antiabbagliamento',
      specs: [
        'LED: SMD ad alta luminosità',
        'Regolazione: Elettrica',
        'Funzione: Antiabbagliamento automatico',
        'Certificazione E-mark'
      ],
      features: ['Riscaldabile', 'Memoria posizione', 'Ripiegamento automatico']
    },
    {
      id: 5,
      name: 'Kit Distribuzione Completo',
      category: 'motore',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
      description: 'Kit completo per la sostituzione della distribuzione con componenti di alta qualità',
      specs: [
        'Include: Cinghia, tendicinghia, rulli',
        'Materiale cinghia: EPDM rinforzato',
        'Durata: 60.000 km',
        'Garanzia: 2 anni'
      ],
      features: ['Kit completo', 'Qualità OEM', 'Istruzioni dettagliate']
    },
    {
      id: 6,
      name: 'Dischi Freno Ventilati',
      category: 'freni',
      price: 78.99,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
      description: 'Dischi freno ventilati ad alte prestazioni con trattamento anticorrosione',
      specs: [
        'Diametro: 320mm',
        'Materiale: Acciaio al carbonio',
        'Spessore: 28mm',
        'Certificazione ECE R90'
      ],
      features: ['Ventilazione ottimizzata', 'Trattamento anticorrosione', 'Bilanciatura di precisione']
    },
    {
      id: 7,
      name: 'Kit Sospensioni Sportive',
      category: 'sospensioni',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1629385701021-6d6264212099?w=500',
      description: 'Kit completo sospensioni per assetto sportivo con regolazione dell\'altezza',
      specs: [
        'Abbassamento: 30-50mm',
        'Materiale: Acciaio Cr-Mo',
        'Molle: Progressive rate',
        'Certificazione TÜV'
      ],
      features: ['Regolazione completa', 'Setup personalizzabile', 'Qualità racing']
    },
    {
      id: 8,
      name: 'Paraurti Anteriore Sport',
      category: 'carrozzeria',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500',
      description: 'Paraurti anteriore design sportivo con splitter integrato e prese d\'aria maggiorate',
      specs: [
        'Materiale: ABS rinforzato',
        'Verniciabile',
        'Include: Hardware di montaggio',
        'Certificazione ABE'
      ],
      features: ['Design aerodinamico', 'Facile installazione', 'Compatibilità OEM']
    },
    {
      id: 9,
      name: 'Centralina Aggiuntiva Motore',
      category: 'motore',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1635784063754-0f5773e26e2e?w=500',
      description: 'Centralina aggiuntiva per ottimizzazione prestazioni motore con connessione Bluetooth',
      specs: [
        'Incremento potenza: +15-25%',
        'Connettività: Bluetooth 5.0',
        'App dedicata',
        'Certificazione CE'
      ],
      features: ['Programmabile', 'Modalità multiple', 'Diagnostica integrata']
    },
    {
      id: 10,
      name: 'Kit Frizione Sport',
      category: 'motore',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1635784063754-0f5773e26e2e?w=500',
      description: 'Kit frizione sportiva completo con volano alleggerito e cuscinetto rinforzato',
      specs: [
        'Materiale: Kevlar/Ceramica',
        'Coppia max: 500Nm',
        'Peso volano: -30%',
        'Garanzia: 2 anni'
      ],
      features: ['Risposta immediata', 'Maggiore durata', 'Performance racing']
    },
    {
      id: 11,
      name: 'Sistema Scarico Sportivo',
      category: 'motore',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1635784063754-0f5773e26e2e?w=500',
      description: 'Sistema di scarico completo in acciaio inox con valvola elettronica',
      specs: [
        'Materiale: Inox AISI 304',
        'Diametro: 76mm',
        'Omologazione: Euro 6',
        'Controllo via App'
      ],
      features: ['Sound personalizzabile', 'Aumento potenza', 'Design sportivo']
    },
    {
      id: 12,
      name: 'Kit Assetto Regolabile',
      category: 'sospensioni',
      price: 799.99,
      image: 'https://images.unsplash.com/photo-1629385701021-6d6264212099?w=500',
      description: 'Kit assetto completo con ammortizzatori regolabili e molle progressive',
      specs: [
        'Regolazione: Compressione/Estensione',
        'Materiale: Alluminio 6061',
        'Garanzia: 3 anni',
        'Certificazione TÜV'
      ],
      features: ['Setup professionale', 'Qualità racing', 'Massima personalizzazione']
    }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 70%',
          opacity: 0.40,
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Catalogo Ricambi
        </Typography>

        <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Cerca prodotti"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ flexGrow: 1, minWidth: '200px' }}
          />
          <FormControl sx={{ minWidth: '200px' }}>
            <InputLabel>Categoria</InputLabel>
            <Select
              value={category}
              label="Categoria"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="all">Tutte le categorie</MenuItem>
              <MenuItem value="motore">Motore</MenuItem>
              <MenuItem value="freni">Freni</MenuItem>
              <MenuItem value="sospensioni">Sospensioni</MenuItem>
              <MenuItem value="carrozzeria">Carrozzeria</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    component={RouterLink}
                    to={`/prodotto/${product.id}`}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      textDecoration: 'none',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {product.name}
                      </Typography>
                      <Typography variant="h6" color="primary" gutterBottom>
                        €{product.price.toFixed(2)}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        Visualizza Dettagli
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Catalog;