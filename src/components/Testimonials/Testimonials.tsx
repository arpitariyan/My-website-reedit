import React, { useState } from 'react';
import { Box, Container, Typography, styled, IconButton } from '@mui/material';
import { domMax, LazyMotion, m } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import profile1 from '../../Images/afffaf.png'

const TestimonialsSection = styled(Box)(({ theme }) => ({
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

const TestimonialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const TestimonialContent = styled(Box)(({ theme }) => ({
  flex: 1,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: -40,
    top: -40,
    width: 80,
    height: 80,
    opacity: 0.1,
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2362FF86'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'/%3E%3C/svg%3E") no-repeat center center`,
    backgroundSize: 'contain',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const TestimonialImage = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 500,
  height: 'auto',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: 'rgba(98,255,134,0.1)',
  color: '#62FF86',
  border: '1px solid rgba(98,255,134,0.2)',
  '&:hover': {
    backgroundColor: 'rgba(98,255,134,0.2)',
  },
  '&:disabled': {
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: 'rgba(255,255,255,0.2)',
  },
}));

const AuthorImage = styled('img')({
  width: 48,
  height: 48,
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: 16,
});

const testimonials = [
  {
    id: 1,
    quote: 'Its, a great website, great UI/UX Design, it’s working well, it’s opening very quickly, Web service is also great, It’s great for induvial and business purpose, I got lot better then I had thought’s for this price',
    author: 'Sambit suman jyethi',
    position: 'dribbble',
    avatar: 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg',
    image: 'https://st4.depositphotos.com/4836865/39321/i/450/depositphotos_393212636-stock-photo-business-people-team-sitting-meeting.jpg',
  },
  {
    id: 2,
    quote: 'I am a student sir. I took your website for a college project. I have qualified. Your website is working very fast and reliable. Thank you sir for giving it to me at this price.',
    author: 'Deepak Kumar Sahoo',
    position: 'Instagram',
    avatar: profile1,
    image: 'https://st4.depositphotos.com/4836865/39321/i/450/depositphotos_393212636-stock-photo-business-people-team-sitting-meeting.jpg',
  },
  {
    id: 3,
    quote: 'I am a doctor, I got a website mode from you for my clinic, your website is working very well and design is very good ai this price point',
    author: 'Ariyan das',
    position: 'Doctor of Dental Surgery',
    avatar: 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg',
    image: 'https://st4.depositphotos.com/4836865/39321/i/450/depositphotos_393212636-stock-photo-business-people-team-sitting-meeting.jpg',
  },
  {
    id: 4,
    quote: 'Project Creation’s software exceeded expectations with its smooth performance, user-friendly interface, and responsive customer support. Easy to use, reliable, and efficient.',
    author: 'Alok Kumar Roul',
    position: 'developer',
    avatar: 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg',
    image: 'https://st4.depositphotos.com/4836865/39321/i/450/depositphotos_393212636-stock-photo-business-people-team-sitting-meeting.jpg',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    if (page + newDirection < 0 || page + newDirection >= testimonials.length) return;
    setPage([page + newDirection, newDirection]);
  };

  return (
    <TestimonialsSection id="testimonials">
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <LazyMotion features={domMax}>
            <m.div
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
                TESTIMONIALS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  marginBottom: 3,
                  color: '#fff',
                }}
              >
                What People Say
              </Typography>
            </m.div>

            <Box sx={{ mt: 6, position: 'relative' }}>
              <Box 
                sx={{ 
                  position: 'relative', 
                  minHeight: 400, 
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <m.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%'
                  }}
                >
                  <TestimonialContainer>
                    <TestimonialContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                        <FormatQuoteIcon
                          sx={{
                            fontSize: 40,
                            color: '#62FF86',
                            marginRight: 2,
                            transform: 'scaleX(-1)',
                          }}
                        />
                        <Typography
                          variant="h5"
                          sx={{
                            color: 'rgba(255,255,255,0.9)',
                            lineHeight: 1.8,
                            fontWeight: 400,
                            fontStyle: 'italic',
                          }}
                        >
                          {testimonials[page].quote}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                        <AuthorImage
                          src={testimonials[page].avatar}
                          alt={testimonials[page].author}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ color: '#fff', fontWeight: 600 }}
                          >
                            {testimonials[page].author}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: '#62FF86' }}
                          >
                            {testimonials[page].position}
                          </Typography>
                        </Box>
                      </Box>
                    </TestimonialContent>
                    <TestimonialImage>
                      <img
                        src={testimonials[page].image}
                        alt="Team"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </TestimonialImage>
                  </TestimonialContainer>
                </m.div>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  position: 'absolute',
                  bottom: -80,
                  right: 0,
                }}
              >
                <NavigationButton
                  onClick={() => paginate(-1)}
                  disabled={page === 0}
                >
                  <ArrowBackIcon />
                </NavigationButton>
                <NavigationButton
                  onClick={() => paginate(1)}
                  disabled={page === testimonials.length - 1}
                >
                  <ArrowForwardIcon />
                </NavigationButton>
              </Box>
            </Box>
          </LazyMotion>
        </Box>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 