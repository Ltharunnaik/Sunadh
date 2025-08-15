import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery, AppBar, Toolbar, Typography, Box, Divider, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, Outlet } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import logo from '../../assets/log.png'
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AdminMain = () => {
    const navigate = useNavigate()
      const theme = useTheme();
      const [open, setOpen] = useState(true); // Start with the drawer open
      const isSmallScreen = useMediaQuery("(max-width:600px)");

      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    
    const handleDrawerToggle = () => {
        setOpen(!open); // Toggle drawer open/close
      };

      const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
      };
    
  return (
    <>
     <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBarStyled position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <img src={logo} onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
                    </Typography>
        </Toolbar>
      </AppBarStyled>

      {/* Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%"}}>
       <List>
          <ListItem button component={Link} to="/admin/joblist">
            <ListItemText primary="Job List" />
          </ListItem>
          <ListItem button component={Link} to="/admin/jobpost">
            <ListItemText primary="Job Post" />
          </ListItem>
          <ListItem button component={Link} to="/admin/blogpost">
            <ListItemText primary="Create Post" />
          </ListItem>
          <ListItem button component={Link} to="/admin/bloglist">
            <ListItemText primary="Post List" />
          </ListItem>
        </List>

        <Box sx={{display:"flex", alignItems:"end"}}>
          <Button sx={{width:"100%", backgroundColor:"error.main", fontWeight:800, fontSize:18}} onClick={handleLogout}>
            LogOut
          </Button>
        </Box>
       </Box>
      </Drawer>

      {/* Main Content */}
      <Main open={open}>
        <DrawerHeader />
        <Outlet/>
      </Main>
    </Box>

    </>
  )
}

export default AdminMain