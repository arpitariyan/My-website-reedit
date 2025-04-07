import React, { useState, useEffect } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import logo from '../../Images/logo_Set.png';

const NavbarContainer = styled(Box)(({ theme }) => ({
  width: 280,
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  zIndex: 10,
  backgroundColor: 'rgba(30, 31, 37, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileNavButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1200,
  backgroundColor: 'rgba(30, 31, 37, 0.95)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#fff',
}));

const LogoIcon = styled('img')({
  width: '100%',
  // height: '50px',
});

const NavList = styled(List)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const MotionListButton = motion(ListItemButton);
const MotionButton = motion(Button);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home', section: 'hero' },
    { id: 'about', label: 'About', section: 'about' },
    { id: 'skills', label: 'Skills', section: 'skills' },
    { id: 'experience', label: 'Experience', section: 'experience' },
    { id: 'education', label: 'Education', section: 'education' },
    { id: 'funfacts', label: 'Fun & Facts', section: 'facts' },
    { id: 'works', label: 'Works', section: 'projects' },
    { id: 'testimonials', label: 'Testimonials', section: 'testimonials' },
    { id: 'contact', label: 'Contact', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.section)
      })).filter(item => item.element);

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + window.innerHeight / 4;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Check if we're at the bottom of the page
      if (window.innerHeight + window.scrollY >= documentHeight - 50) {
        const lastSection = sections[sections.length - 1];
        setActiveItem(lastSection.id);
        return;
      }

      // Check if we're at the very top of the page
      if (window.scrollY < 100) {
        setActiveItem(sections[0].id);
        return;
      }

      let currentSection = sections[0].id;
      for (const section of sections) {
        const element = section.element;
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = window.scrollY + rect.top;
          const height = rect.height;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      setActiveItem(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check after a short delay to ensure all sections are rendered
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (itemId: string, section: string) => {
    setActiveItem(itemId);
    if (isMobile) handleDrawerToggle();

    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 0; // Adjusted to 0 since we're using padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navContent = (
    <>
      <Logo>
        <LogoIcon src={logo} alt="Thames" />
        {/* <LogoText>Thames</LogoText> */}
      </Logo>
      <NavList>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <MotionListButton
              sx={{
                marginBottom: 1,
                borderRadius: 1,
                color: '#fff',
                backgroundColor: activeItem === item.id ? 'rgba(98, 255, 134, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(98, 255, 134, 0.05)',
                },
              }}
              onClick={() => handleNavClick(item.id, item.section)}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: activeItem === item.id ? 600 : 400,
                      color: activeItem === item.id ? '#62FF86' : 'rgba(255, 255, 255, 0.7)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.label}
                  </Typography>
                }
              />
            </MotionListButton>
          </ListItem>
        ))}
      </NavList>
      <Box
        sx={{
          p: 3,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
        }}
      >
        <MotionButton
          variant="contained"
          sx={{
            backgroundColor: '#62FF86',
            color: '#000',
            padding: '10px 24px',
            borderRadius: 1,
            textTransform: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#50CC6B',
            },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href='https://drive.google.com/file/d/1E4omdge4IK5-JvykL67xt9o5gdDeQTeh/view?pli=1'
        >
          DOWNLOAD CV
        </MotionButton>
      </Box>
    </>
  );

  return (
    <>
      <MobileNavButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </MobileNavButton>

      <NavbarContainer component="nav">{navContent}</NavbarContainer>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'rgba(30, 31, 37, 0.98)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {navContent}
      </Drawer>
    </>
  );
};

export default Navbar; 