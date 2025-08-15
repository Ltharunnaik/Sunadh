import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import contactBanner from "../assets/contactbanner.png";
import linearColor from "../assets/company/linearbackground.png";
import girdborder from "../assets/company/gridborder.png";
import contactbannerbg from "../assets/contactbannerbg.png";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <>
      <Box
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
          sx={{
            backgroundImage: `url(${linearColor})`,
            backgroundPosition: "center",
            padding: "50px 20px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }}
        >
          <Container
            data-aos="fade-up"
            data-aos-duration="350"
            data-aos-delay="200"
            data-aos-offet="100"
            sx={{
              marginTop: 4,
              padding: "5px",
              height: { lg: "80vh" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                // backgroundColor: "primary.main",
                backgroundImage: `url(${contactbannerbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "0px",
                borderRadius: 3,
                height: "fit-content",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  padding: "50px",
                  backgroundImage: `url${contactBanner}`,
                  backgroundPosition: "center",
                }}
              >
                <Typography variant="h6">
                  Let’s Build Something Incredible Together
                </Typography>

                <Typography>
                  Ready to transform your ideas into reality? Contact us today
                  and let’s discuss how we can help.
                </Typography>
                <Link to={"/contactus"}>
                  <Button
                    sx={{
                      background:
                        "linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)",
                      color: "white",
                      borderRadius: 20,
                      my: 2,
                      px: { xs: 3, md: 5 },
                      py: { xs: 1, md: 1.5 },
                      fontSize: { xs: 12, md: 14 },
                    }}
                  >
                    Contactus
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ContactBanner;
