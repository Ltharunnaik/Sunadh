import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import "../../App.css";
import Banner from "../../components/Banner";
import ContactBanner from "../../components/ContactBanner";
import ITIndustry from "../../assets/Industries/industries.png";
import girdborder from "../../assets/company/gridborder.png";
import automobile from "../../assets/tinified/automobile.jpg";
import fintech from "../../assets/tinified/fintech.jpg";
import healthcare from "../../assets/tinified/h3.jpg";
import it from "../../assets/tinified/IT.jpg";
import { useNavigate } from "react-router-dom";

const industryData = [
  {
    industry: "IT & ITES Industry",
    type: "software",
    description:
      "The IT & ITES industry is at the forefront of technological innovation. Showcase your workspace to professionals and businesses in need of cutting-edge infrastructure and high-tech environments.",
    image: it,
  },
  {
    type: "fintech",
    industry: "Fintech",
    description:
      "In the ever-evolving world of finance and technology, showcase your workspace to fintech professionals and companies looking for modern, secure, and innovative environments to grow their business.",
    image: fintech,
  },
  {
    type: "healthcare",
    industry: "Health Care",
    description:
      "Health care professionals and organizations require well-equipped and efficient spaces. Showcase your workspace to businesses in need of tailored environments for healthcare services and medical advancements.",
    image: healthcare,
  },
  // {
  //   industry: "Real Estate",
  //   description:
  //     "Whether residential or commercial, the real estate industry thrives on the perfect location. Showcase your workspace to real estate professionals and investors looking for prime office spaces to enhance their business potential.",
  //   image: ITIndustry,
  // },
  {
    type: "automobile",
    industry: "Automobile Industry",
    description:
      "The automobile industry is fast-paced and highly competitive. Showcase your workspace to automobile professionals and companies seeking cutting-edge facilities for innovation, manufacturing, and distribution.",
    image: automobile,
  },
  // {
  //   industry: "Energy & Resources",
  //   description:
  //     "Energy and resources are critical sectors driving sustainability and innovation. Showcase your workspace to businesses in these industries, looking for spaces equipped to handle high-demand operations and environmentally conscious solutions.",
  //   image: ITIndustry,
  // },
  // {
  //   industry: "HR Technology",
  //   description:
  //     "Human Resource technology is revolutionizing the way companies manage their workforce. Showcase your workspace to HR tech professionals and businesses seeking advanced solutions for managing talent, payroll, and employee engagement.",
  //   image: ITIndustry,
  // },
  // {
  //   industry: "Compliance and Legal Issues",
  //   description:
  //     "Compliance and legal professionals require reliable, secure, and confidential workspaces. Showcase your space to businesses in need of an environment that ensures legal and regulatory compliance while fostering a productive workplace.",
  //   image: ITIndustry,
  // },
];

const Industries = () => {
  const navigate = useNavigate();
  const handleIndustryTitle = (industry) => {
    const industryName = industry.toLowerCase();
    sessionStorage.setItem("industryName", industryName);
    navigate("/industries/sector");
  };

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          backgroundImage: `url(${girdborder})`,
          backgroundSize: "cover",
        }}
      >
        <Banner
          title="Industries"
          heading="Revolutionizing Industries with Tech-Driven Solutions"
          caption="With expertise across multiple industries, we deliver innovative solutions that empower businesses to stay competitive in a fast-evolving digital landscape."
        />
        <Container>
          <Box
            sx={{
              color: "#fff",
              maxWidth: "1000px",
              margin: "0",
              paddingY: { xs: 0, md: 0, lg: 5 },
              paddingLeft: { xs: "20px", sm: "90px", md: 0 },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ padding: "20px 0px", lineHeight: 1 }}
            >
              Our Services Across Different Industries
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: "2" }}>
              At Inkonsul Technologies, we specialize in delivering cutting-edge
              IT solutions tailored to meet the unique needs of a variety of
              industries. Our expertise spans multiple sectors, ensuring that we
              provide effective, scalable, and innovative solutions to
              businesses everywhere. Below are the services we offer to
              different industries:
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* Dynamic Industry Data */}
      <Box sx={{ backgroundColor: "primary.main" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              // mt: 4,
            }}
          >
            {industryData.map((industry, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "95%", sm: "48%", lg: "46%" },
                  borderRadius: 3,
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
                  margin: 2,
                  background: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  padding: "16px 12px",
                }}
                onClick={() => handleIndustryTitle(industry.type)}
              >
                <Box
                  sx={{
                    background: "#CBD4E3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    padding: 2,
                  }}
                >
                  <img
                    src={industry.image}
                    alt={industry.industry}
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    fontWeight: "600",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  {industry.industry}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: "#ddd",
                    fontSize: "15px",
                  }}
                >
                  {industry.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>

        <Box>
          <ContactBanner />
        </Box>
      </Box>
    </>
  );
};

export default Industries;
