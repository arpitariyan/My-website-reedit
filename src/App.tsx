import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Facts from './components/Facts/Facts';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Education from 'components/Education/Education';
import Testimonials from 'components/Testimonials/Testimonials';
import theme from './styles/theme';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Facts />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
