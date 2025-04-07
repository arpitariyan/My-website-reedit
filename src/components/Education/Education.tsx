import React from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import profile from '../../Images/Black and Puprle Modern Work ID Card-1.png';

const EducationSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
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

const EducationCard = styled(motion.div)(({ theme }) => ({
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

const educations = [
  {
    degree: '10th',
    institution: 'Saraswati shishu vidya mandir',
    period: '2019',
    description: 'Motivated 10th-grade pass-out with strong learning ability, seeking opportunities to grow skills and gain practical work experience',
    grade: 'CGPA: 3.0/4.0',
  },
  {
    degree: 'Diploma Electrical Engineering',
    institution: 'Nilachal Polytechnic',
    period: '2019-2022',
    description: 'Diploma holder with practical knowledge, strong technical skills, and a desire to apply learning in real-world professional environments.',
    grade: 'CGPA: 3.88/4.0',
  },
  {
    degree: 'Full Stack Devlopment',
    institution: 'Skyy Rider Institutions',
    period: '2022',
    description: 'Skilled Full Stack Developer with expertise in front-end and back-end technologies, building responsive, dynamic, and user-friendly web applications.',
    grade: 'GPA: 5.00/5.00',
  },
  {
    degree: 'B.Tech Computer Science',
    institution: 'Konark Institute of Science and Technology',
    period: 'Continue',
    description: 'Currently pursuing B.Tech in Computer Science, passionate about coding, problem-solving, and continuously learning new technologies to build innovative solutions.',
    grade: 'GPA: 5.00/5.00',
  },
];

const Education: React.FC = () => {
  return (
    <EducationSection id="education">
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
              MY EDUCATION
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                marginBottom: 3,
                color: '#fff',
              }}
            >
              Education & Skills
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
              Dedicated to continuous learning, passionate about knowledge, and committed to academic growth and personal development through quality education.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {educations.map((edu, index) => (
                <EducationCard
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <IconBox>
                    <SchoolIcon />
                  </IconBox>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      marginBottom: 1,
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#62FF86',
                        fontWeight: 500,
                        marginRight: 1,
                      }}
                    >
                      {edu.institution}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.875rem',
                      }}
                    >
                      ( {edu.period} )
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#62FF86',
                      marginBottom: 2,
                      fontWeight: 500,
                    }}
                  >
                    {edu.grade}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.8,
                    }}
                  >
                    {edu.description}
                  </Typography>
                </EducationCard>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={profile}
                alt="Education Background"
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
    </EducationSection>
  );
};

export default Education; 