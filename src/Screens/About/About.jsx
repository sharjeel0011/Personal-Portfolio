

import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss, SiMui } from 'react-icons/si'; // Use SiMui for Material UI icon
import MyExperience from '../../Components/Navebar/MYexperience/Myexperience';


const About = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        background: 'linear-gradient(145deg, #2b1055, #000000)',
        padding: '40px 20px',
        textAlign: 'start',
      }}
    >
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEg1J6qYke-Kg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704615109849?e=2147483647&v=beta&t=cpp5kUrYKNa43GtU5BmspZnObaPJg7_B6DR_7VYmwGA"
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              boxShadow: '0px 0px 15px 5px #64ffda',
            }}
          />
        </Grid>

        {/* Intro Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: { xs: 0, md: '20px' },
          }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Typography
              variant="h4"
              sx={{ color: '#ffffff', marginBottom: '20px', textShadow: '0px 0px 8px #64ffda' }}
            >
              About Me
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}>
            <Typography
              variant="h6"
              sx={{ color: '#ffffff', marginBottom: '20px', textShadow: '0px 0px 8px #64ffda' }}
            >
              I am a passionate MERN Stack Developer with a strong foundation in JavaScript, React, Node.js, and Firebase. 
              I love building dynamic web applications that provide great user experiences and solve real-world problems.
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
            <Typography variant="h6" sx={{ color: '#ffffff', textShadow: '0px 0px 8px #64ffda' }}>
              My goal is to continuously learn and grow as a developer, embracing new challenges and technologies.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* Skills Section */}
     

 
<Box
  sx={{
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor:'pointer'
  }}
>

<MyExperience/>

  <Typography
    variant="h4"
    sx={{
      color: '#ffffff',
      marginBottom: '20px',
      textShadow: '0px 0px 8px #64ffda',
    }}
  >
    My Skills
  </Typography>

  <Grid container spacing={4} justifyContent="center">
    {[
      { icon: <FaHtml5 />, label: 'HTML5' },
      { icon: <FaCss3Alt />, label: 'CSS3' },
      { icon: <FaJsSquare />, label: 'JavaScript' },
      { icon: <FaReact />, label: 'React.js' },
      { icon: <SiFirebase />, label: 'Firebase' },
      { icon: <FaGitAlt />, label: 'Git' },
      { icon: <SiMui />, label: 'Material UI' }, // Corrected icon for Material UI
      { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
      { icon: <FaBootstrap />, label: 'Bootstrap' },
    ].map((skill, index) => (
      <Grid item xs={4} sm={3} md={2} key={index} sx={{ textAlign: 'center' }}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Avatar sx={{ bgcolor: '#64ffda', width: 60, height: 60 }}>{skill.icon}</Avatar>
          <Typography sx={{ color: '#ffffff', marginTop: '10px' }}>{skill.label}</Typography>
        </motion.div>
      </Grid>
    ))}
  </Grid>
</Box>





    </Box>




  );
};

export default About;
