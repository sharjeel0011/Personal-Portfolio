


// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { motion } from 'framer-motion';
// import Typewriter from 'typewriter-effect';

// const Home = () => {
//   return (
//     <Box
//       sx={{
//         height: '100vh',
//         backgroundColor: '#f9f9f9', // Light background
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         padding: '0 20px',
//       }}
//     >
//       {/* Greeting Text */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <Typography
//           variant="h4"
//           sx={{ color: '#333', marginBottom: '20px' }}
//         >
//           Hi there
//         </Typography>
//       </motion.div>

//       {/* Your Name */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         <Typography
//           variant="h2"
//           sx={{ color: '#1e90ff', fontWeight: 'bold', marginBottom: '40px' }}
//         >
//           I am H. Sharjeel
//         </Typography>
//       </motion.div>

//       {/* Typing Animation for Experience */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//       >
//         <Typography
//           variant="h5"
//           sx={{ color: '#555', fontWeight: 'bold' }}
//         >
//           <Typewriter
//             options={{
//               strings: ['MERN Stack Developer'],
//               autoStart: true,
//               loop: false,
//               delay: 50, // Typing speed
//               cursor: '|',
//             }}
//           />
//         </Typography>
//       </motion.div>
//     </Box>
//   );
// };

// export default Home;



























// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { motion } from 'framer-motion';
// import Typewriter from 'typewriter-effect';

// const Home = () => {
//   return (
//     <Box
//       sx={{
//         height: '100vh',
//         // background: 'linear-gradient(145deg, #1b2838, #333)', // Updated gradient background
//         // background: 'linear-gradient(145deg, #2b1055, #000000)',
//         background: 'linear-gradient(145deg, #2b1055, #000000)', /* Deep red to black */

//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'start',
//         padding: '0 20px',
//       }}
//     >
//       {/* Greeting Text */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             color: '#ffffff', // White for better readability
//             marginBottom: '20px',
//             textShadow: '0px 0px 8px #64ffda', // Subtle glow effect
//             textAlign:'start',
//             justifyContent:'start'
//           }}
//         >
//           Hi there                 👋 .............
//         </Typography>
//       </motion.div>

//       {/* Name Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         <Typography
//           variant="h2"
//           sx={{
//             color: '#ffffff',
//             fontWeight: 'bold',
//             marginBottom: '40px',
//             textShadow: '0px 0px 15px #64ffda', // Glowing text effect
//             textAlign:'start',
//           }}
//         >
//           I am <br/> H. Sharjeel
//         </Typography>
//       </motion.div>

//       {/* Typing Effect for Experience */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//       >
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#64ffda', // Neon blue for effect
//             fontWeight: 'bold',
//             textShadow: '0px 0px 8px #64ffda', // Glowing effect
//           }}
//         >
//           <Typewriter
//             options={{
//               strings: ['MERN Stack Developer'],
//               autoStart: true,
//               loop: false,
//               delay: 50,
//               cursor: '|',
//             }}
//           />
//         </Typography>
//       </motion.div>
//     </Box>
//   );
// };

// export default Home;























import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(145deg, #2b1055, #000000)', // Background gradient
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'start',
        padding: '0 20px',
       
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: 'center',
        }}
      >
        {/* Intro Section */}
        <Grid
          item
          xs={12}
          md={6} // Take half the width on medium and larger screens
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
         
          }}
        >
          {/* Greeting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#ffffff',
                marginBottom: '20px',
                textShadow: '0px 0px 8px #64ffda',
              }}
            >
              Hi there 👋
            </Typography>
          </motion.div>

          {/* Name Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                marginBottom: '40px',
                textShadow: '0px 0px 15px #64ffda',
              }}
            >
              I am <br /> H. Sharjeel
            </Typography>
          </motion.div>

          {/* Typing Effect for Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#64ffda',
                fontWeight: 'bold',
                textShadow: '0px 0px 8px #64ffda',
              }}
            >
              <Typewriter
                options={{
                  strings: ['MERN Stack Developer'],
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  cursor: '|',
                }}
              />
            </Typography>
          </motion.div>
        </Grid>

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
            src="https://media.licdn.com/dms/image/v2/D4D03AQEg1J6qYke-Kg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704615109849?e=2147483647&v=beta&t=cpp5kUrYKNa43GtU5BmspZnObaPJg7_B6DR_7VYmwGA" // Replace with the path to your image
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              boxShadow: '0px 0px 15px 5px #64ffda', // Neon glowing effect
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
