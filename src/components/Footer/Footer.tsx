import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Technon. All rights reserved.
          </Typography>

          {/* <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" color="inherit" underline="none">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="none">
              Terms of Service
            </Link>
          </Box> */}

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              color="inherit"
              aria-label="Facebook"
              component="a"
              href="https://www.facebook.com/sunu0956?mibextid=qi2Omg&rdid=CHdclJErgF6dONvI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HYT4jjAkx%2F%3Fmibextid%3Dqi2Omg#"
              target="_blank"
              size="small"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/arpit-ariyan-maharana-21a62524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Fproject-creations.netlify.app%2F"
              target="_blank"
              size="small"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="WhatsApp"
              component="a"
              href="https://wa.me/qr/PKVRGO5BEECWN1"
              target="_blank"
              size="small"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Instagram"
              component="a"
              href="https://www.instagram.com/ll._designer_.ll_.uiux_.1/?igsh=amxzamd0OWxpaWhi#"
              target="_blank"
              size="small"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="GitHub"
              component="a"
              href="https://github.com/arpitariyan"
              target="_blank"
              size="small"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 