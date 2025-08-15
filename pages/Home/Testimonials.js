import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// const testimonials = [
//   {
//     name: "Simion Jones",
//     position: "CIO in Healthcare",
//     text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting. Many desktop publishing packages use Lorem Ipsum as their default model text.”",
//   },
//   {
//     name: "John Doe",
//     position: "CTO in Technology",
//     text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. More recently, it has been used in desktop publishing software like Aldus PageMaker.”",
//   },
//   {
//     name: "Jane Smith",
//     position: "CEO in Finance",
//     text: "“Lorem Ipsum is not just random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, discovered its origins while researching obscure Latin words.”",
//   },
//   {
//     name: "Alex Brown",
//     position: "Manager in Retail",
//     text: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It originates from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. The text remains widely used in design mockups.”",
//   },
//   {
//     name: "Emma Wilson",
//     position: "Marketing Director",
//     text: "“Lorem Ipsum is the standard placeholder text in publishing and web design. Many versions exist, sometimes by accident and sometimes on purpose. Designers often use it to focus on visual elements without distraction.”",
//   },
//   {
//     name: "Michael Carter",
//     position: "Lead Engineer",
//     text: "“Using Lorem Ipsum allows designers to present layouts and typography without needing real content. It is widely used because it approximates natural language distribution, making designs appear more realistic and polished.”",
//   },
// ];

const testimonials = [
  {
    name: "Arjun Mehta",
    position: "CIO at HealthTech India",
    text: "“The team’s innovative solutions and quick turnaround times have greatly enhanced our operations. Their expertise has been instrumental in improving our healthcare services.”",
  },
  {
    name: "Priya Sharma",
    position: "CTO at Visionary Technologies",
    text: "“Their dedication and technical prowess have helped us achieve scalability and efficiency. This partnership has been a game-changer for our company.”",
  },
  {
    name: "Neha Kapoor",
    position: "CEO at Zenith Finance",
    text: "“I’m amazed by their professionalism and ability to deliver customized solutions. Their work has made a significant positive impact on our business growth.”",
  },
  {
    name: "Rohan Gupta",
    position: "Manager at RetailChain India",
    text: "“The team’s adaptability and problem-solving skills are unparalleled. They have consistently delivered exceptional results, meeting all our unique business needs.”",
  },
  {
    name: "Aditi Rao",
    position: "Marketing Director at BrightSpark Media",
    text: "“Their expertise in crafting digital solutions has amplified our marketing efforts. The results we’ve seen are a testament to their hard work and innovative thinking.”",
  },
  {
    name: "Vikram Iyer",
    position: "Lead Engineer at Innovatech Solutions",
    text: "“Working with this team has been a pleasure. Their attention to detail, technical skill, and clear communication make them an outstanding partner for any project.”",
  },
];


const Testimonials = () => {
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="800"
      sx={{
        width: "100%",
        bgcolor: "#0D0D0D",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        paddingY: 10,
      }}
    >
      {/* Section Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Testimonials
        </Typography>
        <Typography variant="body1" color="#C2C2C2" mt={2}>
          Advance project management using ProManageAI. Seamlessly <br />{" "}
          organize, execute, and optimize tasks.
        </Typography>
      </Box>

      {/* Swiper Component */}
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // 3 seconds delay
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          loop={true}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
          style={{
            paddingBottom: "40px",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  textAlign: "center",
                  color: "#C2C2C2",
                  padding: 3,
                  minHeight: "180px",
                  maxWidth: "600px",
                  margin: "auto",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px", mt: 1, mb: 2, color: "gray" }}
                  >
                    {/* {testimonial.position} */}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "14px" }}>
                    {testimonial.text}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
