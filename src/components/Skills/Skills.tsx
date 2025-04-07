import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';

const SkillsSection = styled(Box)(({ theme }) => ({
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
    // background: 'radial-gradient(circle at top right, rgba(98,255,134,0.05) 0%, rgba(98,255,134,0) 70%)',
    zIndex: 0,
  },
}));

const SkillCard = styled(motion.div)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  padding: theme.spacing(3),
  '&:hover .progress-circle': {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease',
  },
}));

const ProgressWrapper = styled(Box)({
  position: 'relative',
  display: 'inline-flex',
  marginBottom: '1rem',
});

const ProgressLabel = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 700,
});

const CounterText = styled(Typography)({
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 700,
});

const skills = [
  {
    name: 'Web Development',
    percentage: 90,
    color: '#62FF86',
  },
  {
    name: 'Hardware Development',
    percentage: 25,
    color: '#62FF86',
  },
  {
    name: 'Software Development',
    percentage: 90,
    color: '#62FF86',
  },
  {
    name: 'System Application',
    percentage: 75,
    color: '#62FF86',
  },
  {
    name: 'Project management',
    percentage: 80,
    color: '#62FF86',
  },
  {
    name: 'Data Administration',
    percentage: 80,
    color: '#62FF86',
  },
];

const Skills: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>(
    skills.reduce((acc, skill) => ({ ...acc, [skill.name]: 0 }), {})
  );
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      skills.forEach((skill) => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const increment = skill.percentage / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          if (currentStep < steps) {
            setAnimatedValues((prev) => ({
              ...prev,
              [skill.name]: Math.min(Math.round(increment * currentStep), skill.percentage),
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
    <SkillsSection id="skills">
      <Container maxWidth="lg" ref={containerRef}>
        <Box sx={{ textAlign: 'left', mb: 8, position: 'relative', zIndex: 1 }}>
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
              MY SKILL
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                marginBottom: 3,
                color: '#fff',
              }}
            >
              Growing Over Times
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '600px',
                lineHeight: 1.8,
              }}
            >
              Equipped with diverse technical and soft skills, constantly improving through hands-on projects, teamwork, and real-world problem-solving experiences.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={skill.name}>
              <SkillCard
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProgressWrapper>
                  <CircularProgress
                    className="progress-circle"
                    variant="determinate"
                    value={animatedValues[skill.name]}
                    size={160}
                    thickness={2}
                    sx={{
                      color: skill.color,
                      '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                        transition: 'stroke-dashoffset 0.5s ease',
                      },
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      borderRadius: '50%',
                    }}
                  />
                  <ProgressLabel>
                    <CounterText>
                      {`${animatedValues[skill.name]}%`}
                    </CounterText>
                  </ProgressLabel>
                </ProgressWrapper>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#fff',
                    fontWeight: 600,
                    marginTop: 2,
                    fontSize: '1.1rem',
                  }}
                >
                  {skill.name}
                </Typography>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 