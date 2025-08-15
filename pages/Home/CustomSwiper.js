// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
// import { Box, Typography, IconButton, Container } from "@mui/material";
// import swipperImg from "../../assets/ServiceImages/image8.png";
import bggradient from "../../assets/ServiceImages/bglinergradient.png";
// import workshop from "../../assets/tinified/workshop.jpg";
// import growth from "../../assets/growth.jpg";
// import innovation from "../../assets/innovation.jpg";
// import endproduct from "../../assets/endproduct.jpg";

// const CustomSwiper = () => {
//   const swiperRef = useRef(null);

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
//   const swiperContent = [
//     {
//       title: "Innovative IT Solutions for Modern Businesses",
//       description:
//         "At Inkonsul Technologies, we specialize in providing tailored IT solutions that streamline operations and enhance business performance. From cloud services to cybersecurity, our team ensures your technology is robust, scalable, and secure.",
//       imageSrc: innovation, // Replace with the actual image source
//     },
//     {
//       title: "End-to-End Product Development Services",
//       description:
//         "We help transform your concepts into fully realized products with a focus on user-centric design and cutting-edge technology. From ideation to deployment, Inkonsul Technologies delivers high-quality solutions that meet market demands and exceed expectations.",
//       imageSrc: endproduct, // Replace with the actual image source
//     },
//     {
//       title: "Scalable IT Solutions for Growth",
//       description:
//         "Our solutions are designed to scale with your business, ensuring seamless expansion and adaptation to new challenges and opportunities.",
//       imageSrc: growth, // Replace with the actual image source
//     },
//   ];
//   return (
// <Box sx={styles.mainSwipper}>
//       <Container>
//         <Box
//           sx={styles.textContainer}

//         >
//           <Typography variant="subtitle1" sx={styles.subtitle}
//            data-aos="fade-up"
//           data-aos-duration="900"
//           data-aos-delay="200">
//             Case Studies
//           </Typography>
//           <Typography variant="h4" sx={styles.title}
//            data-aos="fade-up"
//           data-aos-duration="900"
//           data-aos-delay="400">
//             Driving Success Across Industries
//           </Typography>
//           <Typography variant="body1" sx={styles.description}
//            data-aos="fade-up"
//           data-aos-duration="900"
//           data-aos-delay="600"
//           >
//             At Inkonsul Technologies, we blend cutting-edge technology with
//             unparalleled expertise to
//             <br /> transform your ideas into impactful solutions.
//           </Typography>
//         </Box>
//       </Container>

//       <Box sx={styles.swiperWrapper}>
//         <Box sx={styles.swiperNavBtns}>
//           <IconButton
//             onClick={slidePrev}
//             sx={styles.btnCommon}
//             aria-label="Previous Slide"
//           >
//             <ChevronLeft size={20} />
//           </IconButton>
//           <IconButton
//             onClick={slideNext}
//             sx={styles.btnCommon}
//             aria-label="Next Slide"
//           >
//             <ChevronRight size={20} />
//           </IconButton>
//         </Box>

//         <Box sx={styles.swiperContainer}
//          data-aos="fade-up"
//           data-aos-duration="600"
//           data-aos-delay="600"
//         >
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={20}
//             centeredSlides={true}
//             slidesPerView={1.3}
//             pagination={{ clickable: true }}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             loop={false}
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 1.3,
//               },
//               1024: {
//                 slidesPerView: 1.3,
//               },
//             }}
//           >
//             {swiperContent.map((content, index) => (
//               <SwiperSlide
//                 key={index}
//                 style={{ width: index === 1 ? "100%" : "30%" }}
//               >
//                 <SlideContent
//                   title={content.title}
//                   description={content.description}
//                   imageSrc={content.imageSrc}
//                 />
//               </SwiperSlide>
//             ))}
//             {/* {[1, 2, 3].map((index) => (
//                 <SwiperSlide key={index} style={{ width: index === 1 ? "100%" : "30%" }}>
//                   <SlideContent />
//                 </SwiperSlide>
//               ))} */}
//           </Swiper>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// // const SlideContent = () => {
// //     return (
// //       <Box sx={styles.contentWrapper}>
// //         <Box sx={styles.blurgBg}>
// //           <Box sx={styles.imageWrapper}>
// //             <img src={swipperImg} alt="Slide" style={styles.image} />
// //           </Box>
// //         </Box>
// //         <Box sx={styles.textBox}>
// //           <Typography variant="h6" sx={styles.cardTitle}>
// //             Driving Success Across Industries
// //           </Typography>
// //           <Typography variant="body2" sx={styles.cardDescription}>
// //             At Inkonsul Technologies, we blend cutting-edge technology with
// //             unparalleled expertise to transform your ideas into impactful
// //             solutions.
// //           </Typography>
// //         </Box>
// //       </Box>
// //     );
// // };

