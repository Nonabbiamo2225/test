import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, ShoppingCart as CartIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Logo from '../Logo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Catalogo', path: '/catalogo' },
    { text: 'Area Rivenditori', path: '/area-rivenditori' },
    { text: 'Blog Tecnico', path: '/blog-tecnico' },
    { text: 'Contatti', path: '/contatti' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <AppBar 
        position="sticky" 
        sx={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          color: 'primary.main'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <Logo size={40} />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: 'background.paper',
                    width: 240,
                    p: 2
                  }
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  color="primary"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(46, 125, 50, 0.08)'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <IconButton
                color="primary"
                component={RouterLink}
                to="/carrello"
                sx={{ ml: 2 }}
              >
                <CartIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;