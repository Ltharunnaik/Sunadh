import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  keyframes,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import "../../App.css";
import "./Company.css";
import ino from "../../assets/company/Frame 8.png";
import linearColor from "../../assets/company/linearbackground.png";
import girdborder from "../../assets/company/gridborder.png";
import Banner from "../../components/Banner";
import ContactBanner from "../../components/ContactBanner";
import img13 from "../../assets/compressed/img13.jpg";
import img12 from "../../assets/compressed/img12.jpg";
import anil from "../../assets/team/anil.png";
import vinod from "../../assets/team/vinod.png";
import saichandu from "../../assets/team/saichandu.png";
import PersonIcon from "@mui/icons-material/Person";

const Company = () => {
  const people = [
    { name: "M V Anil Kumar Reddy", role: "Director", image: anil },
    // { name: "M Goutham Reddy", role: "Director" },
    {
      name: "L Sai Chand",
      role: "Sales & Marketing (Telangana)",
      image: saichandu,
    },
    {
      name: "T Vinod Reddy",
      role: "Sales & Marketing (Andhra Pradesh)",
      image: vinod,
    },
    { name: "P Niharika", role: "Human Resources", image: "" },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Box 
      // data-aos="fade-up" data-aos-duration="700" data-aos-delay="100"
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            backgroundImage: `url(${girdborder})`,
            backgroundSize: "cover",
            // animation: `${bgScrollingReverse} 0.92s infinite linear`,
          }}
        >
          <Banner
            title="Company"
            heading="Driving Digital Excellence with Innovation & Expertise"
            caption="At Inkonsul Technologies, we redefine possibilities through cutting-edge technology, helping businesses thrive in a fast-evolving digital landscape."
          />
          <Container>
            <Box>
              <Typography
                variant="h3"
                className="txt"
                sx={{
                  fontSize: { xs: 60, sm: 100, md: 160 },
                  fontWeight: "380",
                  textAlign: "left",
                }}
                 data-aos="fade-right" data-aos-duration="700" data-aos-delay="100" 
              >
                WHO WE ARE
              </Typography>
            </Box>
          </Container>
        </Box>
        <Box sx={{ backgroundColor: "primary.main" }}>
          <Container sx={{ position: "relative" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: "100%", sm: "100%", md: "65vh", lg: "80vh" },
                  padding: { xs: 1, md: 0 },
                }}
                data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" 
              >
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                  color="primary.contrastText"
                  sx={{
                    pt: 0,
                    position: { xs: "static", lg: "absolute" },
                    top: { xs: 0, lg: "-12%" },
                    left: "2%",
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  {/* Text Section */}
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        lineHeight: "75.97px",
                        background:
                          "linear-gradient(180deg, #020202 -39.63%, #FFFFFF 111.17%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      About Inkonsul Technologies
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ textAlign: "justify", pr: { xs: 0, md: 2, lg: 5 } }}
                    >
                      As a trusted partner in driving innovation, we assist
                      businesses in maximizing value delivery and creating
                      long-term sustainability through software engineering
                      services across diverse industries and domains. We not
                      only design and deliver high-quality, reliable, scalable,
                      and functional digital products but also draw the
                      extensive expertise of our skilled developers to enhance
                      your success.
                    </Typography>
                    <Grid
                      container
                      spacing={1}
                      sx={{ marginTop: 3, justifyContent: "space-between" }}
                    >
                      <Grid
                        item
                        xs={4}
                        sx={{
                          borderColor: "secondary.main",
                          borderRight: "1px solid ",
                          textAlign: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", color: "orange" }}
                          >
                            230+
                          </Typography>
                          <Typography variant="body2" mt={1}>
                            Option 1
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{
                          borderColor: "secondary.main",
                          borderRight: "1px solid ",
                          textAlign: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", color: "orange" }}
                          >
                            83%
                          </Typography>
                          <Typography variant="body2" mt={1}>
                            Option 2
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4} sx={{ textAlign: "center" }}>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", color: "orange" }}
                          >
                            5+
                          </Typography>
                          <Typography variant="body2" mt={1}>
                            Option 3
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Image Section */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    justifyContent={"center"}
                    display={"flex"}
                  >
                    <Card
                      sx={{
                        borderRadius: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.30)",
                        backdropFilter: " blur(2px) ",
                        WebkitBackdropFilter: "blur(2px)",
                        padding: 2,
                        display: "flex",
                        alignContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={img12}
                        alt="Inkonsul Technologies"
                        sx={{
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: 1,
                          height: { xs: 250, sm: 350, md: "auto" }, // Dynamic image height on smaller screens
                        }}
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
        {/* Our Mission */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            backgroundImage: `url(${girdborder})`,
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Box sx={{ position: "relative" }}>
              <Box>
                <Typography
                  variant="h3"
                  className="txt"
                  sx={{
                    fontSize: { xs: 60, sm: 100, md: 160 },
                    fontWeight: "500",
                    textAlign: "Right",
                  }}
                  data-aos="fade-left" data-aos-duration="700" data-aos-delay="100" 
                >
                  OUR Mission
                </Typography>
              </Box>
              <Box
                sx={{
                  height: { xs: "100%", md: "65vh", lg: "72vh" },
                  padding: { xs: 1, md: 0 },
                  position: "relative",
                }}
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" 
              >
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  color={"primary.contrastText"}
                  sx={{
                    pt: 0,
                    position: { xs: "static", md: "absolute", lg: "absolute" },
                    top: { xs: 0, md: "-15%", lg: "-15%" },
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  {/* Image Section */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    justifyContent={"center"}
                    display={"flex"}
                  >
                    <Card
                      sx={{
                        borderRadius: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.30)",
                        backdropFilter: " blur(2px) ",
                        WebkitBackdropFilter: "blur(2px)",
                        padding: 2,
                        display: "flex",
                        alignContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={img13}
                        alt="Inkonsul Technologies"
                        sx={{
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: 1,
                          height: { xs: 250, sm: 350, md: "auto" },
                        }}
                      />
                    </Card>
                  </Grid>

                  {/* Text Section */}
                  <Grid item xs={12} md={6} lg={6}>
                    <Box
                   >
                      <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                          lineHeight: "75.97px",
                          background:
                            "linear-gradient(180deg, #020202 -39.63%, #FFFFFF 111.17%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Together, we can accomplish greater things.
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ textAlign: "justify" }}
                      >
                        By working as one cohesive team in close collaboration
                        with our clients, Inkonsul turns innovative business
                        ideas into impactful technical solutions that transform
                        the world and empower everyone to achieve more.
                        <br />
                        We are reshaping the IT industry through teamwork,
                        mutual support, and shared values, rooted in the
                        principles of equality, transparency, and freedom,
                        ensuring that every associate gains more in the process.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box
          color="primary.contrastText"
          textAlign={"center"}
          py={10}
          width={"100%"}
          //   className="linearbg"
          sx={{
            backgroundColor: " #0d0d0d",
            backgroundImage: `url(${linearColor})`,
          }}
           data-aos="fade-up" data-aos-duration="300" data-aos-delay="100"
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
          >
            People Excellence
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                px: 2,
                width: { xs: "100%", md: "75%", lg: "50%" },
                textAlign: "center",
              }}
            >
              We constantly improve our company's performance by focusing on the
              continuous development of our talented specialists.
            </Typography>
          </Box>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            mt={3}
            sx={{
              width: "100%",
              backgroundImage: "url(../../assets/company/linearbackground)",
            }}
          >
            {people.map((person, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                key={index}
                justifyContent={"center"}
                sx={{ textAlign: "center", padding: 0 }}
                mb={5}
              >
                <Avatar
                  sx={{
                    width: 180,
                    height: 180,
                    mx: "auto",
                    backgroundColor: person.image ? "white" : "#fff",
                    mb: 2,
                  }}
                  src={person.image || undefined} // Use `undefined` if no image
                >
                  {!person.image && (
                    <PersonIcon sx={{ color: "lightgray", fontSize: 180 }} />
                  )}
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", lineHeight: "1.5" }}
                >
                  {person.name}
                </Typography>
                <Typography variant="body2">{person.role}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Company;
