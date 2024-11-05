


// import * as React from 'react';
// import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import InboxIcon from '@mui/icons-material/Inbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { useTheme } from '@mui/material/styles';
// import { useSpring, animated } from 'react-spring'; // Drawer animation
// import { motion } from 'framer-motion'; // Icon animation
// import { Navigate, useNavigate } from 'react-router-dom';
// function Nav() {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is mobile size
// const navigate = useNavigate()
// const pages = [
//   { name: 'Home', route: '/' },
//   { name: 'About', route: '/About' },
 
// ];


//   // Drawer animation
//   const drawerAnimation = useSpring({
//     transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
//   });

//   // Drawer content with animated icons
//   const drawerList = (
//     <Box
//       sx={{
//         width: 250,
//         height: '100%',
//         backgroundColor: '#2b1055', // Updated drawer background color
//         color: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center'
//       }}
//       role="presentation"
//       onClick={() => setDrawerOpen(false)}
//       onKeyDown={() => setDrawerOpen(false)}
//     >

//       <List>
//         {['Home', 'About', 'Projects', 'Contact'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {/* Animated Icons */}
//                 <motion.div
//                   whileHover={{ scale: 1.2, rotate: 360, color: '#f093fb' }}
//                   transition={{ type: 'spring', stiffness: 100, damping: 10 }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon sx={{ color: '#f093fb' }} /> : <MailIcon sx={{ color: '#f093fb' }} />}
//                 </motion.div>
//               </ListItemIcon>
//               <ListItemText primary={text} sx={{ color: '#fff' }} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/* Fixed Navbar */}
//       <AppBar position="fixed" sx={{ backgroundColor: '#2b1055' }}>
//         <Toolbar variant="dense">
//           {isMobile ? (
//             <>
//               {/* Show Menu Icon on mobile */}
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 sx={{ mr: 2 }}
//                 onClick={() => setDrawerOpen(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant="h6" color="inherit" component="div" sx={{ color: '#fff' }}>
//                 H.Sharjeel
//               </Typography>
//             </>
//           ) : (
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//               {/* Show full navigation with icons on larger screens */}
//               <Typography variant="h6" color="inherit" component="div" sx={{ color: '#fff' }}>
//                 H.Sharjeel
//               </Typography>
//               <Box sx={{ display: 'flex', gap: 3 ,cursor:'pointer'}}>
//                 <Box onClick={()=> navigate('/')} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <InboxIcon sx={{ color: '#f093fb' }} />
//                   <Typography  variant="h6" color="inherit" sx={{ color: '#fff' }}>
//                     Home
//                   </Typography>
//                 </Box>
//                 <Box onClick={()=> navigate('/About')} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <MailIcon sx={{ color: '#f093fb' }} />
//                   <Typography  variant="h6" color="inherit" sx={{ color: '#fff' }}>
//                     About
//                   </Typography>
//                 </Box>
//                 <Box onClick={()=> navigate('/Projects')}  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <InboxIcon sx={{ color: '#f093fb' }} />
//                   <Typography variant="h6" color="inherit" sx={{ color: '#fff' }}>
//                     Projects
//                   </Typography>
//                 </Box>
//                 <Box onClick={()=> navigate('/Contect')}  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <MailIcon sx={{ color: '#f093fb' }} />
//                   <Typography variant="h6" color="inherit" sx={{ color: '#fff' }}>
//                     Contact
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>
//       {/* Animated Drawer */}
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         PaperProps={{
//           sx: {
//             backgroundColor: '#2b1055', // Updated Drawer background color
//             color: '#fff',
//             height: '100%',
//           }
//         }}
//       >
//         <animated.div style={drawerAnimation}>{drawerList}</animated.div>
//       </Drawer>
//     </Box>
//   );
// }

// export default Nav;















import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { useTheme } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring'; // Drawer animation
import { motion } from 'framer-motion'; // Icon animation
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is mobile size
  const navigate = useNavigate();

  // Drawer animation
  const drawerAnimation = useSpring({
    transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
  });

  // Drawer content with animated icons
  const drawerList = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        backgroundColor: '#2b1055', // Updated drawer background color
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      role="presentation"
    >
      <List>
        {[
          { name: 'Home', route: '/' },
          { name: 'About', route: '/About' },
          { name: 'Projects', route: '/Projects' },
          { name: 'Contact', route: '/Contact' }
        ].map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.route); // Navigate to the route
                setDrawerOpen(false); // Close the drawer
              }}
            >
              <ListItemIcon>
                {/* Animated Icons */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360, color: '#f093fb' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                >
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: '#f093fb' }} />
                  ) : (
                    <MailIcon sx={{ color: '#f093fb' }} />
                  )}
                </motion.div>
              </ListItemIcon>
              <ListItemText primary={item.name} sx={{ color: '#fff' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Fixed Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#2b1055' }}>
        <Toolbar variant="dense">
          {isMobile ? (
            <>
              {/* Show Menu Icon on mobile */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div" sx={{ color: '#fff' }}>
                H.Sharjeel
              </Typography>
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              {/* Show full navigation with icons on larger screens */}
              <Typography variant="h6" color="inherit" component="div" sx={{ color: '#fff' }}>
                H.Sharjeel
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, cursor: 'pointer' }}>
                <Box onClick={() => navigate('/')} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <InboxIcon sx={{ color: '#f093fb' }} />
                  <Typography variant="h6" color="inherit" sx={{ color: '#fff' }}>
                    Home
                  </Typography>
                </Box>
                <Box onClick={() => navigate('/About')} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MailIcon sx={{ color: '#f093fb' }} />
                  <Typography variant="h6" color="inherit" sx={{ color: '#fff' }}>
                    About
                  </Typography>
                </Box>
                <Box onClick={() => navigate('/Projects')} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <InboxIcon sx={{ color: '#f093fb' }} />
                  <Typography variant="h6" color="inherit" sx={{ color: '#fff' }}>
                    Projects
                  </Typography>
                </Box>
                <Box onClick={() => navigate('/Contact')} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MailIcon sx={{ color: '#f093fb' }} />
                  <Typography variant="h6" color="inherit" sx={{ color: '#fff' }}>
                    Contact
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {/* Animated Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#2b1055',
            color: '#fff',
            height: '100%',
          }
        }}
      >
        <animated.div style={drawerAnimation}>{drawerList}</animated.div>
      </Drawer>
    </Box>
  );
}

export default Nav;
