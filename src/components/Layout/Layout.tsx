import React from 'react';
import { Box, styled } from '@mui/material';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const LayoutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#1E1F25', // Dark background color
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at top right, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)`,
    zIndex: 0,
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    right: '10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(98,255,134,0.1) 0%, rgba(98,255,134,0) 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    zIndex: 0,
    pointerEvents: 'none',
  }
}));

const MotionMain = motion(Box);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <MotionMain
        component="main"
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          position: 'relative',
          zIndex: 1,
          padding: { xs: 2, sm: 3, md: 4 },
          ['@media (min-width: 900px)']: {
            marginLeft: '280px',
          },
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </MotionMain>
    </LayoutContainer>
  );
};

export default Layout; 