import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Box, Typography, Button, Container, Grid, useTheme, useMediaQuery, ButtonProps } from '@mui/material';
import { motion, HTMLMotionProps } from 'framer-motion';
import { styled, Theme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Profile from '../../Images/Untitled design (1).png';
import GitHubIcon from '@mui/icons-material/GitHub';


const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4, 0),
  backgroundColor: '#23242a',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    paddingTop: theme.spacing(12),
    minHeight: 'calc(100vh - 80px)',
  },
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));

const MotionBox = motion(Box);
const MotionButton = motion(Button);

interface SocialIconButtonProps extends ButtonProps {
  href?: string;
  target?: string;
  rel?: string;
}

const SocialIconButton = styled(MotionButton)<SocialIconButtonProps>(({ theme }) => ({
  minWidth: 'unset',
  width: 40,
  height: 40,
  borderRadius: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(3),
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const TypewriterText = styled(Box)({
  display: 'inline-block',
  '& span.cursor': {
    display: 'inline-block',
    backgroundColor: '#62FF86',
    marginLeft: 2,
    width: 2,
    animation: 'blink 1s infinite',
  },
  '@keyframes blink': {
    '0%, 100%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
    },
  },
});

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [text, setText] = useState('UI/UX Designer');
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
        }, 2000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <HeroContainer id="hero">
      <Container maxWidth="lg">
        <ContentGrid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  marginBottom: 2,
                  color: '#62FF86',
                  letterSpacing: 2,
                  fontWeight: 500,
                }}
              >
                HELLO I'M
              </Typography>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                  fontWeight: 700,
                  marginBottom: 2,
                  letterSpacing: -1,
                  color: '#fff',
                  lineHeight: 1.1,
                }}
              >
                Arpit Ariyan
                <br />
                Maharana
              </Typography>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 4,
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 400,
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                }}
              >
                A Passionate{' '}
                <TypewriterText component="span" sx={{ color: '#62FF86' }}>
                  {displayText}
                  {showCursor && <span className="cursor" />}
                </TypewriterText>
              </Typography>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: 2,
                width: isMobile ? '100%' : 'auto'
              }}>
                <MotionButton
                  variant="contained"
                  sx={{
                    backgroundColor: '#62FF86',
                    color: '#000',
                    padding: '14px 36px',
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    width: isMobile ? '100%' : 'auto',
                    '&:hover': {
                      backgroundColor: '#50CC6B',
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='https://drive.google.com/file/d/1wx_SBdd6FyzZCOBT5kJ4kOBdk0f-p-cb/view?usp=sharing'
                >
                  Download cv
                </MotionButton>
              </Box>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                aspectRatio: '1/1',
                maxWidth: {
                  xs: '280px',
                  sm: '320px',
                  md: '360px',
                  lg: '400px'
                },
                margin: '0 auto',
                // top: 0,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, rgba(98, 255, 134, 0.1), rgba(98, 255, 134, 0.05))',
                  zIndex: 0,
                }
              }}
            >
              <Box
                component={motion.img}
                src={Profile}
                alt="Profile"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  border: '4px solid rgba(98, 255, 134, 0.1)',
                  filter: 'grayscale(100%) contrast(1.1)',
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </ContentGrid>
      </Container>

      <SocialIcons>
        {[
          { icon: <FacebookIcon />, href: "https://www.facebook.com/sunu0956?mibextid=qi2Omg&rdid=CHdclJErgF6dONvI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HYT4jjAkx%2F%3Fmibextid%3Dqi2Omg#" },
          { icon: <InstagramIcon />, href: "https://www.instagram.com/ll._designer_.ll_.uiux_.1/?igsh=amxzamd0OWxpaWhi#" },
          { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/arpit-ariyan-maharana-21a62524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Fproject-creations.netlify.app%2F" },
          { icon: <GitHubIcon />, href: "https://github.com/arpitariyan" },
          { icon: <WhatsAppIcon />, href: "https://wa.me/qr/PKVRGO5BEECWN1" },
        ].map((social, index) => (
          <SocialIconButton
            key={index}
            component="a"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </SocialIconButton>
        ))}
      </SocialIcons>
    </HeroContainer>
  );
};

export default Hero; 