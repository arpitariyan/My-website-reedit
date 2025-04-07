import React from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import profile from '../../Images/Black and Puprle Modern Work ID Card.png';

const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
  // backgroundColor: '#23242a',
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

const ExperienceCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderLeft: '2px solid rgba(98,255,134,0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: -8,
    top: 0,
    width: 14,
    height: 14,
    borderRadius: '50%',
    backgroundColor: '#62FF86',
    border: '2px solid #1E1F25',
  },
  '&:hover': {
    '&::before': {
      transform: 'scale(1.2)',
      transition: 'transform 0.3s ease',
    },
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: 8,
  backgroundColor: 'rgba(98,255,134,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    color: '#62FF86',
    fontSize: 24,
  },
}));

const experiences = [
  {
    title: 'Full Stack Devlopment (Intern)',
    company: 'Skyy Rider Institutions',
    period: '2022',
    description: 'Worked as a Full Stack Development Intern, gaining practical experience in building and deploying responsive web applications using modern technologies.',
  },
  {
    title: 'Full Stack Devlopment (Intern)',
    company: 'Technoboot',
    period: '2022 - 2023',
    description: 'Worked as a Full Stack Development Intern, gaining practical experience in building and deploying responsive web applications using modern technologies.',
  },
  {
    title: 'Web Developer',
    company: 'Technoboot',
    period: '2023 - 2024',
    description: 'Creative Web Developer skilled in designing, developing, and maintaining responsive websites with strong focus on user experience and performance.',
  },
];

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 1 }}>
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
              }}
            >
              WORK EXPERIENCE
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                marginBottom: 3,
                color: '#fff',
              }}
            >
              My Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '600px',
                marginBottom: 6,
                lineHeight: 1.8,
              }}
            >
              Hands-on experience in real-world projects, focused on skill development, teamwork, and delivering results in fast-paced working environments.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <IconBox>
                    <WorkIcon />
                  </IconBox>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      marginBottom: 1,
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#62FF86',
                        fontWeight: 500,
                        marginRight: 1,
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.875rem',
                      }}
                    >
                      ( {exp.period} )
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.8,
                    }}
                  >
                    {exp.description}
                  </Typography>
                </ExperienceCard>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={profile}
                alt="Work Experience"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 