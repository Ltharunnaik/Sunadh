import {
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import girdborder from "../../assets/company/gridborder.png";
import Banner from "../../components/Banner";
import "./Insights.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArticleSwiper from "../../components/ArticleSwiper";
import { apiUrl } from "../../config/config";
import ContactBanner from "../../components/ContactBanner";
const Insights = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/posts`);
        setPosts(response.data.posts);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchPosts();
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



  // if (error) {
  //   return (
  //     <Typography
  //       variant="h6"
  //       color="error"
  //       sx={{ textAlign: "center", marginTop: 5 }}
  //     >
  //       {error}
  //     </Typography>
  //   );
  // }

  const categories = ["all", "industries", "services", "expertise"];

  const handleArticleClick = (id) => {
    navigate(`/industries/article/${id}`);
  };

  // const articleData = [
  //   {
  //     title: "Article 1",
  //     caption:
  //       "Empowering Businesses Through InnovationAt Inkonsul Technologies, we are your trusted partner in creating scalable, sustainable, and impactful IT solutions for a dynamic digital world.",
  //     author: "Krishna",
  //     authorCaption: "Software Developer",
  //     category: "health",
  //     bannerImage: "yyy",
  //     content: "Health-related content.",
  //   },
  //   {
  //     title: "Article 2",
  //     caption:
  //       "At Inkonsul Technologies, we are your trusted partner in creating scalable, sustainable, and impactful IT solutions for a dynamic digital world.",
  //     author: "Krishna",
  //     authorCaption: "Software Developer",
  //     category: "industries",
  //     bannerImage: "yyy",
  //     content: "Industries-related content.",
  //   },
  //   {
  //     title: "Article 3",
  //     caption:
  //       "At Inkonsul Technologies, we are your trusted partner in creating scalable, sustainable, and impactful IT solutions for a dynamic digital world.",
  //     author: "Krishna",
  //     authorCaption: "Software Developer",
  //     category: "cloud migration",
  //     bannerImage: "yyy",
  //     content: "Services-related content.",
  //   },
  //   {
  //     title: "Article 4",
  //     caption: "Expertise in IT Solutions",
  //     author: "Krishna",
  //     authorCaption: "Software Developer",
  //     category: "fintech",
  //     bannerImage: "yyy",
  //     content: "Expertise-related content.",
  //   },
  // ];

  const filteredArticles = () => {
    if (categories[tabIndex] === "services") {
      return posts.filter(
        (article) =>
          article.category === "cloud migration" ||
          article.category === "fintech"
      );
    } else if (categories[tabIndex] === "expertise") {
      return posts.filter(
        (article) =>
          article.category === "cloud migration" ||
          article.category === "fintech"
      );
    } else if (categories[tabIndex] === "all") {
      return posts;
    } else {
      return posts.filter(
        (article) => article.category === categories[tabIndex]
      );
    }
  };

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
          title="Insights"
          heading="Tech Insights to Keep You Ahead"
          caption="Stay updated with expert articles, industry trends, and thought leadership content that shape the future of IT and business."
        />
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            mt: 5,
            borderRadius: "55px",
            // border: "1px solid #fff",
          }}
        >
          <Tabs
            variant="fullWidth"
            value={tabIndex}
            onChange={handleTabChange}
            textColor="inherit"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid white",
            }}
          >
            {categories.map((category, index) => (
              <Tab
                key={index}
                label={category.toUpperCase()}
                sx={{
                  color: "secondary.main",
                  borderRadius: "25px",
                }}
              />
            ))}
          </Tabs>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          py: 3,
        }}
      >
        <Container>
          <Grid container spacing={3}>
            {filteredArticles().map((article, index) => (
              <Grid
                item
                xs={12} // Full-width (1 card per row) on extra-small screens
                sm={12} // Full-width (1 card per row) on small screens (tablets)
                md={6} // Half-width (2 cards per row) on medium and larger screens
                key={index}
              >
                <Card
                  onClick={() => handleArticleClick(article.id)}
                  style={styles.card}
                  sx={{
                    backgroundColor: "rgba(10, 10, 10, 0)",
                    color: "primary.main",
                    borderRadius: "10px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Image Section */}
                  <Box
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "rgba(255, 255, 255, 0.30)",
                      backdropFilter: " blur(2px) ",
                      WebkitBackdropFilter: "blur(2px)",
                      padding: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={article.bannerImage}
                      alt="Inkonsul Technologies"
                      sx={{
                        width: "100%",
                        maxWidth: "500px",
                        objectFit: "cover",
                        borderRadius: 1,
                        height: { xs: "250px", sm: "350px", md: "auto" },
                        maxHeight: "400px",
                      }}
                    />
                  </Box>

                  {/* Card Content */}
                  <CardContent>
                    <Typography variant="h6" style={styles.title}>
                      {article.title}
                    </Typography>
                    <Typography
                      noWrap={false}
                      style={styles.description}
                      sx={{
                        mt: 1,
                        fontSize: 18,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 3,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {article.caption}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          py: 3,
        }}
      >
        <ArticleSwiper type="" />
      </Box>
      <Box>
        <ContactBanner />
      </Box>
    </>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    width: "100",
    // backgroundColor: "#000",
  },
  card: {
    backgroundColor: "transparent",
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    // maxWidth: "400px",
    textAlign: "left",
    color: "white",
    // boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  title: {
    margin: "10px 0",
    fontSize: "1.5rem",
  },
  description: {
    fontSize: "1rem",
    color: "gray",
  },
};

export default Insights;
