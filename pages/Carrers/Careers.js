import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  CircularProgress,
  colors,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { apiUrl } from "../../config/config";
import girdborder from "../../assets/company/gridborder.png";
import Banner from "../../components/Banner";

const fallbackPositions = [
  {
    jobtitle: "Relationship Manager",
    joblocation: "India",
    jobtype: "Remote/FullTime",
    jobExperience: "1-5",
    jobDescription:
      "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals.",
    jobRequirements: [
      "Bachelor’s degree in Business, Finance, or a related field",
      "Minimum of 3 years of experience in sales or relationship management in the banking industry",
      "Proven track record of meeting and exceeding sales targets",
      "Excellent interpersonal and negotiation skills",
      "Strong knowledge of banking products and services",
    ],
    jobPreferredSkills: ["html", "css", "javascript"],
  },
  {
    title: "Financial Advisor",
    location: "India",
    department: "Wealth Management",

    description:
      "As a Financial Advisor at YourBank, you will provide expert financial advice and investment solutions to help customers achieve their financial goals.",
    requirements: [
      "Bachelor’s degree in Finance, Economics, or a related field",
      "2+ years of experience in financial advisory or wealth management",
      "Knowledge of investment products and markets",
      "Strong communication and analytical skills",
      "Certified Financial Planner (CFP) certification preferred",
    ],
  },
  {
    title: "Loan Officer",
    location: "India",
    department: "Lending Services",
    description:
      "As a Loan Officer at YourBank, you will guide customers through the loan application process and assess their financial suitability for lending products.",
    requirements: [
      "Bachelor’s degree in Business Administration or related field",
      "3+ years of experience in loan processing or customer service in banking",
      "Excellent understanding of lending products and procedures",
      "Strong attention to detail and organizational skills",
      "Ability to explain complex financial products in simple terms",
    ],
  },
];

const Careers = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    const fetchPositions = async () => {
      try {
        const response = await fetch(`${apiUrl}/career`); // Replace with actual API URL
        const data = await response.json();
        // Check if the data is valid and non-empty
        if (data && data.careers.length > 0) {
          setPositions(data.careers);
          setLoading(false);
        } else {
          // setPositions(fallbackPositions);
        }
      } catch (error) {
        console.error("Error fetching positions:", error);
        // setPositions(fallbackPositions); // Use fallback data on error
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="black"
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

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
          title="Career"
          heading="Shape the Future with Us"
          caption="Join a team of innovators and problem-solvers. Explore exciting career opportunities and grow with us in a dynamic tech environment."
        />
      </Box>
      <Box bgcolor="black" sx={{ padding: { xs: 2, md: 4 } }}>
        {/* <img
          src="/path/to/image.jpg"
          alt="Company Logo"
          style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
        /> */}
        <Typography
          variant="h2"
          sx={{
            // fontSize: { xs: 18, sm: 22, md: 24 },
            color: "white",
            marginBottom: "30px",
            textAlign: "Center",
          }}
        >
          Open Positions
        </Typography>
        {positions.length > 0 ? (
          <>
            <Box sx={{ marginTop: 5, marginX: { xs: 0, md: 20 } }}>
              <Grid
                container
                rowGap={2}
                justifyContent={{ xs: "center", md: "space-between" }}
                sx={{ width: "100%" }}
              >
                {positions?.map((position, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    md={5.9}
                    key={index}
                    display="flex"
                    justifyContent="center"
                  >
                    <Card
                      sx={{
                        width: "100%",
                        borderRadius: 4,
                        boxShadow: "none",
                      }}
                    >
                      <CardContent
                        sx={{
                          backgroundColor: "#262626",
                          color: "white",
                          padding: "10px 20px",
                          height: "100%",
                        }}
                      >
                        <Box my={2}>
                          <Typography
                            variant="h6"
                            sx={{ color: "secondary.main", fontWeight: "500" }}
                          >
                            {position.jobTitle}
                          </Typography>
                        </Box>
                        <Box display="flex" gap={1} mb={2} flexWrap="wrap">
                          <Chip
                            label={`Location: ${position.jobLocation || "N/A"}`}
                            sx={{
                              backgroundColor: "#FF5A42",
                              color: "black",
                              fontSize: { xs: 10, md: 12 },
                            }}
                          />
                          <Chip
                            label={`Type: ${position.jobType || "N/A"}`}
                            sx={{
                              backgroundColor: "#EB76FF",
                              color: "black",
                              fontSize: { xs: 10, md: 12 },
                            }}
                          />
                          <Chip
                            label={`Exp: ${position.jobExperience || "N/A"}`}
                            sx={{
                              backgroundColor: "#FF910B",
                              color: "black",
                              fontSize: { xs: 10, md: 12 },
                            }}
                          />
                        </Box>

                        <Box>
                          <Typography sx={{ fontWeight: 500 }}>
                            About This Job:
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ color: "secondary.main" }}
                          mb={2}
                          dangerouslySetInnerHTML={{
                            __html: position.jobDescription || "",
                          }}
                        />

                        <Box>
                          <Typography sx={{ fontWeight: 500 }}>
                            Requirements & Qualifications:
                          </Typography>
                        </Box>
                        <List dense>
                          {(position.jobRequirements?.split(".") || []).map(
                            (req, idx) => (
                              <ListItem key={idx} disablePadding>
                                <ListItemIcon>
                                  <BusinessCenterIcon
                                    sx={{ color: "secondary.main" }}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={req.trim()} />
                              </ListItem>
                            )
                          )}
                        </List>

                        <Box>
                          <Box>
                            <Typography sx={{ fontWeight: 500 }}>
                              Your Responsibilities will be:
                            </Typography>
                          </Box>
                          <Typography
                            variant="body2"
                            color="white"
                            mb={2}
                            dangerouslySetInnerHTML={{
                              __html: position.jobResponsibilities || "",
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 500 }}>
                            Preferred skills:
                          </Typography>
                          {(position?.jobPreferredSkills?.split(",") || []).map(
                            (req, idx) => (
                              <Chip
                                key={idx}
                                label={req.trim()}
                                variant="outlined"
                                sx={{ color: "secondary.main", m: 1 }}
                              />
                            )
                          )}
                        </Box>

                        <Box textAlign="start" mt={3}>
                          <a href="mailto:">
                            <Button
                              variant="contained"
                              sx={{
                                background:
                                  "linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)",
                                color: "white",
                                borderRadius: 20,
                                px: { xs: 3, md: 5 },
                                py: { xs: 1, md: 1.5 },
                                fontSize: { xs: 12, md: 14 },
                              }}
                            >
                              Apply Now
                            </Button>
                          </a>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        ) : (
          <Typography
            variant="body1"
             color="#ffae00"
            textAlign={"center"}
          >
            {" "}
            Currently No-Openings
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Careers;