// const SlideContent = ({ title, description, imageSrc }) => {
//   return (
//     <Box sx={styles.contentWrapper}>
//       <Box sx={styles.blurgBg}>
//         <Box sx={styles.imageWrapper}>
//           <Box
//             sx={{
//               backgroundColor: "white",
//               height: "100%",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               width: "100%",
//             }}
//           >
//             <img
//               src={imageSrc}
//               alt="Slide"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </Box>
//         </Box>
//       </Box>
//       <Box sx={styles.textBox}>
//         <Typography variant="h6" sx={styles.cardTitle}>
//           {title}
//         </Typography>
//         <Typography variant="body2" sx={styles.cardDescription}>
//           {description}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default CustomSwiper;

// import React, { useRef } from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   Container,
//   CardContent,
//   Card,
//   Button,
// } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
// import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
// import "swiper/css";

// import innovation from "../../assets/innovation.jpg";
// import endproduct from "../../assets/endproduct.jpg";
// import growth from "../../assets/growth.jpg";

// const swiperContent = [
//   {
//     image: innovation,
//     title: "Innovative IT Solutions for Modern Businesses",
//     description:
//       "At Inkonsul Technologies, we specialize in providing tailored IT solutions that streamline operations and enhance business performance. From cloud services to cybersecurity, our team ensures your technology is robust, scalable, and secure.",
//   },
//   {
//     image: endproduct,
//     title: "End-to-End Product Development Services",
//     description:
//       "We help transform your concepts into fully realized products with a focus on user-centric design and cutting-edge technology. From ideation to deployment, Inkonsul Technologies delivers high-quality solutions that meet market demands and exceed expectations.",
//   },
//   {
//     image: growth,
//     title: "Scalable IT Solutions for Growth",
//     description:
//       "Our solutions are designed to scale with your business, ensuring seamless expansion and adaptation to new challenges and opportunities.",
//   },
// ];

// const CustomSwiper = () => {
//   const swiperRef = useRef(null);
//   const styles = {
//     mainSwipper: {
//       backgroundColor: "primary.main",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       color: "white",
//       border: "none",
//       boxShadow: "none",
//       backgroundImage: `url(${bggradient})`,
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center",
//       width: "100%",
//       minHeight: "100vh",
//     },
//     blurgBg: {
//       display: "flex",
//       width: "94%",
//       flexDirection: "column",
//       alignItems: "center",
//       maxWidth: "100%",
//       height: "266px",
//       overflow: "hidden",
//       background: "rgba(171, 141, 141, 0.1)",
//       backdropFilter: "blur(6.5px)",
//       WebkitBackdropFilter: "blur(6.5px)",
//       borderRadius: "10px",
//       border: "1px solid rgba(255, 255, 255, 0.18)",
//       padding: "20px",
//     },
//     swiperNavBtns: {
//       display: "flex",
//       justifyContent: "end",
//       gap: "20px",
//       width: "100%",
//     },
//     btnCommon: {
//       borderRadius: "50%",
//       height: "40px",
//       width: "40px",
//       backgroundColor: "#333",
//       color: "white",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       "&:hover": {
//         backgroundColor: "#555",
//       },
//     },
//     swiperContainer: {
//       width: "100%",
//       padding: "20px",
//       borderRadius: "10px",
//     },
//     contentWrapper: {

//       width: "100%",
//       overflow: "hidden",
//       maxWidth: "850px",
//     },
//     imageWrapper: {
//       width: { sm: "96%", xs: "96%", md: "100%", lg: "100%" },
//       position: "relative",
//       background: "#CBD4E3",
//       display: "flex",
//       justifyContent: "center",
//       borderRadius: "10px",
//       height: "262px",
//     },
//     image: {
//       // width: "40%",
//       height: "auto",
//       objectFit: "cover",
//     },
//     textBox: {
//       width: "100%",
//       padding: "20px",
//       textAlign: "start",
//       color: "white",
//     },
//     // cardTitle: {
//     //   fontSize: "20px",
//     //   fontWeight: "600",
//     //   color: "white",
//     //   marginBottom: "10px",
//     // },
//     // cardDescription: {
//     //   fontSize: "16px",
//     //   color: "white",
//     //   lineHeight: "1.5",
//     // },
//   };
//   return (
//     <Box
//       sx={{
//         // bgcolor: "#030303",
//         // color: "#fff",

