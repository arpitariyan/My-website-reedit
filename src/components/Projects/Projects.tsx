import React, { useState } from 'react';
import { Box, Container, Grid, Typography, styled, Modal, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import project1 from '../../Images/Whats_app_bot.jpg'
import project2 from '../../Images/Attdance_and_payrolls.jpg'
import project3 from '../../Images/Leraing_management_system.jpg'
import project4 from '../../Images/Squal.jpg'
import project5 from '../../Images/TMS.jpg'
import project6 from '../../Images/Project_Developments.jpg'

const ProjectsSection = styled(Box)(({ theme }) => ({
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

const ProjectCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  minHeight: 280,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    cursor: 'pointer',
  },
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: '30vh',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
});

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(35, 36, 42, 0.9)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3),
  opacity: 1,
  transition: 'opacity 0.3s ease',
  [theme.breakpoints.up('md')]: {
    opacity: 0,
    '&:hover': {
      opacity: 1,
    },
  },
}));

const ProjectCategory = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.875rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '1px',
});

const ProjectTitle = styled(Typography)({
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 700,
  marginTop: '0.5rem',
  marginBottom: '1rem',
});

const ViewDetailsButton = styled(Box)({
  position: 'absolute',
  right: 24,
  top: 24,
  padding: '8px 16px',
  borderRadius: '20px',
  backgroundColor: '#62FF86',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#50CC6B',
    transform: 'translateY(-2px)',
  },
  '& svg': {
    color: '#23242a',
    fontSize: 20,
  },
  '& span': {
    color: '#23242a',
    fontSize: '0.875rem',
    fontWeight: 600,
  },
});

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  color: 'rgba(255, 255, 255, 0.7)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 800,
  maxHeight: '90vh',
  overflowY: 'auto',
  backgroundColor: '#1E1F25',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  padding: theme.spacing(4),
  paddingTop: theme.spacing(6),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:focus': {
    outline: 'none',
  },
}));

const projects = [
  {
    id: 1,
    category: 'WEB DESIGN',
    title: 'Whatsapp bulk message sender',
    description: 'The ability to send bulk messages via WhatsApp is a functionality provided to businesses and organizations through the WhatsApp Bulk Message Sender interface. Admins and marketing teams may be responsible for managing campaigns, uploading contact lists, and scheduling messages. Users have the ability to customize content with customizable templates, monitor delivery status, and compliance with WhatsApp policies, making the service fully suitable for promotions, alerts, and customer engagement.',
    image: project1,
    link: 'https://www.figma.com/design/736Yp50YdsfW3MKAzIb8vd/WhatAppBott?node-id=0-1&t=HwwYmhDItBLWYJK0-1',
  },
  {
    id: 2,
    category: 'WEB DESIGN',
    title: 'Attendance and Payroll',
    description: 'Attendance and Payroll: The Attendance and Payroll section allows you to track the attendance of the employee, hours worked, leave, etc. It automates salary calculations, which are calculated and deducted from their payroll systems and integrated with other systems for compliance. On the other hand, employees are able to also manage their own records to ensure that the data is correct Managers are able to manage the data, generate reports, approve timesheets, and even just view their own data to ensure that it matches what exists in the database, allowing for their payroll to be correct.',
    image: project2,
    link: 'https://www.figma.com/design/2dkpQ5zzHSTMmbqmeBrYaQ/Attendance-%26-PayRoll?node-id=2-507&t=BwtepUgKKm3BW7Bs-1',
  },
  {
    id: 3,
    category: 'WEB DESIGN',
    title: 'Learning Management System',
    description: 'A Learning Management System (LMS) interface allows educators, instructors, and institutions to design, administer, and deliver online courses. This works by all admins uploading materials and tracking their progress through marking and by generating reports, while learners can access materials complete assignments and take assessments. Schools, services, and organizations can capitalize on this ideal, which enhances education/training efficiency.',
    image: project3,
    link: 'https://www.figma.com/design/Ox0IGD6mXVTyZh3Fy1S2b4/LMSS',
  },
  {
    id: 4,
    category: 'APPLICATION DESIGN',
    title: 'Social Media Application',
    description: 'Social Media Application interface are used to create profiles, share contents and interact with other users through their posts, messages, and comments. You can control user activity, maintain your rules, and review engagement statistics. Along with supporting multimedia sharing, real-time interactions, and community building, it serves as a suitable platform for individuals, businesses, and influencers, allowing for seamless communication and content distribution across platforms.',
    image: project4,
    link: 'https://www.figma.com/design/EX9rseOkub0wW8TIZuyEbd/KARKHANA',
  },
  {
    id: 5,
    category: 'WEB DESIGN',
    title: 'Team Management System',
    description: 'The Team Management System interface organizes the collaboration of managers and team leaders by enabling them to effectively track progress and organize tasks. Responsibility allocation, deadline assignment, and performance monitoring can be done by all users through dashboards and reporting tools. The system is ideal for businesses, remote teams, and projects, as it enhances productivity, communication, and accountability which collectively streamline goal achievement and coordination amongst teams.',
    image: project5,
    link: 'https://www.figma.com/design/iQNL2wNBK4KCvBVjYRM7Ct/TMS?node-id=0-1&t=RRnQuVX8AEBhwkz4-1',
  },
  {
    id: 6,
    category: 'Development',
    title: 'All Project Development',
    description: 'Reacts growth requires responsive and UI-driven user interfaces with the aid of reusable components. Developers build SPAs and manage state profficiently using Redux or Context API. It is also ideal for front end developers and teams due to its ease of integration with APIs, enhancement of business and start-up performance through the virtual DOM, and providing scalability and maintainability to web applications.',
    image: project6,
    link: 'https://github.com/arpitariyan',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleOpenModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsSection id="projects">
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
              PORTFOLIO
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                marginBottom: 3,
                color: '#fff',
              }}
            >
              My Recent Works
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard>
                    <ProjectImage src={project.image} alt={project.title} />
                    <ProjectOverlay>
                      <ProjectCategory>{project.category}</ProjectCategory>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ViewDetailsButton onClick={() => handleOpenModal(project)}>
                        <VisibilityIcon />
                        <span>View Details</span>
                      </ViewDetailsButton>
                    </ProjectOverlay>
                  </ProjectCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Modal
        open={selectedProject !== null}
        onClose={handleCloseModal}
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalContent>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CloseButton onClick={handleCloseModal} aria-label="close">
                <CloseIcon />
              </CloseButton>
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  marginBottom: 3,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  marginBottom: 1,
                }}
              >
                {selectedProject.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#62FF86',
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                {selectedProject.category}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: 3,
                  lineHeight: 1.8,
                }}
              >
                {selectedProject.description}
              </Typography>
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: '#62FF86',
                  color: '#23242a',
                  padding: '10px 24px',
                  '&:hover': {
                    backgroundColor: '#50CC6B',
                  },
                }}
              >
                Show Result
              </Button>
            </motion.div>
          )}
        </ModalContent>
      </Modal>
    </ProjectsSection>
  );
};

export default Projects; 