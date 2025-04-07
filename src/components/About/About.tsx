import React, { useState } from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import profile from '../../Images/Untitled design (2).png';
import Signatureimage from '../../Images/SIgnture_main.png';

const AboutSection = styled(Box)(({ theme }) => ({
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

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -20,
    right: -20,
    width: 100,
    height: 100,
    border: '2px solid #62FF86',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      width: 60,
      height: 60,
      top: -10,
      right: -10,
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -20,
    left: -20,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(98,255,134,0.1)',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      width: 60,
      height: 60,
      bottom: -10,
      left: -10,
    },
  },
}));

const ProfileImage = styled(Box)({
  width: '100%',
  height: 'auto',
  borderRadius: 8,
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 8,
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s ease',
    '&:hover': {
      filter: 'grayscale(0%)',
    },
  },
});

const InfoGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& .MuiTypography-root': {
    marginBottom: theme.spacing(1),
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  padding: theme.spacing(1, 0),
}));

const Signature = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const SignatureImage = styled('img')({
  height: 60,
  marginRight: 16,
});

const TiltWrapper = styled(motion.div)({
  width: '100%',
  perspective: 1000,
  transformStyle: 'preserve-3d',
  display: 'block',
});

const About: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const z = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springZ = useSpring(z, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = width / 2;
    const centerY = height / 2;

    const rotateXValue = ((mouseY - centerY) / height) * 20;
    const rotateYValue = ((mouseX - centerX) / width) * 20;

    rotateX.set(-rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    z.set(-20); // Move backward by 20 pixels
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    z.set(0);
  };

  return (
    <Box id="about" component="section">
      <AboutSection>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <ImageWrapper>
                  <TiltWrapper
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      rotateX: springRotateX,
                      rotateY: springRotateY,
                      z: springZ,
                      scale: isHovered ? 1.02 : 1,
                      transition: 'scale 0.3s ease',
                    }}
                  >
                    <ProfileImage>
                      <motion.img
                        src={profile}
                        alt="James Smith"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </ProfileImage>
                  </TiltWrapper>
                </ImageWrapper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
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
                  ABOUT ME
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 3,
                    color: '#fff',
                  }}
                >
                  I Develop System that Works
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: 4,
                    lineHeight: 1.8,
                  }}
                >
                  Detail-oriented, analytical, and self-driven programmer with extensive experience building userfacing applications. Efficient and knowledgeable coder with skills in HTML, CSS, React-js, and JavaScript, java programming languages. Coordinated and collaborative team player with attention to detail, graphic design skills, and the ability to contribute to code base improvement initiatives and UX improvement projects.
                </Typography>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      marginBottom: 4,
                      fontStyle: 'italic',
                    }}
                  >
                    Oremque laudantium, totaeaque ipsa quae
                  </Typography> */}

                  <InfoGrid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <InfoItem>
                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)' }}>Name</Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>Arpit Ariyan Maharana</Typography>
                      </InfoItem>
                      <InfoItem>
                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)' }}>Age</Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>22 Years</Typography>
                      </InfoItem>
                      <InfoItem>
                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)' }}>Occupation</Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>UI/UX Designer</Typography>
                      </InfoItem>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InfoItem>
                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)' }}>Phone</Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>+91 9348297217</Typography>
                      </InfoItem>
                      <InfoItem>
                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)' }}>Email</Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>arpitariyanm@gmail.com</Typography>
                      </InfoItem>
                      <InfoItem>
                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)' }}>Nationality</Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>Indian</Typography>
                      </InfoItem>
                    </Grid>
                  </InfoGrid>

                  <Signature>
                    <SignatureImage src={Signatureimage} alt="Bruce Wayne Signature" />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff' }}>
                        Arpit Ariyan Maharana
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        UI/UX Designer, Devocks Inc.
                      </Typography>
                    </Box>
                  </Signature>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </AboutSection>
    </Box>
  );
};

export default About; 