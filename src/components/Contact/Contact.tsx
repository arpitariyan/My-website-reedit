import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  color: '#fff',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  '& .MuiSvgIcon-root': {
    color: '#62FF86',
    fontSize: '2rem',
  },
}));

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '500px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  [theme.breakpoints.down('md')]: {
    height: '400px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '300px',
  },
}));

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 1,
              color: '#fff',
              fontWeight: 700,
            }}
          >
            Let's Start A New Project
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: '#62FF86',
              fontWeight: 500,
              letterSpacing: 1,
            }}
          >
            CONTACT ME
          </Typography>
        </motion.div>

        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactInfo>
                <LocationOnIcon />
                <Box>
                  <Typography variant="h6" sx={{ mb: 1, color: '#fff' }}>
                    Location
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    7VW5+5PX, Parida Colony, Rasulgarh, Bhubaneswar, Odisha 751007, India
                  </Typography>
                </Box>
              </ContactInfo>

              <ContactInfo>
                <PhoneIcon />
                <Box>
                  <Typography variant="h6" sx={{ mb: 1, color: '#fff' }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    +91 9348297217
                  </Typography>
                </Box>
              </ContactInfo>

              <ContactInfo>
                <EmailIcon />
                <Box>
                  <Typography variant="h6" sx={{ mb: 1, color: '#fff' }}>
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    arpitariyanm@gmail.com
                  </Typography>
                </Box>
              </ContactInfo>

              <ContactInfo>
                <WhatsAppIcon />
                <Box>
                  <Typography variant="h6" sx={{ mb: 1, color: '#fff' }}>
                    WhatsApp
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    +91 9348297217
                  </Typography>
                </Box>
              </ContactInfo>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <MapContainer>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10320.051691442386!2d85.8567827118898!3d20.295504012478325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a100d2c1eab%3A0x3a5eab24d4b88fd9!2sPalamandap!5e1!3m2!1sen!2sus!4v1744066982477!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </MapContainer>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 