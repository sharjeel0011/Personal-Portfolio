

















// import React, { useEffect, useState } from 'react';
// import { Box, Grid, Typography, Paper, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import { collection, getDocs } from "firebase/firestore";
// import { db } from '../../Config/Firebase-config/Firebase'; // Import Firestore config

// const Project = () => {
//   const [projects, setProjects] = useState([]);

//   // Fetching projects from Firestore
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "projects"));
//         const data = querySnapshot.docs.map(doc => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         setProjects(data);
//       } catch (error) {
//         console.error("Error fetching projects: ", error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <Box sx={{ backgroundColor: '#1e1e2f', padding: '40px', minHeight: '100vh' }}>
//       <Typography variant="h3" sx={{ textAlign: 'center', color: '#fff', marginBottom: '30px', textShadow: '0 0 5px #64ffda' }}>
//         Our Projects
//       </Typography>
//       <Grid container spacing={4}>
//         {projects.map((project) => (
//           <Grid item xs={12} sm={6} md={4} key={project.id}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Paper elevation={4} sx={{ padding: '20px', backgroundColor: '#333', color: '#fff', borderRadius: '8px', height: '100%' }}>
//                 <Typography variant="h5" sx={{ marginBottom: '10px', color: '#64ffda' }}>
//                   {project.title}
//                 </Typography>
//                 <Typography variant="body1" sx={{ marginBottom: '10px' }}>
//                   {project.description}
//                 </Typography>
//                 <Typography variant="body2" sx={{ marginBottom: '10px', color: '#64ffda' }}>
//                   Programming Language: {project.language}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   sx={{ backgroundColor: '#64ffda', color: '#000', marginTop: '10px' }}
//                   href={project.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Project
//                 </Button>
//               </Paper>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Project;

























import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Paper, Button, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Config/Firebase-config/Firebase'; // Import Firestore config
import dayjs from 'dayjs'; // For date formatting

const Project = () => {
  const [projects, setProjects] = useState([]);

  // Fetching projects from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#1e1e2f', padding: '40px', minHeight: '100vh' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#fff', marginBottom: '30px', textShadow: '0 0 5px #64ffda' }}>
        Our Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper elevation={4} sx={{ padding: '20px', backgroundColor: '#333', color: '#fff', borderRadius: '8px', height: '100%', position: 'relative' }}>
                
                {/* Project Image */}
                <CardMedia
                  component="img"
                  image={project.imgUrl}
                  alt={project.title}
                  sx={{ borderRadius: '8px', marginBottom: '15px', height: '180px', objectFit: 'cover' }}
                />

                {/* Project Title */}
                <Typography variant="h5" sx={{ marginBottom: '10px', color: '#64ffda' }}>
                  {project.title}
                </Typography>

                {/* Project Description */}
                <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                  {project.description}
                </Typography>

                {/* Project Programming Language */}
                <Typography variant="body2" sx={{ marginBottom: '5px', color: '#64ffda' }}>
                  Programming Language: {project.language}
                </Typography>

                {/* Project Framework */}
                <Typography variant="body2" sx={{ marginBottom: '5px', color: '#64ffda' }}>
                  Framework: {project.framework}
                </Typography>

                {/* Project Style */}
                <Typography variant="body2" sx={{ marginBottom: '5px', color: '#64ffda' }}>
                  Style: {project.style}
                </Typography>

                {/* Project Date */}
                <Typography variant="body2" sx={{ marginBottom: '5px', color: '#64ffda' }}>
                  Date: {dayjs(project.date).format('MMMM D, YYYY')}
                </Typography>

                {/* View Project Button */}
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#64ffda', color: '#000', marginTop: '10px' }}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;
