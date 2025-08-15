import React from "react";
import { Box, Typography, Avatar, Grid, Button, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../../config/config";
import girdborder from "../../../assets/company/gridborder.png";

const PostCard = ({ post }) => {

  const navigate = useNavigate();

  const handleEdit = (postId) => {
    // navigate(`${apiUrl}/post/update${id}`);
    // navigate(`/industries/article/${id}`);
  };

  return (
    <>
   

      <Paper key={post.id} sx={{ }}>
            <Grid
              sx={{
                textAlign: "left",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "primary.main",
                backgroundImage: `url(${girdborder})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "secondary.main",
                paddingLeft: { xs: 2, sm: 3, md: 1 },
                flexDirection: { xs: "column-reverse", lg: "row" }, // Stack on small screens
                gap: 2,
                borderRadius:5
              }}
            >
              <Grid item xs={12} lg={6} sx={{ px: { xs: 2, sm: 4, lg: 5 } }}>
                <Box>
                  {/* Gradient Box */}
                  <Box
                    sx={{
                      display: "inline-flex",
                      padding: "2px",
                      borderRadius: "32px",
                      background:
                        "linear-gradient(90deg , #ffae00, #fe0056, #e0007a, #8b2ccb)",
                      marginBottom: { xs: 3, sm: 5 },
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
                        Industries
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    {/* Heading */}
                    <Typography
                      variant="h3"
                      sx={{
                        lineHeight: 1.4,
                        fontWeight: 400,
                        fontSize: { xs: "24px", sm: "36px", lg: "48px" },
                        maxWidth: "800px",
                      }}
                    >
                      {post.title
                        ? post.title
                        : "Empowering Businesses Through Innovation and Expertise"}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        marginTop: { xs: 2, sm: 3 },
                        lineHeight: 1.8,
                        fontSize: { xs: "14px", sm: "16px" },
                        color: "secondary.main",
                        maxWidth: "600px",
                      }}
                    >
                      {post.caption
                        ? post.caption
                        : " At Inkonsul Technologies, we are your trusted partner in creating scalable, sustainable, and impactful IT solutions for a dynamic digital world."}
                    </Typography>

                    <Box
                      display="flex"
                      alignItems="center"
                      // bgcolor="black"
                      // color="white"
                      my={4}
                      borderRadius={2}
                      boxShadow={3}
                      width={320}
                    >
                      <Avatar
                        alt="Krishna Gaura"
                        src="/path/to/your/image.jpg" // Replace with actual image path
                        sx={{
                          width: 64,
                          height: 64,
                          border: "2px solid white",
                        }}
                      />
                      <Box ml={2}>
                        <Typography variant="body1" fontWeight="bold">
                          {post.author}
                        </Typography>
                        <Typography variant="body2">{post.authorCaption}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  mt: { xs: 4, lg: 0 },
                }}
              >
                <Box
                  className="lg"
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: 2,
                    backgroundColor: "#0D0D0D",
                    background:
                      "linear-gradient(267deg, rgba(19, 19, 19, 0.26) 44%, #0D0D0D 98%)",
                  }}
                ></Box>

                <Box
                  component="img"
                  src={post?.bannerImage}
                  alt="Company Visual"
                  sx={{
                    width: "100%",
                    maxWidth: "680px",
                    zIndex: 1,
                  }}
                />
              </Grid>
            </Grid>

            <Container>
              <Box py={5}>
                <Typography variant="body1" sx={{ mt: 3 }} component="div">
                  <div dangerouslySetInnerHTML={{ __html: post?.content }} />
                </Typography>
              </Box>
            </Container>


            <Box sx={{ backgroundColor:"primary.main", padding:2, textAlign:"center"}}>
              <Button sx={{backgroundColor:"secondary.main", padding:1}}> Edit </Button>

            </Box>
          </Paper>
    
    </>
  );
};

export default PostCard;
