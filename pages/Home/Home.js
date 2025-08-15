import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import girdborder from "../../assets/company/gridborder.png";
import Banner from "../../components/Banner";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import icon1 from "../../assets/ServiceImages/icon1.png";
import icon2 from "../../assets/ServiceImages/icon2.png";
import icon3 from "../../assets/ServiceImages/icon3.png";
import icon4 from "../../assets/ServiceImages/icon4.png";
import icon5 from "../../assets/ServiceImages/icon5.png";
import icon6 from "../../assets/ServiceImages/icon6.png";

import homebanner1 from "../../assets/home/homebannerbg1.png";
import homebanner2 from "../../assets/home/homebannerbg2.png";

import linearColor from "../../assets/ServiceImages/bglinergradient.png";
import consulting from "../../assets/ServiceImages/consulting.png";

import CustomSwiper from "./CustomSwiper";
import ContactBanner from "../../components/ContactBanner";
import Testimonials from "./Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import animation from "../../assets/animation.mp4";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question:
        "What is the process for getting started with We Design Interiors services?",
      answer:
        "To begin your interior design journey with We Design Interiors, simply reach out to us through our contact channels. Our team will guide you through the initial consultation, understanding your requirements, and providing a roadmap for the design process. From there, we’ll collaborate closely with you to bring your vision to life.",
    },
    {
      question:
        "How does We Design Interiors handle project timelines to ensure timely completion?",
      answer:
        "Timely project completion is a priority at We Design Interiors. We adhere to a well-structured timeline, providing regular updates and maintaining open communication to ensure that your project progresses smoothly and is completed on schedule.",
    },
    {
      question: "What sets We Design apart in terms of design and innovation?",
      answer:
        "We Design Interiors embraces new-age practices that empower clients to take control of their project’s design, budget, and timelines. Our innovative approach ensures that your vision is not only understood but meticulously executed, setting us apart in the realm of design innovation.",
    },
    {
      question:
        "Can We Design Interiors accommodate specific design preferences?",
      answer:
        "Absolutely. We Design Interiors thrives on creating personalized designs. We actively encourage and incorporate our clients’ unique design preferences, ensuring that each project reflects their individual style and taste.",
    },
    {
      question:
        "How does We Design Interiors balance aesthetics and functionality in their designs?",
      answer:
        "We Design Interiors places a strong emphasis on achieving a harmonious balance between aesthetics and functionality. Our design approach involves meticulous planning to ensure that every element not only enhances the visual appeal but also serves a practical purpose. By understanding the unique needs of each client, we create spaces that not only look stunning but also cater to their lifestyle and daily requirements.",
    },
  ];

  const [expanded, setExpanded] = useState(false); // State to track expanded panel

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); // Set expanded panel
  };

  const servicesData = [
    {
      icon: icon1,
      title: "Tailored Solutions",
      description:
        "We understand that every business is unique. Our software solutions are crafted to address your specific challenges, ensuring maximum impact and efficiency.",
    },
    {
      icon: icon2,
      title: "End-to-End Expertise",
      description:
        "From ideation and design to development, testing, and deployment, we provide comprehensive services that cover the entire software lifecycle.",
    },
    {
      icon: icon3,
      title: "Scalability & Flexibility",
      description:
        "We build software that grows with your business, ensuring long-term sustainability and the ability to adapt to changing market demands.",
    },
    {
      icon: icon4,
      title: "Cutting-Edge Technologies",
      description:
        "Our team stays at the forefront of technology trends, utilizing the latest tools and platforms to deliver innovative, future-proof solutions.",
    },
    {
      icon: icon5,
      title: "Focus on Quality",
      description:
        "We adhere to rigorous testing and quality assurance processes to ensure that your custom software is reliable, secure, and performs optimally.",
    },
    {
      icon: icon6,
      title: "Collaboration & Transparency",
      description:
        "We prioritize clear communication and seamless collaboration, keeping you involved throughout the development process to ensure the final product meets your expectations.",
    },
  ];

  const herosectionbanner = [homebanner1, homebanner2];

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      setTimeout(() => {
        // videoRef.current.play();
      }, 5000);
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Box>
          <Box>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              navigation={false}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              style={{ width: "100%" }}
            >
              {herosectionbanner.map((slide, index) => (
                <SwiperSlide key={index} style={{ height: "100%" }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: {
                        xs: "60vh", // 60% of the viewport height for extra-small screens
                        sm: "70vh", // 70% for small screens
                        md: "100vh", // Full height for medium and larger screens
                      },
                      backgroundImage: `url(${slide})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      display: "flex",
                      // alignItems: 'center',
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",

                        width: "100%",
                        zIndex: 1,
                        top: "0%",
                      }}
                    >
                      <Banner
                        title="Home"
                        heading="Empowering Businesses Through Innovation and Expertise"
                        caption="At Sunadh Technologies, we are your trusted partner in creating scalable, sustainable, and impactful IT solutions for a dynamic digital world."
                      />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "primary.main",
            backgroundImage: `url(${linearColor})`,
            backgroundSize: "contain",
            backgroundPositionY: "center",
          }}
        >
          <Container sx={{ position: "relative" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: "100%", sm: "100%", md: "65vh", lg: "65vh" },
                  padding: { xs: 1, md: 0 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "1562px",
                    aspectRatio: "1562 / 656",
                    overflow: "hidden",
                    position: { xs: "static", lg: "absolute" },
                    top: { xs: 0, lg: -70 },
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "rgba(255, 255, 255, 0.49)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 4,
                    }}
                  >
                    <video
                      ref={videoRef}
                      width={"100%"}
                      height={"480px"}
                      loop
                      autoPlay
                      style={{
                        objectFit: "cover",
                        margin: "15px",
                        borderRadius: 6,
                      }}
                    >
                      <source src={animation} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                  {/* <img
                    src={consulting}
                    alt="IT Consulting"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  /> */}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container>
            <Box
              sx={{
                textAlign: "left",
                marginY: "30px",
                color: "black",
              }}
            >
              <Typography
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
                sx={{ color: "secondary.main", lineHeight: 3 }}
              >
                Services
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="600"
                variant="h4"
                color="white"
                lineHeight={1}
              >
                Solutions Tailored to Your Needs
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                sx={{
                  maxWidth: "1000px",
                  color: "white",
                  mt: 2,
                }}
                variant="body2"
              >
                At Sunadh Technologies, we blend cutting-edge technology with
                unparalleled expertise to transform your ideas into impactful
                solutions.
              </Typography>
            </Box>

            <Grid container justifyContent="center" pb={10}>
              {servicesData.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    data-aos="fade-up"
                    data-aos-duration="880"
                    sx={{
                      backgroundColor: "#0D0D0D",
                      borderRadius: "0px",
                      // color: "#fff",
                      textAlign: "left",
                      p: 2,
                      height: "200px",
                      transition: "0.3s",
                      border: "2px solid transparent",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        backdropFilter: "blur(10px)",
                        border: "2px solid ",
                        borderImageSource:
                          "linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)",
                        borderImageSlice: 1,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={service.icon}
                      alt="Icon"
                      sx={{
                        width: "35px",
                        height: "35px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ color: "#fff", py: 1 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#ccc" }}>
                      {service.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Swiper  */}
        {/* <Testimonials /> */}

        <CustomSwiper />
       <Testimonials />
        {/* Faq */}
        <Box
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          sx={{
            backgroundColor: "primary.main",
            paddingBottom: { xs: "5px", lg: 20 },
          }}
        >
          <Container>
            <Box
              sx={{
                textAlign: "center",
                marginY: "30px",
                color: "black",
              }}
            >
              <Typography variant="h4" color="white" lineHeight={1}>
                Common Questions
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    width: { xs: "90%", lg: "40%" },
                    color: "white",
                    mt: 2,
                  }}
                  variant="body2"
                >
                  Advance project management using ProManageAI. Seamlessly
                  organize, execute, and optimize tasks.{" "}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ pt: 5, textAlign: "center" }}>
              <Box>
                {faqData.map((item, index) => (
                  <Accordion
                    sx={{ backgroundColor: "inherit", color: "secondary.main" }}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    key={index}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === `panel${index + 1}` ? (
                          <RemoveCircleOutlineRoundedIcon
                            sx={{ color: "secondary.contrastText" }}
                          />
                        ) : (
                          <AddCircleOutlineRoundedIcon
                            sx={{ color: "secondary.contrastText" }}
                          />
                        )
                      }
                      aria-controls={`panel${index + 1}-content`}
                      id={`panel${index + 1}-header`}
                    >
                      <Typography variant="body1">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          backgroundColor: "#191919",
                          padding: 2,
                          borderRadius: 3.8,
                        }}
                      >
                        <Typography variant="body2" textAlign={"left"}>
                          {item.answer}
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        <ContactBanner
         
        />
      </Box>
    </>
  );
};

export default Home;
