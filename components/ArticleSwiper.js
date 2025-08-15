// import {
//   Box,
//   Card,
//   CardContent,
//   CircularProgress,
//   Container,
//   Grid,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
// import { apiUrl } from "../config/config";

// const ArticleSwiper = ({ categories }) => {
//   const swiperRef = useRef(null);
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const slidePrev = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const slideNext = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   useEffect(() => {
    
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(`/api/posts?industryType=${industryType}`);
//         // const response = await axios.get(`${apiUrl}/posts`);
//         setPosts(response.data.posts);
//       } catch (err) {
//         // setError("Error fetching posts!");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const filteredArticles = () =>
//     categories
//       ? posts.filter((article) => article.category === categories)
//       : posts;

//   const handleArticleClick = (id) => {
//     navigate(`/industries/article/${id}`);
//   };

//   if (loading || error) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
//         {loading ? (
//           <CircularProgress size={50} />
//         ) : (
//           <Typography color="error">{error}</Typography>
//         )}
//       </Box>
//     );
//   }

//   return (
//     <Container sx={{my:5}}>
//       <Box container>
//         <Box sx={{ display: "flex", alignItems: "center",my:5}}>
//           <Typography sx={{ color: "secondary.main", width: "100%" }}>
//             Related materials{" "}
//           </Typography>
//           <Box sx={styles.swiperWrapper}>
//             <Box sx={styles.swiperNavBtns}>
//               <IconButton
//                 onClick={slidePrev}
//                 sx={styles.btnCommon}
//                 aria-label="Previous Slide"
//               >
//                 <ChevronLeft size={20} />
//               </IconButton>
//               <IconButton
//                 onClick={slideNext}
//                 sx={styles.btnCommon}
//                 aria-label="Next Slide"
//               >
//                 <ChevronRight size={20} />
//               </IconButton>
//             </Box>
//           </Box>
//         </Box>
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={15}
//           slidesPerView={2}
//           pagination={{ clickable: true }}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           loop={true}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 2 },
//           }}
//           style={{ justifyContent: "space-between" }}
//         >
//           {filteredArticles().map((article) => (
//             <SwiperSlide key={article.id} style={{ width: "300px", margin: 0 }}>
//               <SlideContent
//                 article={article}
//                 onClick={() => handleArticleClick(article.id)}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Box>
//     </Container>
//   );
// };
// export default ArticleSwiper;

// const SlideContent = (articledata) => {
//   const { article } = articledata;
//   return (
//     <>
//       <Box sx={{ width: { xs: "100%" } }}>
//         <Card
//           sx={{
//             width: { xs: "100%", lg: 500 },
//             backgroundColor: "rgba(255, 255, 255, 0)",
//           }}
//         >
//           <Box
//             sx={{
//               borderRadius: 3,
//               padding: 2,
//               background: "rgba(255,255,255,0.3)",
//             }}
//           >
//             <Box
//               component="img"
//               src={article.bannerImage}
//               alt={article.title}
//               sx={{
//                 width: "100%",
//                 height: "auto",
//                 maxHeight: "300px",
//                 borderRadius: 2,
//                 objectFit: "cover",
//               }}
//             />
//           </Box>
//           <CardContent sx={{ marginY: "10px" }}>
//             <Typography
//               variant="h6"
//               sx={{ color: "secondary.main", fontSize: 24 }}
//             >
//               {article.title}
//             </Typography>
//             <Typography noWrap sx={{ mt: 1, fontSize: 14, WebkitLineClamp: 2 }}>
//               {article.caption}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Box>
//     </>
//   );
// };
// // Styles
// const styles = {
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     gap: "20px",
//     padding: "20px",
//     width: "100",
//     // backgroundColor: "#000",
//   },
//   card: {
//     backgroundColor: "transparent",
//     padding: "20px",
//     borderRadius: "10px",
//     width: "100%",
//     // maxWidth: "400px",
//     textAlign: "left",
//     // color: "white",
//     // boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
//   },
//   image: {
//     width: "100%",
//     borderRadius: "10px",
//   },
//   title: {
//     margin: "10px 0",
//     fontSize: "1.5rem",
//   },
//   description: {
//     fontSize: "1rem",
//     color: "gray",
//   },
//   swiperWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "20px",
//     width: "100%",
//   },
//   swiperNavBtns: {
//     display: "flex",
//     justifyContent: "end",
//     gap: "20px",
//     width: "100%",
//   },
//   btnCommon: {
//     borderRadius: "50%",
//     height: "40px",
//     width: "40px",
//     backgroundColor: "#333",
//     color: "white",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     "&:hover": {
//       backgroundColor: "#555",
//     },
//   },
// };


import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { apiUrl } from "../config/config";

const ArticleSwiper = ({ categories, industryType }) => {
  const swiperRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${apiUrl}/posts?industryType=${industryType || ""}`);
        const data = await response.json();

        if (data.status) {
          setPosts(data.posts);
        } else {
          setError("No posts found");
        }
      } catch (err) {
        setLoading(true)
        // setError("Error fetching posts!");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [industryType]); // Ensure to refetch when industryType changes

  const filteredArticles = () =>
    categories
      ? posts.filter((article) => article.category === categories)
      : posts;

  const handleArticleClick = (id) => {
    navigate(`/industries/article/${id}`);
  };

  if (loading || error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        {loading ? (
           <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bgcolor="black"
        >
          <CircularProgress color="secondary" />
        </Box>
        ) : (
          <Typography color="error">{error}</Typography>
        )}
      </Box>
    );
  }

  return (
    <Container sx={{ my: 5 }}>
      <Box container>
        <Box sx={{ display: "flex", alignItems: "center", my: 5 }}>
          <Typography sx={{ color: "secondary.main", width: "100%" }}>
            Related materials{" "}
          </Typography>
          <Box sx={styles.swiperWrapper}>
            <Box sx={styles.swiperNavBtns}>
              <IconButton
                onClick={slidePrev}
                sx={styles.btnCommon}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </IconButton>
              <IconButton
                onClick={slideNext}
                sx={styles.btnCommon}
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={2}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          style={{ justifyContent: "space-between" }}
        >
          {filteredArticles().map((article) => (
            <SwiperSlide key={article.id} style={{ width: "300px", margin: 0 }}>
              <SlideContent
                article={article}
                onClick={() => handleArticleClick(article.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default ArticleSwiper;

const SlideContent = ({ article, onClick }) => (
  <Box sx={{ width: { xs: "100%" } }} onClick={onClick}>
    <Card
      sx={{
        width: { xs: "100%", lg: 500 },
        backgroundColor: "rgba(255, 255, 255, 0)",
      }}
    >
      <Box
        sx={{
          borderRadius: 3,
          padding: 2,
          background: "rgba(255,255,255,0.3)",
        }}
      >
        <Box
          component="img"
          src={article.bannerImage}
          alt={article.title}
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
      </Box>
      <CardContent sx={{ marginY: "10px" }}>
        <Typography variant="h6" sx={{ color: "secondary.main", fontSize: 24 }}>
          {article.title}
        </Typography>
        <Typography noWrap sx={{ mt: 1, fontSize: 14, WebkitLineClamp: 2 }}>
          {article.caption}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

// Styles
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    width: "100",
  },
  card: {
    backgroundColor: "transparent",
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
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
  swiperWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    width: "100%",
  },
  swiperNavBtns: {
    display: "flex",
    justifyContent: "end",
    gap: "20px",
    width: "100%",
  },
  btnCommon: {
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    backgroundColor: "#333",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#555",
    },
  },
};
