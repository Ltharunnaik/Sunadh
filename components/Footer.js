import React from "react";
import { Box, Typography, Container } from "@mui/material";
import logo from "../assets/footer-logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import facebookBg from "../assets/footer-facebook-bg.png";
import footerBg from "../assets/footer-icon-bg.png";
import useResponsive from "../hook/useResponsive";
import { Link } from "react-router-dom";

const Footer = (props) => { 
  const { window } = props;

    const container = window !== undefined ? () => window().document.body : undefined;
  const { isSmallScreen, isMediumScreen } = useResponsive();
  return (
    <Box sx={{ backgroundColor: "#0D0D0D" }}>
      <Container
        sx={{
          flexDirection: "column",
          padding: {
            md: "40px 0",
            sm: "40px 0",
          },
          backgroundColor: "#0D0D0D",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "start",
            alignItems: "center",
            padding: "20px 0",
            width: "100%",
          }}
        >
          <Box
            width={isSmallScreen ? "100%" : isMediumScreen ? "50%" : "50%"}
            // width={'50%'}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "32px", marginBottom: "10px" }}
            />
            <Typography
              variant="body1"
              sx={{ maxWidth: "600px", lineHeight: "1.6" }}
            >
              Discover the future of music production
              <br />
              with SonifyAI. Effortlessly create, edit, and perfect your tracks.
            </Typography>

            {/* Social Icons Section */}
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginTop: "15px",
                flexWrap: "wrap",
              }}
            >
              {[
                TwitterIcon,
                FacebookOutlinedIcon,
                InstagramIcon,
                GitHubIcon,
              ].map((Icon, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundImage: `url(${footerBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundImage: `url(${facebookBg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: "24px", color: "white" }} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Menu Section */}
          <Box
            sx={{
              width: { sm: "45%", md: "50%", xs: "100%", lg: "50%" },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: isSmallScreen ? "space-between" : "space-around",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: isSmallScreen ? "48%" : "130px",
                margin: isSmallScreen ? "10px 0" : "0",
              }}
            >
              <Link
                to="/"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
              <Link
                to="/company"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Company
              </Link>
              <Link
                to="/services"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Service
              </Link>
              <Link
                to="/solutionhub"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                SolutionHub
              </Link>
              <Link
                to="/insights"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Insights
              </Link>
              <Link
                to="/industries"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Industries
              </Link>
              <Link
                to="/contactus"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
            </Box>
            {/* 
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: isSmallScreen ? "48%" : "130px",
                margin: isSmallScreen ? "10px 0" : "0",
              }}
            >
              <Link
                to="#"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Menu
              </Link>
              <Link
                to="#"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
              <Link
                to="#"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Service
              </Link>
              <Link
                to="#"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
            </Box> */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: isSmallScreen ? "48%" : "130px",
                margin: isSmallScreen ? "10px 0" : "0",
              }}
            >
              <Link
                to="/industries"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Industries
              </Link>
              <Link
                to="/industries"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                IT & ITES Industry
              </Link>
              <Link
                to="/industries"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                Fintech
              </Link>
              <Link
                to="/industries"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                Health Care
              </Link>
              <Link
                to="/industries"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                Automobile
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: isSmallScreen ? "48%" : "130px",
                margin: isSmallScreen ? "10px 0" : "0",
              }}
            >
              <Link
                to="/solutionhub"
                underline="hover"
                style={{
                  marginBottom: "8px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                SolutionHub
              </Link>
              <Link
                to="/solutionhub"
                underline="hover"
                style={{
                  marginBottom: "6px",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                Internpro
              </Link>
              <Link
                to="/solutionhub"
                underline="hover"
                style={{
                  marginBottom: "6px",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                HRM
              </Link>
              <Link
                to="/solutionhub"
                underline="hover"
                style={{
                  marginBottom: "px",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                Agricultural Technologies
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom Section */}
        <Box sx={{ width: "100%", marginTop: "28px", marginBottom: "38px" }}>
          <hr
            style={{ border: "none", borderTop: "1px solid #ccc", margin: "0" }}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "600px",
            lineHeight: "1.5",
            margin: { md: "0px" },
            marginLeft: { sm: "60px" },
          }}
        >
          © Copyright 2022, All Rights Reserved by Inkonsul Technologies
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
