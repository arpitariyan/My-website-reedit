import React, { useState } from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import profile from '../../Images/Untitled design (2).png';
import Signatureimage from '../../Images/Signture_arpit.png';

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
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(4),
    width: '100%',
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  padding: theme.spacing(1, 0),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(2),
    paddingBottom: theme.spacing(1.5),
  },
}));

const Signature = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(4),
    width: '100%',
  },
}));

const SignatureImage = styled('img')(({ theme }) => ({
  height: 60,
  marginRight: 16,
  [theme.breakpoints.down('sm')]: {
    marginRight: 0,
    marginBottom: theme.spacing(2),
    height: 50,
  },
}));

const TiltWrapper = styled(motion.div)({
  width: '100%',
  perspective: 1000,
  transformStyle: 'preserve-3d',
  display: 'block',
});

const About: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
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
                        alt="Arpit Ariyan Maharana"
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
                    textAlign: 'left'
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
                    textAlign: 'left',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
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
                    textAlign: 'left',
                    fontSize: { xs: '0.95rem', sm: '1rem' }
                  }}
                >
                  I think, I'm a creative and totally passionate designer with a sharp eye for
                  detail and a love for clean, I mean, impactful design... usually... I specialize
                  in creating unique visuals that blend creativity with functionality — from
                  logos and branding to social media posts and UI designs...! My work is
                  focused on bringing ideas to life through thoughtful design, more or less,
                  strong composition, seriously more or less, and modern aesthetics. You
                  see, more or less, i believe good design not only looks beautiful but also
                  communicates and seriously connects emotionally.
                </Typography>

                <InfoGrid container spacing={2} sx={{ px: { xs: 0, sm: 0 } }}>
                  <Grid item xs={12} sm={6} sx={{ pl: { xs: 0, sm: 0 } }}>
                    <InfoItem>
                      <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, minWidth: '90px' }}>Name</Typography>
                      <Typography variant="body2" sx={{ color: '#fff', wordBreak: 'break-word', flex: 1 }}>Arpit Ariyan Maharana</Typography>
                    </InfoItem>
                    <InfoItem>
                      <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, minWidth: '90px' }}>Age</Typography>
                      <Typography variant="body2" sx={{ color: '#fff', flex: 1 }}>22 Years</Typography>
                    </InfoItem>
                    <InfoItem>
                      <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, minWidth: '90px' }}>Occupation</Typography>
                      <Typography variant="body2" sx={{ color: '#fff', flex: 1 }}>UI/UX Designer</Typography>
                    </InfoItem>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ pl: { xs: 0, sm: 2 } }}>
                    <InfoItem>
                      <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, minWidth: '90px' }}>Phone</Typography>
                      <Typography variant="body2" sx={{ color: '#fff', wordBreak: 'break-word', flex: 1 }}>+91 9348297217</Typography>
                    </InfoItem>
                    <InfoItem>
                      <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, minWidth: '90px' }}>Email</Typography>
                      <Typography variant="body2" sx={{ color: '#fff', wordBreak: 'break-word', flex: 1 }}>arpitariyanm@gmail.com</Typography>
                    </InfoItem>
                    <InfoItem>
                      <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, minWidth: '90px' }}>Nationality</Typography>
                      <Typography variant="body2" sx={{ color: '#fff', flex: 1 }}>Indian</Typography>
                    </InfoItem>
                  </Grid>
                </InfoGrid>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={6}>
                      <Signature>
                        <SignatureImage src={Signatureimage} alt="Arpit Ariyan Maharana Signature" />
                      </Signature>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} sx={{ marginTop: '22px' }}>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff' }}>
                          Arpit Ariyan Maharana
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                          UI/UX Designer
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* <Signature>
                  <SignatureImage src={Signatureimage} alt="Arpit Ariyan Maharana Signature" />
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff' }}>
                      Arpit Ariyan Maharana
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      UI/UX Designer, Devocks Inc.
                    </Typography>
                  </Box>
                </Signature> */}
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </AboutSection>
    </Box>
  );
};

export default About; 