import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import girdborder from "../../assets/company/gridborder.png";
import linearColor from "../../assets/company/linearbackground.png";
import Banner from "../../components/Banner";
import ArticleSwiper from "../../components/ArticleSwiper";
import ContactBanner from "../../components/ContactBanner";
import { detaildata } from "../../assets/config/commonpage";

const Commonpage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(sessionStorage.getItem("industryName")); // Example selected industry
  const [industryDataFiltered, setIndustryDataFiltered] = useState(null);

  // Filter the data based on the selected industry type
  const filterData = () => {
    const filteredData = detaildata.filter(
      (industry) => industry.type == selectedIndustry
    );
    return filteredData.length > 0 ? filteredData[0] : null;
  };

  useEffect(() => {
    const data = filterData(); // Filter the data when the component mounts or when `selectedIndustry` changes
    setIndustryDataFiltered(data);
  }, [selectedIndustry]);

  if (!industryDataFiltered) {
    return <div>No data found for the selected industry.</div>;
  }

  const { hero, features, services, security } = industryDataFiltered;

  return (
    <Box sx={{ backgroundColor: "primary.main", paddingBottom: 5 }}>
      {/* Hero Section */}
      <Box
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="100"
        sx={{
          backgroundColor: "primary.main",
          backgroundImage: `url(${girdborder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "secondary.main",
          textAlign: "center",
        }}
      >
        <Banner title={hero?.button?.label} heading={hero?.title} caption={hero?.subtitle} />
        <Box
          component="img"
          src={hero.bannerImg}
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "280px",
            borderRadius: 2,
            objectFit: "cover",
            // backgroundPosition:"bottom"
          }}
        />
      </Box>

      {/* Features Section */}
      <Container
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="300">
        
        <Grid container spacing={2} py={5}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} p={0}>
              <Card sx={{ borderRadius: "5px", boxShadow: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    padding: "20px 24px",
                    justifyContent: "space-evenly",
                    backgroundColor: "primary.submain",
                    color: "secondary.main",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        padding: "2px",
                        borderRadius: "5px",
                        background: "linear-gradient(90deg, #ffae00, #fe0056, #e0007a, #8b2ccb)",
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: "5px",
                          textAlign: "center",
                          backgroundColor: "primary.main",
                          color: "primary.contrastText",
                          padding: { xs: "5px 15px", sm: "10px 20px" },
                          textTransform: "none",
                        }}
                      >
                        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>{index + 1}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Typography variant="body2">{feature}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Section */}
      <Box
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="300"
        sx={{
          backgroundColor: "primary.main",
          backgroundImage: `url(${girdborder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "secondary.main",
          textAlign: "center",
        }}
      >
        <Box
        data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="300"
        sx={{ backgroundImage: `url(${linearColor})`, padding: "50px 20px" }}>
          <Container sx={{ marginTop: 4 }}>
            <Box sx={{ textAlign: "start", color: "secondary.main", py: 5 }}>
              <Typography variant="h3" lineHeight={1.8}>
                {services.header.title}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                {services.header.content}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {services.listOfServices.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ height: "100%", color: "secondary.main", backgroundColor: "primary.main" }}>
                    <CardContent sx={{ padding: "15px 20px !important" }}>
                      <Typography variant="body1" gutterBottom>
                        {service.title}
                      </Typography>
                      <List sx={{ listStyleType: "disc", px: 3, lineHeight: 1 }}>
                        {service.items.map((item, idx) => (
                          <ListItem key={idx} sx={{ display: "list-item", paddingY: 0.3 }}>
                            <ListItemText>
                              <Typography variant="body2">{item}</Typography>
                            </ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Security Section */}
      <Container 
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="300"
      sx={{ marginTop: 4 }}> 
        <Box sx={{ backgroundColor: "primary.main", color: "secondary.main", py: 5 }}>
          <Typography variant="h3" lineHeight={1.5} py={2}>
            {security.header.title}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
            {security.header.content}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {security.listOfServices.map((secService, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: "100%", color: "secondary.main", backgroundColor: "primary.main" }}>
                <CardContent sx={{ padding: "15px 20px !important" }}>
                  <Typography variant="body1" gutterBottom>
                    {secService.title}
                  </Typography>
                  <List sx={{ lineHeight: 1 }}>
                    {secService.items.map((item, idx) => (
                      <ListItem key={idx} sx={{ paddingY: 0.3 }}>
                        <ListItemText>
                          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                            <TaskAltIcon sx={{ fontSize: "1.2rem", color: "#FF910B" }} />
                            <Typography variant="body2" pl={1}>
                              {item}
                            </Typography>
                          </Box>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <ArticleSwiper industryType={selectedIndustry} />
      <ContactBanner />
    </Box>
  );
};

export default Commonpage;
