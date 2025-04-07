import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const FactsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#1E1F25',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
}));

const StatCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: 'rgba(98,255,134,0.2)',
  },
}));

const stats = [
  {
    number: '1',
    label: 'Years of Experience',
  },
  {
    number: '12',
    label: 'Total Clients',
  },
  {
    number: '30',
    label: 'Projects Completed',
  },
  {
    number: '15',
    label: 'Digital Products',
  },
];

const parseNumber = (numStr: string): number => {
  if (numStr.endsWith('k')) {
    return parseInt(numStr) * 1000;
  }
  return parseInt(numStr);
};

const formatNumber = (num: number, originalFormat: string): string => {
  if (originalFormat.endsWith('k')) {
    return `${Math.floor(num / 1000)}k`;
  }
  return num.toString();
};

const Facts: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>(
    stats.reduce((acc, stat) => ({ ...acc, [stat.label]: 0 }), {})
  );

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat) => {
        const targetValue = parseNumber(stat.number);
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const increment = targetValue / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          if (currentStep < steps) {
            setAnimatedValues((prev) => ({
              ...prev,
              [stat.label]: Math.min(Math.round(increment * currentStep), targetValue),
            }));
            currentStep++;
          } else {
            clearInterval(timer);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  return (
    <FactsSection id="facts">
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 1 }} ref={containerRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: '#62FF86',
                fontWeight: 600,
                marginBottom: 2,
                letterSpacing: 1,
                textAlign: 'left',
              }}
            >
              FACTS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                marginBottom: 3,
                color: '#fff',
                textAlign: 'left',
              }}
            >
              Fun Facts
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: '#62FF86',
                      fontWeight: 700,
                      marginBottom: 1,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                    }}
                  >
                    {formatNumber(animatedValues[stat.label], stat.number)}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 500,
                      opacity: 0.9,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </FactsSection>
  );
};

export default Facts; 