//         // overflow: "hidden",
//         // pl: 8,
//         backgroundImage: `url(${bggradient})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <Box
//         sx={{
//           py: 10,
//           background: "fff",
//           background:  "linear-gradient(0deg,rgba(255, 255, 255, 0) 25%,rgba(13, 13, 13, 1) 100%)",
//         }}
//       >
//         <Container

//         // maxWidth='xl' sx={{color: '#fff', overflow: 'hidden' , paddingRight:{xs:0, md:0}, }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: {
//                 xs: "column",
//                 sm: "column",
//                 md: "row",
//                 lg: "row",
//               },
//               justifyContent: "space-between",
//               alignItems: "center",
//               px: 0,
//               mb: 5,
//             }}
//           >
//             <Box sx={styles.textContainer}>
//               <Typography
//                 sx={{ color: "secondary.main", lineHeight: 3 }}
//                 data-aos="fade-up"
//                 data-aos-duration="900"
//                 data-aos-delay="200"
//               >
//                 Case Studies
//               </Typography>
//               <Typography
//                 variant="h4"
//                 color="white"
//                 data-aos="fade-up"
//                 data-aos-duration="900"
//                 data-aos-delay="400"
//                 lineHeight={1}
//               >
//                 Driving Success Across Industries
//               </Typography>
//               <Typography
//                 sx={{
//                   // maxWidth: "1000px",
//                   color: "white",
//                   mt: 2,
//                 }}
//                 variant="body2"
//                 data-aos="fade-up"
//                 data-aos-duration="900"
//                 data-aos-delay="600"
//               >
//                 At Inkonsul Technologies, we blend cutting-edge technology with
//                 unparalleled expertise to transform your ideas into impactful
//                 solutions.
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 mr: 5,
//                 width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
//                 display: "flex",
//                 justifyContent: "end",
//                 mt: 2,
//                 alignItems: "center",
//               }}
//             >
//               <IconButton
//                 onClick={() => swiperRef.current.swiper.slidePrev()}
//                 sx={{
//                   bgcolor: "#D9D9D91F",
//                   border: "1px solid #A2A2A2",
//                   color: "#fff",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   mr: 2,
//                   "&:hover": { bgcolor: "primary.main" },
//                 }}
//               >
//                 <ChevronLeft fontSize="medium" />
//               </IconButton>
//               <IconButton
//                 onClick={() => swiperRef.current.swiper.slideNext()}
//                 sx={{
//                   bgcolor: "#D9D9D91F",
//                   border: "1px solid #A2A2A2",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   color: "#fff",
//                   ml: 2,
//                   "&:hover": { bgcolor: "primary.main" },
//                 }}
//               >
//                 <ChevronRight fontSize="medium" />
//               </IconButton>
//             </Box>
//           </Box>
//         </Container>
//         <Box
//         data-aos="fade-up"
//           data-aos-duration="700"
//           // data-aos-delay="100"
//         sx={{ px: 0, ml: { xs: 5, sm: 5, md: 5, lg: 23 } }}>
//           <Swiper
//             ref={swiperRef}
//             spaceBetween={20}
//             slidesPerView={1.5}
//             breakpoints={{
//               768: {
//                 slidesPerView: 1.5,
//               },
//               1200: {
//                 slidesPerView: 1.5,
//               },
//             }}
//           >
//             {swiperContent.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <Box sx={styles.contentWrapper}>
//                   <Box sx={styles.blurgBg}>
//                     <Box sx={styles.imageWrapper}>
//                       <Box
//                         sx={{
//                           backgroundColor: "white",
//                           height: "100%",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           width: "100%",
//                         }}
//                       >
//                         <img
//                           src={item.image}
//                           alt="Slide"
//                           style={{
//                             width: "100%",
//                             height: "100%",
//                             objectFit: "cover",
//                           }}
//                         />
//                       </Box>
//                     </Box>
//                   </Box>
//                   <Box sx={styles.textBox}>
//                     <Typography variant="h6" sx={styles.cardTitle}>
//                       {item.title}
//                     </Typography>
//                     <Typography variant="body2" sx={styles.cardDescription}>
//                       {item.description}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CustomSwiper;


