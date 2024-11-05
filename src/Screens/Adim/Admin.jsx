
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Paper, Button, Modal, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, storage } from '../../Config/Firebase-config/Firebase'; // Import Firestore and Storage config
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Storage functions

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false); // For modal
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    url: '',
    language: '',  // New field for programming language
    framework: '',  // New field for framework
    style: '',      // New field for style
    imgUrl: '',     // URL for the uploaded image
    date: new Date().toISOString(),
  });
  const [file, setFile] = useState(null); // State for file upload

  // Fetching messages and projects
  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMessages(data);
    };

    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProjects(data);
    };

    fetchMessages();
    fetchProjects();
  }, []);

  // Handling Modal open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handling new project input change
  const handleInputChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  // Handling file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  // Submitting new project to Firestore
  const handleSubmitProject = async () => {
    if (newProject.title && newProject.description && newProject.url && newProject.language && file) { // Check if all fields are filled
      try {
        // Upload the file to Firebase Storage
        const storageRef = ref(storage, `projects/${file.name}`);
        await uploadBytes(storageRef, file);

        // Get the download URL of the uploaded file
        const imgUrl = await getDownloadURL(storageRef);

        // Create the project object with the image URL
        const projectData = { ...newProject, imgUrl };

        await addDoc(collection(db, 'projects'), projectData);
        setProjects([...projects, projectData]); // Add to local state
        handleClose(); // Close modal
        setNewProject({ title: '', description: '', url: '', language: '', framework: '', style: '', imgUrl: '', date: new Date().toISOString() }); // Reset form
        setFile(null); // Reset file
      } catch (error) {
        console.error("Error adding project: ", error);
      }
    } else {
      alert("Please fill all fields and upload an image.");
    }
  };

  return (
    <Box sx={{ height: '100vh', backgroundColor: '#2b1055', padding: '20px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          marginBottom: '20px',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Typography variant="h3" sx={{ textShadow: '0px 0px 10px #64ffda' }}>
          Admin Dashboard
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {/* Messages Section */}
        <Grid item xs={12}>
          <Paper elevation={4} sx={{ padding: '20px', backgroundColor: '#1e1e2f', color: '#fff' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h5" sx={{ textShadow: '0px 0px 5px #64ffda' }}>
                Messages
              </Typography>

              <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                {messages.map((message) => (
                  <Grid item xs={12} md={6} key={message.id}>
                    <Paper elevation={3} sx={{ padding: '15px', backgroundColor: '#333', color: '#64ffda' }}>
                      <Typography variant="h6">{message.name}</Typography>
                      <Typography variant="body1">{message.email}</Typography>
                      <Typography variant="body2">{message.content}</Typography>
                      <Typography variant="caption" sx={{ display: 'block', marginTop: '10px' }}>
                        {new Date(message.date).toLocaleString()} {/* Display message date */}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Paper>
        </Grid>

        {/* Projects Section */}
        <Grid item xs={12}>
          <Paper elevation={4} sx={{ padding: '20px', backgroundColor: '#1e1e2f', color: '#fff' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h5" sx={{ textShadow: '0px 0px 5px #64ffda' }}>
                Projects
              </Typography>

              {/* <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                {projects.map((project) => (
                  <Grid item xs={12} md={6} key={project.id}>
                    <Paper
                      elevation={3}
                      sx={{
                        padding: '15px',
                        backgroundColor: '#333',
                        color: '#64ffda',
                        maxWidth: 400, // Set a max width for the card
                        margin: 'auto', // Center the card horizontally
                      }}
                    >
                      <Typography variant="h6">{project.title}</Typography>
                      <Typography variant="body1">{project.description}</Typography>
                      <Typography variant="body2">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: '#64ffda' }}>
                          View Project
                        </a>
                      </Typography>
                      <Typography variant="body2">Language: {project.language}</Typography>
                      <Typography variant="body2">Framework: {project.framework}</Typography>
                      <Typography variant="body2">Style: {project.style}</Typography>
                      {project.imgUrl && (
                        <img
                          src={project.imgUrl}
                          alt={project.title}
                          style={{
                            width: '100%', // Make the image responsive
                            maxHeight: '150px', // Limit the height of the image
                            objectFit: 'cover', // Ensure the image covers the area without distortion
                            marginTop: '10px',
                          }}
                        />
                      )}
                      <Typography variant="caption" sx={{ display: 'block', marginTop: '10px' }}>
                        {new Date(project.date).toLocaleString()}
                      </Typography>
                    </Paper>
                  </Grid> 
                ))}
              </Grid>

              {/* Add Project Button */}
              <Button
                variant="contained"
                sx={{ marginTop: '20px', backgroundColor: '#64ffda', color: '#000' }}
                onClick={handleOpen}
              >
                Add New Project
              </Button>
            </motion.div>
          </Paper>
        </Grid>
      </Grid>

      {/* Add Project Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-project-modal"
        aria-describedby="add-project-form"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: '#1e1e2f',
            padding: '20px',
            boxShadow: 24,
            color: '#fff',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '20px', textShadow: '0px 0px 8px #64ffda' }}>
            Add New Project
          </Typography>
          <TextField
            label="Project Title"
            name="title"
            value={newProject.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ input: { color: '#fff' }, label: { color: '#64ffda' } }}
          />
          <TextField
            label="Project Description"
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={3}
            sx={{ input: { color: '#fff' }, label: { color: '#64ffda' } }}
          />
          <TextField
            label="Project URL"
            name="url"
            value={newProject.url}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ input: { color: '#fff' }, label: { color: '#64ffda' } }}
          />
          <TextField
            label="Programming Language"
            name="language"
            value={newProject.language}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ input: { color: '#fff' }, label: { color: '#64ffda' } }}
          />
          <TextField
            label="Framework"
            name="framework"
            value={newProject.framework}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ input: { color: '#fff' }, label: { color: '#64ffda' } }}
          />
          <TextField
            label="Style"
            name="style"
            value={newProject.style}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ input: { color: '#fff' }, label: { color: '#64ffda' } }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginTop: '10px', marginBottom: '20px' }}
          />
          <Button
            variant="contained"
            sx={{ marginTop: '20px', backgroundColor: '#64ffda', color: '#000' }}
            onClick={handleSubmitProject}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Dashboard;
