



// import React, { useState } from 'react';
// import { Box, Typography, Grid, IconButton, TextField, Button } from '@mui/material';
// import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';
// import { motion } from 'framer-motion';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../../Config/Firebase-config/Firebase'; // Import Firestore config

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSuccess(false);
    
//     try {
//       await addDoc(collection(db, 'messages'), {
//         name,
//         email,
//         message,
//         timestamp: new Date(),
//       });
//       setSuccess(true);
//       setName('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.error("Error adding message: ", error);
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <Box
//       sx={{
//         height: '100vh',
//         background: 'linear-gradient(145deg, #2b1055, #000000)', // Background gradient
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         padding: '0 20px',
//       }}
//     >
//       <Grid container spacing={3} sx={{ alignItems: 'center' }}>
//         {/* Heading Section */}
//         <Grid item xs={12}>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 color: '#ffffff',
//                 marginBottom: '20px',
//                 textShadow: '0px 0px 8px #64ffda',
//               }}
//             >
//               Let's Connect!
//             </Typography>
//           </motion.div>
//         </Grid>

//         {/* Social Icons */}
//         <Grid item xs={12}>
//           <motion.div
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
//               <IconButton
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 sx={{
//                   color: '#4267B2',
//                   fontSize: '40px',
//                   '&:hover': { transform: 'scale(1.2)' },
//                 }}
//               >
//                 <SiFacebook />
//               </IconButton>

//               <IconButton
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 sx={{
//                   color: '#E1306C',
//                   fontSize: '40px',
//                   '&:hover': { transform: 'scale(1.2)' },
//                 }}
//               >
//                 <SiInstagram />
//               </IconButton>

//               <IconButton
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 sx={{
//                   color: '#0077B5',
//                   fontSize: '40px',
//                   '&:hover': { transform: 'scale(1.2)' },
//                 }}
//               >
//                 <SiLinkedin />
//               </IconButton>
//             </Box>
//           </motion.div>
//         </Grid>

//         {/* Contact Form */}
//         <Grid item xs={12} sx={{ mt: 5 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             <Typography
//               variant="h5"
//               sx={{ color: '#ffffff', marginBottom: '20px', textShadow: '0px 0px 8px #64ffda' }}
//             >
//               Send me a message!
//             </Typography>

//             <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
//               <TextField
//                 variant="outlined"
//                 label="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 fullWidth
//                 required
//                 sx={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}
//               />
//               <TextField
//                 variant="outlined"
//                 label="Email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 fullWidth
//                 required
//                 sx={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}
//               />
//               <TextField
//                 variant="outlined"
//                 label="Message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 fullWidth
//                 required
//                 multiline
//                 rows={4}
//                 sx={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}
//               />
//               <Button
//                 variant="contained"
//                 type="submit"
//                 disabled={isSubmitting}
//                 fullWidth
//                 sx={{
//                   backgroundColor: '#64ffda',
//                   color: '#000',
//                   '&:hover': { backgroundColor: '#52e0b9' },
//                 }}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </Button>
//               {success && (
//                 <Typography
//                   sx={{ color: '#64ffda', marginTop: '10px', textShadow: '0px 0px 8px #64ffda' }}
//                 >
//                   Message sent successfully!
//                 </Typography>
//               )}
//             </form>
//           </motion.div>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Contact;





















import React, { useState } from 'react';
import { Box, Typography, Grid, IconButton, TextField, Button } from '@mui/material';
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Config/Firebase-config/Firebase'; // Import Firestore config

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    
    try {
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error adding message: ", error);
    }
    setIsSubmitting(false);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(145deg, #2b1055, #000000)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        marginTop:'30px'
      }}
    >
      <Grid container spacing={3} sx={{ alignItems: 'center' }}>
        {/* Heading Section */}
        <Grid item xs={12}>
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
              Let's Connect!
            </Typography>
          </motion.div>
        </Grid>

        {/* Social Icons */}
        <Grid item xs={12}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              <IconButton
                href="https://www.facebook.com/sayyedsharjeel.khans"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#4267B2',
                  fontSize: '40px',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.2) rotate(15deg)', color: '#64ffda' },
                }}
              >
                <SiFacebook />
              </IconButton>

              <IconButton
                href="https://www.instagram.com/_hafiz_sharjeel_/?locale=it_IT"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#E1306C',
                  fontSize: '40px',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.2) rotate(-15deg)', color: '#64ffda' },
                }}
              >
                <SiInstagram />
              </IconButton>

              <IconButton
                href="https://pk.linkedin.com/in/h-sharjeel-a4b81a2a8"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#0077B5',
                  fontSize: '40px',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.2) rotate(15deg)', color: '#64ffda' },
                }}
              >
                <SiLinkedin />
              </IconButton>
            </Box>
          </motion.div>
        </Grid>

        {/* Contact Form with Animations */}
        <Grid item xs={12} sx={{ mt: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, staggerChildren: 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{ color: '#ffffff', marginBottom: '20px', textShadow: '0px 0px 8px #64ffda' }}
            >
              Send me a message!
            </Typography>

            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <TextField
                  variant="outlined"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                  sx={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <TextField
                  variant="outlined"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                  sx={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
                <TextField
                  variant="outlined"
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                  required
                  multiline
                  rows={4}
                  sx={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                  sx={{
                    backgroundColor: '#64ffda',
                    color: '#000',
                    '&:hover': { backgroundColor: '#52e0b9' },
                    boxShadow: '0px 0px 15px 5px #64ffda',
                    transition: 'box-shadow 0.3s ease-in-out',
                    animation: isSubmitting ? 'pulse 1s infinite' : 'none',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>

              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <Typography
                    sx={{ color: '#64ffda', marginTop: '10px', textShadow: '0px 0px 8px #64ffda' }}
                  >
                    Message sent successfully!
                  </Typography>
                </motion.div>
              )}
            </form>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