import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Box, Typography, IconButton, Container } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import "swiper/css";

import innovation from "../../assets/innovation.jpg";
import endproduct from "../../assets/endproduct.jpg";
import growth from "../../assets/growth.jpg";
import useResponsive from "../../hook/useResponsive";

const CustomSwiper = () => {
  const swiperRef = useRef(null);
  const {isSmallScreen} = useResponsive()

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
  const swiperContent = [
    {
      title: "Innovative IT Solutions for Modern Businesses",
      description:
        "At Inkonsul Technologies, we specialize in providing tailored IT solutions that streamline operations and enhance business performance. From cloud services to cybersecurity, our team ensures your technology is robust, scalable, and secure.",
      imageSrc: innovation, // Replace with the actual image source
    },
    {
      title: "End-to-End Product Development Services",
      description:
        "We help transform your concepts into fully realized products with a focus on user-centric design and cutting-edge technology. From ideation to deployment, Inkonsul Technologies delivers high-quality solutions that meet market demands and exceed expectations.",
      imageSrc: endproduct, // Replace with the actual image source
    },
    {
      title: "Scalable IT Solutions for Growth",
      description:
        "Our solutions are designed to scale with your business, ensuring seamless expansion and adaptation to new challenges and opportunities.",
      imageSrc: growth, // Replace with the actual image source
    },
  ];
  return (
    <Box sx={styles.mainSwipper}>
      <Container>
        <Box sx={styles.textContainer}>
          <Typography variant="subtitle1" sx={styles.subtitle}>
            Case Studies
          </Typography>
          <Typography variant="h4" sx={styles.title}>
            Driving Success Across Industries
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            At Inkonsul Technologies, we blend cutting-edge technology with
            unparalleled expertise to<br /> transform your ideas into impactful
            solutions.
          </Typography>
        </Box>
      </Container>

      <Box sx={styles.swiperWrapper}>
        <Box sx={styles.swiperNavBtns} >
          <IconButton onClick={slidePrev} sx={styles.btnCommon} aria-label="Previous Slide">
            <ChevronLeft size={20} />
          </IconButton>
          <IconButton onClick={slideNext} sx={styles.btnCommon} aria-label="Next Slide">
            <ChevronRight size={20}  />
          </IconButton>
        </Box>

        <Box sx={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={1.3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.3,
              },
              1024: {
                slidesPerView: 1.3,
              },
            }}
          >

            {
              swiperContent.map((content, index) => (
                <SwiperSlide key={index} style={{ width: index === 1 ? "100%" : "30%" }}>
                  <SlideContent
                    title={content.title}
                    description={content.description}
                    imageSrc={content.imageSrc}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

const SlideContent = ({ title, description, imageSrc }) => {
  return (
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.blurgBg}>
        <Box sx={styles.imageWrapper}>
        <Box sx={{ backgroundColor: 'white', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%' }}>
            <img src={imageSrc} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.textBox}>
        <Typography variant="h6" sx={styles.cardTitle}>
          {title}
        </Typography>
        <Typography variant="body2" sx={styles.cardDescription}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};





const styles = {
  mainSwipper: {
    backgroundColor: "primary.main",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    border: "none",
    boxShadow: "none",
    backgroundImage: `url(${bggradient})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "100vh",
  },
  blurgBg: {
    display: "flex",
    width:'94%',
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    height: "266px",
    overflow: "hidden",
    background: "rgba(171, 141, 141, 0.1)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(6.5px)",
    WebkitBackdropFilter: "blur(6.5px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    padding: "20px",
  },
  textContainer: {
    textAlign: "start",
    marginBottom: "30px",
    color: "white",
  },
  subtitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "white",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "white",
    lineHeight:'30px'
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.5",
    color: "white",
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
    marginRight:{sm:'20px', xs:'40px'}
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
  swiperContainer: {
    width: "100%",
    maxWidth: "1200px",
    padding: "20px",
    borderRadius: "10px",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
    maxWidth: "800px",
  },
  imageWrapper: {
    width: {sm:'96%', xs:'96%', md:"100%", lg:"100%"},
    position: "relative",
    // background: "#CBD4E3",
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
    height: "262px",
  },
  image: {
    // width: "40%",
    height: "auto",
    objectFit: "cover",
  },
  textBox: {
    width: "100%",
    padding: "20px",
    textAlign: "start",
    color: "white",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "white",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "16px",
    color: "white",
    lineHeight: "1.5",
  },
};

export default CustomSwiper;