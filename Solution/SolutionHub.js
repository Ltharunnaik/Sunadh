import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";

import bglinear from "../../assets/ServiceImages/bglinergradient.png";
import consulting from "../../assets/ServiceImages/consulting.png";
// import HRMS from "../../assets/ServiceImages/HRMS.png";
import HRMS from "../../assets/tinified/hrm.png";
import Internpro from "../../assets/tinified/Internpro.png";
import agri from "../../assets/tinified/argi.jpg";
import Banner from "../../components/Banner";
import girdborder from "../../assets/company/gridborder.png";
import ContactBanner from "../../components/ContactBanner";
import { useNavigate } from "react-router-dom";

const SolutionHub = () => {
  const navigate = useNavigate();
  const handleIndustryTitle = (industry) => {
    const industryName = industry.toLowerCase();
    sessionStorage.setItem("industryName", industryName);
    // navigate("/industries/sector");
  };
  return (
    <Box sx={{ bgcolor: "#000000" }}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          backgroundImage: `url(${girdborder})`,
          backgroundSize: "cover",
        }}
      >
        <Banner
          title="Solution Hub"
          heading="Discover the Future – Our Cutting-Edge Solutions"
          caption="Explore our suite of innovative IT products, designed to streamline operations, enhance security, and drive digital transformation"
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          backgroundImage: `url(${bglinear})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100%",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            padding: "50px 20px",
            // padding: "20px 20px",
            py: 8,
            background:
              "linear-gradient(0deg,rgba(255, 255, 255, 0) 25%,rgba(13, 13, 13, 1) 100%)",
          }}
        ></Box>
        <Container>
          <Box
            sx={{
              textAlign: "left",
              marginBottom: "30px",
              color: "primary.main",
            }}
          >
            <Typography
              variant="h4"
              color="secondary.main"
              mb={4}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="100"
            >
              Intern Pro
            </Typography>
            <Typography
              sx={{
                maxWidth: "1000px",
                margin: "20px 0",
                color: "secondary.main",
              }}
              variant="body1"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              Intern Pro is a unique tech platform where it connects the
              topnotch young talent to real time businesses in the market. We as
              internpro, dedicated to build strongly emerging businesses with
              the help of skilled interns from various domains.
            </Typography>
          </Box>
          {/* Image Box with Fixed Proportions */}
          <Card
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            sx={{
              borderRadius: 2,
              cursor: "pointer", // Indicating it's clickable
              // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "rgba(225, 220, 220, 0.3)",
            }}
            onClick={() => handleIndustryTitle("")}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "1562px",
                aspectRatio: "1562 / 656",
                backgroundColor: "rgba(225, 220, 220, 0.3)",
                padding: { sm: 2, xs: 2, md: 3, lg: 3 },
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={Internpro}
                alt="Internpro"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />
            </Box>
          </Card>
        </Container>
      </Box>

      <Box
        sx={{
          // backgroundImage: `url(${bglinear})`,
          backgroundColor: "primary.main",
          backgroundSize: "contain",
          backgroundPosition: "center",
          minHeight: "100%",
          color: "#fff",
          padding: "20px 20px",
          py: 8,
        }}
      >
        <Container>
          <Box sx={{ textAlign: "left", marginBottom: "30px", color: "black" }}>
            <Typography
              variant="h4"
              color="secondary.main"
              mb={4}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="100"
            >
              HRMS
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              sx={{
                maxWidth: "1000px",
                margin: "20px 0",
                color: "secondary.main",
              }}
              variant="body1"
            >
              HRMS is a tailored HRM system offering customizable roles and
              flexible permission workflows, enabling employees to effortlessly
              track their available leave and gain a clear view of the company's
              structure. Designed to be a versatile tool, our HRM system serves
              not only the HR department but also company managers, project
              managers, and employees across the organization.
            </Typography>
          </Box>
          {/* Image Box with Fixed Proportions */}
          <Card
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            sx={{
              borderRadius: 2,
              cursor: "pointer", // Indicating it's clickable
              // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "rgba(225, 220, 220, 0.3)",
            }}
            onClick={() => handleIndustryTitle("")}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "1562px",
                aspectRatio: "1562 / 656",
                backgroundColor: "rgba(225, 220, 220, 0.3)",
                padding: { sm: 2, xs: 2, md: 3, lg: 3 },
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={HRMS}
                alt="Internpro"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />
            </Box>
          </Card>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "primary.main",
          backgroundImage: `url(${bglinear})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100%",
          color: "#fff",
          padding: "50px 20px",
          // padding: "20px 20px",
          py: 8,
        }}
      >
        <Container>
          <Box
            sx={{
              textAlign: "left",
              marginBottom: "30px",
              color: "primary.main",
            }}
          >
            <Typography
              variant="h4"
              color="secondary.main"
              mb={4}
              lineHeight={"50px"}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="100"
            >
              Agricultural Technology Solutions
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              sx={{
                maxWidth: "1000px",
                margin: "20px 0",
                color: "secondary.main",
              }}
              variant="body1"
            >
              Agricultural technology is revolutionizing the farming industry,
              enhancing productivity, sustainability, and efficiency. Our
              innovative tech solutions help farmers optimize resources, reduce
              waste, and increase crop yields. With cutting-edge tools like IoT
              devices, AI-driven analytics, and precision farming techniques, we
              are helping businesses embrace smart farming to grow sustainably
              and profitably.
            </Typography>
          </Box>
          {/* Image Box with Fixed Proportions */}
          <Card
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            sx={{
              borderRadius: 2,
              cursor: "pointer", // Indicating it's clickable
              // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "rgba(225, 220, 220, 0.3)",
            }}
            onClick={() => handleIndustryTitle("")}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "1562px",
                aspectRatio: "1562 / 656",
                backgroundColor: "rgba(225, 220, 220, 0.3)",
                padding: { sm: 2, xs: 2, md: 3, lg: 3 },
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={agri}
                alt="Internpro"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />
            </Box>
          </Card>
        </Container>
      </Box>

      <Box>
        <ContactBanner />
      </Box>
    </Box>
  );
};

export default SolutionHub;
