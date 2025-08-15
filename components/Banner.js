import { Box, Typography } from "@mui/material";
import React from "react";
// import girdborder from "../assets/company/gridborder.png";

const Banner = ({ heading, title, caption }) => {
  return (
    <>
      <Box

        sx={{
          textAlign: "center",
          color: "secondary.main",
          height: { xs: "450px", lg: "92vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 2, sm: 4 },
          
        }}
      >
        <Box sx={{ width: "100%", py:0 }} >
          <Box
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="100"

            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: { xs: 3, sm: 5 },
             
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                padding: "2px",
                borderRadius: "32px",
                background:
                  "linear-gradient(90deg , #ffae00, #fe0056, #e0007a, #8b2ccb)",
              }}
            >
              <Box
                sx={{
                  borderRadius: "32px",
                  textAlign: "center",
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  padding: { xs: "5px 15px", sm: "5px 20px" },
                  textTransform: "none",
                }}
              >
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  {title || "Company"}
                </Typography>
              </Box>
            </Box>
          </Box>


          <Box
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="200"

            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                width: { xs: "90%", sm: "75%" },
                lineHeight: 1.5,
                fontWeight: 400,
                fontSize: { xs: "24px", sm: "36px", lg: "48px" },
              }}
            >
              {heading ||
                "Empowering Businesses Through Innovation and Expertise"}
            </Typography>
          </Box>


          <Box
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="300"

            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                width: { xs: "90%", sm: "60%", lg: "35%" },
                lineHeight: 2,
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              {caption ||
                "At Inkonsul Technologies, we are your trusted partner in creating scalable, sustainable, and impactful IT solutions for a dynamic digital world."}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
