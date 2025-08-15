import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Link, Button, Grid, Card, CardContent } from '@mui/material';

import logo from '../assets/log.png'
import useResponsive from '../hook/useResponsive';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function Navbar(props) {

  const navigate = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState({
    company: false,
    services: false,
    solutionHub: false,
    insights: false,
    industries: false,
    contacts: false,
    careers: false,
  });
  const [timeoutId, setTimeoutId] = React.useState(null);
  const { isSmallScreen } = useResponsive()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMouseEnter = (item) => {
    setHovered((prevState) => ({ ...prevState, [item]: true }));
  };

  const handleMouseLeave = (item) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(setTimeout(() => {
      setHovered((prevState) => ({ ...prevState, [item]: false }));
    }, 100));
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', backgroundColor: '#000000', color: 'white', height:'100vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', pl: 1 }}>
        <img src={logo} onClick={()=>navigate('/')} style={{cursor:'pointer'}} />
        <Typography variant="h6" color="#fff" fontSize={'14px'} onClick={()=>navigate('/')} sx={{cursor:'pointer'}}>Sunadh Technologies</Typography>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }} onClick={() => navigate('company')} component={Link}>
            <ListItemText primary="Company" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }} onClick={() => navigate('services')} component={Link} >
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }} onClick={() => navigate('solutionhub')} component={Link} >
            <ListItemText primary="Solution Hub" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }} onClick={() => navigate('insights')} component={Link} >
            <ListItemText primary="Insights" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }} onClick={() => navigate('industries')} component={Link} >
            <ListItemText primary="Industries" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }} onClick={() => navigate('contactus')} component={Link} >
            <ListItemText primary="Contacts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }} onClick={() => navigate('careers')} component={Link}>
            <ListItemText primary="Careers" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const servicesData = [
    {
      title: "Software Development",
      description: "Tailored software solutions to meet business needs, enhance efficiency, and drive growth through innovative technology.",
      link: "services",
    },
    {
      title: "Development Teams",
      description: "Dedicated professionals working exclusively on your project to ensure high-quality, customized development solutions.",
      link: "services",
    },
    {
      title: "IT Consulting",
      description: "Expert advice on leveraging technology to optimize business processes, foster innovation, and achieve strategic goals.",
      link: "services",
    },
    {
      title: "Digital Transformation",
      description: "Streamlining business operations, improving customer experiences, and enhancing efficiency with modern digital solutions.",
      link: "services",
    },
  ];

  const companyData = [
    {
      title: "Who We Are",
      description: "We create scalable digital products, leveraging expert developers to drive innovation, enhance business value, and ensure long-term success.",
      link: "company",
    },
    {
      title: "Our Mission",
      description: "We turn ideas into impactful solutions through teamwork, transparency, and shared values, transforming the IT industry for collective growth.",
      link: "company",
    },
    // {
    //   title: "Our People",
    //   description: "We cultivate excellence through collaboration, equality, and innovation, fostering a culture that empowers professionals to grow and succeed.",
    //   link: "#",
    // },
  ];

  const companyLinks = [
    { title: "Our Team", link: "#" },
    // { title: "Corporate Social Responsibility", link: "#" },
    { title: "Industry Contribution", link: "industries" },
    // { title: "Our Clients and Awards", link: "" },
  ];

  const solutionhubData = [
    {
      title: "Intern Pro",
      description: "Intern Pro connects top young talent with real-world businesses, providing companies with skilled interns across various domains. We help businesses grow while empowering interns with hands-on industry experience to build successful careers.",
      link: "solutionhub",
    },
    {
      title: "HRMS",
      description: "HRMS is a customizable HR management system with flexible roles, leave tracking, and company structure visibility. Designed for HR, managers, and employees, it streamlines workflows, enhances efficiency, and simplifies workforce management.",
      link: "solutionhub",
    },
    {
      title: "Agricultural Technology Solutions",
      description:
        "We provide innovative agricultural tech solutions that optimize farming operations, increase yields, and reduce environmental impact. From precision farming techniques to sustainable practices, our solutions empower farms with the latest technology to ensure a productive and eco-friendly future.",
      link: "solutionhub",
    }
    
  ];

  const industryData = [
    {
      title: "FinTech",
      description: "Explore bespoke software products and data-driven insights for financial technology success.",
      link: "industries"
    },
    {
      title: "Healthcare",
      description: "Discover innovative solutions to revolutionize healthcare delivery and enhance patient outcomes.",
      link: "industries"
    },
    // {
    //   title: "HR Technology",
    //   description: "HR technology is transforming how companies manage their workforce, offering advanced solutions for employee engagement.",
    //   link: "/industries"
    // }
  ];

  const industryLinks = [
    // { title: "Manufacturing", link: "#" },
    // { title: "Energy and Resources", link: "#" },
    { title: "All Articles", link: "insights" },
    { title: "Compliance And Legal Issues", link: "insights" },
    { title: "Software Solutions ", link: "insights" }
  ];



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#0D0D0D' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={logo} onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
              <Typography variant="h6" color="#fff" fontSize={'16px'} onClick={()=>navigate('/')} sx={{cursor:'pointer'}}>Sunadh Technologies</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
              <Link
                sx={{
                  color: '#fff',
                  fontSize: '15px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                    color: 'transparent',
                    backgroundClip: 'text',
                  },
                }}
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={() => handleMouseLeave('company')}
                onClick={() => navigate('/company')}
              >
                Company
              </Link>
              {hovered.company && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '64px', // Adjust based on your AppBar height
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    backgroundColor: '#0D0D0D',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    // paddingTop: '20px',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={() => {
                    if (timeoutId) {
                      clearTimeout(timeoutId);
                    }
                  }}
                  onMouseLeave={() => handleMouseLeave('company')}
                >
                  <Box sx={{ display: 'flex', gap: 4 }}>
                    <Box sx={{ backgroundColor: "#181818", p: 3, display: 'flex', justifyContent: 'center' }}>
                      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {companyData.map((item, index) => (
                          <Grid item xs={12} sm={4} md={2.4} key={index}>
                            <Card sx={{ backgroundColor: "#222", color: "#fff", p: 2, height: '250px' }}>
                              <CardContent>
                                <Typography variant="body1" fontWeight="bold">
                                  {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ my: 2 }}>
                                  {item.description}
                                </Typography>
                                <Link href={item.link} sx={{
                                  color: "white", fontWeight: "bold",
                                  '&:hover': {
                                    backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                                    color: 'transparent',
                                    backgroundClip: 'text',
                                  },
                                }}>
                                  Read more →
                                </Link>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                        {/* Right side links */}
                        <Grid item xs={12} sm={4} md={2.4}>
                          <Box sx={{ color: "#fff" }}>
                            {companyLinks.map((link, index) => (
                              <Typography key={index} sx={{ mb: 2 }}>
                                <Link href={link.link} sx={{ color: "#fff", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                                  {link.title}
                                </Link>
                              </Typography>
                            ))}
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>

                </Box>
              )}
              <Link

                sx={{
                  color: '#fff',
                  fontSize: '15px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                    color: 'transparent',
                    backgroundClip: 'text',
                  },
                }}
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={() => handleMouseLeave('services')}
                onClick={() => navigate('/services')}
              >
                Services
              </Link>
              {hovered.services && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '64px', // Adjust based on your AppBar height
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    backgroundColor: '#0D0D0D',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    // paddingTop: '20px',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={() => {
                    if (timeoutId) {
                      clearTimeout(timeoutId);
                    }
                  }}
                  onMouseLeave={() => handleMouseLeave('services')}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                    <Grid container columnSpacing={3} sx={{ backgroundColor: "#181818", padding: 3, display: 'flex', justifyContent: 'center' }}>
                      {servicesData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={2.4} key={index}>
                          <Card sx={{ backgroundColor: "#222", color: "#ccc", padding: 2, height: '230px' }}>
                            <CardContent>
                              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#fff" }}>
                                {card.title}
                              </Typography>
                              <Typography variant="body2" sx={{ marginY: 1 }}>
                                {card.description}
                              </Typography>
                              <Link href={card.link} sx={{
                                color: "white", fontWeight: "bold", textDecoration: "none",
                                '&:hover': {
                                  backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                                  color: 'transparent',
                                  backgroundClip: 'text',
                                },
                              }}>
                                Read more →
                              </Link>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                </Box>
              )}
              <Link
                sx={{
                  color: '#fff',
                  fontSize: '15px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                    color: 'transparent',
                    backgroundClip: 'text',
                  },
                }}
                onMouseEnter={() => handleMouseEnter('solutionHub')}
                onMouseLeave={() => handleMouseLeave('solutionHub')}
                onClick={() => navigate('/solutionhub')}
              >
                Solution Hub
              </Link>
              {hovered.solutionHub && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '64px', // Adjust based on your AppBar height
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    backgroundColor: '#0D0D0D',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '20px',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={() => {
                    if (timeoutId) {
                      clearTimeout(timeoutId);
                    }
                  }}
                  onMouseLeave={() => handleMouseLeave('solutionHub')}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                    <Grid container columnSpacing={3} sx={{ backgroundColor: "#181818", padding: 3, display: 'flex', justifyContent: 'center' }}>
                      {solutionhubData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Card sx={{ backgroundColor: "#222", color: "#ccc", padding: 2, height: '230px' }}>
                            <CardContent>
                              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#fff" }}>
                                {card.title}
                              </Typography>
                              <Typography variant="body2" sx={{ marginY: 1 }}>
                                {card.description}
                              </Typography>
                              <Link href={card.link} sx={{
                                color: "white", fontWeight: "bold", textDecoration: "none",
                                '&:hover': {
                                  backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                                  color: 'transparent',
                                  backgroundClip: 'text',
                                },
                              }}>
                                Read more →
                              </Link>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                </Box>
              )}
              <Link
                sx={{
                  color: '#fff',
                  fontSize: '15px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                    color: 'transparent',
                    backgroundClip: 'text',
                  },
                }}
                onMouseEnter={() => handleMouseEnter('insights')}
                onMouseLeave={() => handleMouseLeave('insights')}
                onClick={() => navigate('/insights')}
              >
                Insights
              </Link>
              {hovered.insights && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '64px', // Adjust based on your AppBar height
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    backgroundColor: '#0D0D0D',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '20px',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={() => {
                    if (timeoutId) {
                      clearTimeout(timeoutId);
                    }
                  }}
                  onMouseLeave={() => handleMouseLeave('insights')}
                >
                  <Box sx={{ display: 'flex', gap: 4 }}>
                    <Box sx={{ backgroundColor: "#181818", p: 3, display: 'flex', justifyContent: 'center' }}>
                      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {industryData.map((item, index) => (
                          <Grid item xs={12} sm={4} md={2.4} key={index}>
                            <Card sx={{ backgroundColor: "#222", color: "#fff", p: 2, height: '250px' }}>
                              <CardContent>
                                <Typography variant="body1" fontWeight="bold">
                                  {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ my: 2 }}>
                                  {item.description}
                                </Typography>
                                <Link href={item.link} sx={{
                                  color: "white", fontWeight: "bold",
                                  '&:hover': {
                                    backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                                    color: 'transparent',
                                    backgroundClip: 'text',
                                  },
                                }}>
                                  Read more →
                                </Link>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                        {/* Right side links */}
                        <Grid item xs={12} sm={4} md={2.4}>
                          <Box sx={{ color: "#fff" }}>
                            {industryLinks.map((link, index) => (
                              <Typography key={index} sx={{ mb: 2 }}>
                                <Link href={link.link} sx={{ color: "#fff", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                                  {link.title}
                                </Link>
                              </Typography>
                            ))}
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>

                </Box>
              )}
              <Link
                sx={{
                  color: '#fff',
                  fontSize: '15px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                    color: 'transparent',
                    backgroundClip: 'text',
                  },
                }}
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={() => handleMouseLeave('industries')}
                onClick={() => navigate('/industries')}
              >
                Industries
              </Link>
              {hovered.industries && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '64px', // Adjust based on your AppBar height
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    backgroundColor: '#0D0D0D',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    // paddingTop: '20px',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={() => {
                    if (timeoutId) {
                      clearTimeout(timeoutId);
                    }
                  }}
                  onMouseLeave={() => handleMouseLeave('industries')}
                >
                  <Box sx={{ display: 'flex', gap: 4 }}>
                    <Box sx={{ backgroundColor: "#181818", p: 3, display: 'flex', justifyContent: 'center' }}>
                      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {industryData.map((item, index) => (
                          <Grid item xs={12} sm={4} md={2.4} key={index}>
                            <Card sx={{ backgroundColor: "#222", color: "#fff", p: 2, height: '250px' }}>
                              <CardContent>
                                <Typography variant="body1" fontWeight="bold">
                                  {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ my: 2 }}>
                                  {item.description}
                                </Typography>
                                <Link href={item.link} sx={{
                                  color: "white", fontWeight: "bold",
                                  '&:hover': {
                                    backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                                    color: 'transparent',
                                    backgroundClip: 'text',
                                  },
                                }}>
                                  Read more →
                                </Link>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                        {/* Right side links */}
                        <Grid item xs={12} sm={4} md={2.4}>
                          <Box sx={{ color: "#fff" }}>
                            {industryLinks.map((link, index) => (
                              <Typography key={index} sx={{ mb: 2 }}>
                                <Link href={link.link} sx={{ color: "#fff", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                                  {link.title}
                                </Link>
                              </Typography>
                            ))}
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>

                </Box>
              )}

              <Link
                sx={{
                  color: '#fff',
                  fontSize: '15px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                    color: 'transparent',
                    backgroundClip: 'text',
                  },
                }}
                onMouseEnter={() => handleMouseEnter('careers')}
                onMouseLeave={() => handleMouseLeave('careers')}
                onClick={() => navigate('/careers')}
              >
                Careers
              </Link>
            </Box>
            <Button
              sx={{
                color: '#fff',
                border: '2px solid',
                borderImage: 'linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)',
                borderImageSlice: 1,
                borderRadius: '30px !important',
                fontSize: '13px',
                display: isSmallScreen ? 'none' : 'block'
              }}
              onClick={() => navigate('/contactus')}
            >
              Let's Connect
            </Button>
          </Container>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" >
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;