// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Container,
//   Card,
//   CardContent,
// } from "@mui/material";

// import icon1 from "../../assets/ServiceImages/icon1.png";
// import icon2 from "../../assets/ServiceImages/icon2.png";
// import icon3 from "../../assets/ServiceImages/icon3.png";
// import icon4 from "../../assets/ServiceImages/icon4.png";
// import icon5 from "../../assets/ServiceImages/icon5.png";
// import icon6 from "../../assets/ServiceImages/icon6.png";

// import serviceicon1 from "../../assets/ServiceImages/service1.png";
// import serviceicon2 from "../../assets/ServiceImages/service2.png";
// import serviceicon3 from "../../assets/ServiceImages/service3.png";
// import serviceicon4 from "../../assets/ServiceImages/service4.png";
// import serviceicon5 from "../../assets/ServiceImages/service5.png";

// import bglinear from "../../assets/ServiceImages/bglinergradient.png";
// import gridImage from "../../assets/ServiceImages/gridImage.png";
// import scrollPart from "../../assets/ServiceImages/scrollpart.png";
// import consulting from "../../assets/ServiceImages/consulting.png";
// import Banner from "../../components/Banner";
// import linearColor from "../../assets/ServiceImages/bglinergradient.png";

// const servicesData = [
//   {
//     icon: icon1,
//     title: "Tailored Solutions",
//     description:
//       "We understand that every business is unique. Our software solutions are crafted to address your specific challenges, ensuring maximum impact and efficiency.",
//   },
//   {
//     icon: icon2,
//     title: "End-to-End Expertise",
//     description:
//       "From ideation and design to development, testing, and deployment, we provide comprehensive services that cover the entire software lifecycle.",
//   },
//   {
//     icon: icon3,
//     title: "Scalability & Flexibility",
//     description:
//       "We build software that grows with your business, ensuring long-term sustainability and the ability to adapt to changing market demands.",
//   },
//   {
//     icon: icon4,
//     title: "Cutting-Edge Technologies",
//     description:
//       "Our team stays at the forefront of technology trends, utilizing the latest tools and platforms to deliver innovative, future-proof solutions.",
//   },
//   {
//     icon: icon5,
//     title: "Focus on Quality",
//     description:
//       "We adhere to rigorous testing and quality assurance processes to ensure that your custom software is reliable, secure, and performs optimally.",
//   },
//   {
//     icon: icon6,
//     title: "Collaboration & Transparency",
//     description:
//       "We prioritize clear communication and seamless collaboration, keeping you involved throughout the development process to ensure the final product meets your expectations.",
//   },
// ];

// const servicee = [
//   {
//     icon: serviceicon1,
//     title: "Custom Web & Mobile Applications",
//   },
//   {
//     icon: serviceicon2,
//     title: "Enterprise Software Solutions",
//   },
//   {
//     icon: serviceicon3,
//     title: "Cloud-Based Systems",
//   },
//   {
//     icon: serviceicon4,
//     title: "Integration with Existing Platforms",
//   },
//   {
//     icon: serviceicon5,
//     title: "Legacy System Modernization",
//   },
//   {
//     icon: serviceicon1,
//     title: "Maintenance & Support",
//   },
// ];

// const services = [
//   {
//     id: 1,
//     title: "Integration with Existing Platforms",
//     description:
//       "At Inkonsul we provide IT consulting services designed to help businesses navigate the complexities of the digital landscape. Our team of experienced consultants works closely with your organization to identify opportunities, optimize technology investments, and implement strategies that drive innovation, efficiency, and growth.",
//   },
//   {
//     id: 2,
//     title: "Tailored Recommendations",
//     description:
//       "No two businesses are the same. We offer customized IT strategies and solutions that address your unique challenges and deliver measurable results.",
//   },
//   {
//     id: 3,
//     title: "Expertise Across Industries",
//     description:
//       "With deep industry knowledge and technical expertise, we provide relevant insights and practical solutions for businesses across various sectors, including finance, healthcare, retail, manufacturing, and more.",
//   },
//   {
//     id: 4,
//     title: "Technology Optimization",
//     description:
//       "We help streamline your IT infrastructure, enhance system performance, and ensure your technology aligns with best practices for security, scalability, and efficiency.",
//   },
//   {
//     id: 5,
//     title: "Change Management",
//     description:
//       "We guide your organization through transitions, whether you're adopting new technologies, migrating to the cloud, or implementing digital transformations, ensuring smooth adoption and minimal disruption.",
//   },
//   {
//     id: 6,
//     title: "Ongoing Support",
//     description:
//       "Our commitment to your success extends beyond implementation. We offer continuous support and monitoring to ensure that your IT strategy evolves with your business needs.",
//   },
// ];

// const Services = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundColor: "primary.main",
//           backgroundImage: `url(${gridImage})`,
//           backgroundSize: "cover",
//           height: { sm: '400px', md: '100%', lg: '100%' }
//         }}
//       >
//         <Banner
//           title="Company"
//           heading="Empowering Businesses Through Innovation and Expertise"
//           caption="At Inkonsul Technologies, we are your trusted partner in creating scalable, sustainable, and impactful IT solutions for a dynamic digital world."
//         />
//       </Box>

//       <Box
//         sx={{
//           backgroundColor: "primary.main",
//           backgroundImage: `url(${bglinear})`,
//           backgroundSize: "cover",
//           backgroundRepeat:"no-repeat",
//           // backgroundPosition:"center"
//         }}
//       >
//         <Container sx={{ position: "relative" }}>
//           <Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: { xs: "100%", sm: "100%", md: "65vh", lg: "80vh" },
//                 padding: { xs: 1, md: 0 },
//               }}
//             >
//               <Box
//                 container
//                 spacing={1}
//                 alignItems="center"
//                 color="primary.contrastText"
//                 sx={{
//                   pt: 0,
//                   position: { xs: "static", lg: "absolute" },
//                   top: { xs: 0, lg: "-10%" },
//                   left: "2%",
//                   display: "flex",
//                   alignContent: "center",
//                   zIndex: 0,
//                   paddingInlineY: "50px",
//                 }}
//               >
//                 <Container>
//                   <Box
//                     sx={{
//                       textAlign: "left",
//                       marginBottom: "30px",
//                       color: "black",
//                     }}
//                   >
//                     <Typography variant="h4" color="white"> Custom Software Development </Typography>

//                     <Typography
//                       sx={{
//                         maxWidth: "1000px",
//                         margin: "40px 0",
//                         color: "white",
//                       }}
//                       variant="body2"
//                     >
//                       At Inkonsul, we specialize in delivering custom software
//                       development services that are specifically designed to
//                       meet the unique needs of your business. Whether you're
//                       looking to streamline operations, enhance customer
//                       experience, or drive innovation, our team of expert
//                       developers collaborates closely with you to build
//                       scalable, secure, and high-performing solutions that align
//                       with your strategic goals.
//                     </Typography>
//                   </Box>

//                   <Grid container justifyContent="center">
//                     {servicesData.map((service, index) => (
//                       <Grid item xs={12} sm={6} md={4} key={index}>
//                         <Card
//                           sx={{
//                             backgroundColor: "#0D0D0D",
//                             borderRadius: "0px",
//                             color: "#fff",
//                             textAlign: "left",
//                             p: 2,
//                             height: "200px",
//                             transition: "0.3s",
//                             border: "2px solid transparent",
//                             "&:hover": {
//                               backgroundColor: "primary.main",
//                               backdropFilter: "blur(10px)",
//                               border: "2px solid ",
//                               borderImageSource:
//                                 "linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)",
//                               borderImageSlice: 1,
//                             },
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={service.icon}
//                             alt="Icon"
//                             sx={{
//                               width: "35px",
//                               height: "35px",
//                               marginBottom: "10px",
//                             }}
//                           />
//                           <Typography
//                             variant="body2"
//                             fontWeight="bold"
//                             gutterBottom
//                             sx={{ color: "#fff", py: 1 }}
//                           >
//                             {service.title}
//                           </Typography>
//                           <Typography variant="body2" sx={{ color: "#ccc" }}>
//                             {service.description}
//                           </Typography>
//                         </Card>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Container>
//               </Box>
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       <Box
//         sx={{
//           backgroundColor: "primary.main",
//           backgroundImage: `url(${gridImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: { xs: "120px", md: "auto", lg: "auto" },
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: "primary.main",

//             background:
//               "linear-gradient(180deg, #0D0D0D 50%, rgba(255,255,255,0) 100%)",
//           }}
//         >
//           <Container sx={{ px: 2, pt: 10, color: "secondary.main" }}>
//             <Typography variant="h4" align="center" gutterBottom pb={"20px"}>
//               Our Services Include
//             </Typography>
//             <Typography
//               variant="body2"
//               align="center"
//               sx={{ mb: 3, maxWidth: 700, mx: "auto" }}
//             >
//               Let us help you turn your vision into reality with software
//               solutions that drive business success. Contact us today to discuss
//               how our custom software development services can transform your
//               operations and accelerate your growth.
//             </Typography>
//             <Grid container spacing={2} justifyContent="center">
//               {servicee.map((service, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <Card
//                     sx={{
//                       backgroundColor: "transparent",
//                       color: "#fff",
//                       textAlign: "center",
//                       p: 2,
//                     }}
//                   >
//                     <CardContent>
//                       <Box
//                         component="img"
//                         src={service.icon}
//                         alt="Icon"
//                         sx={{
//                           width: "30px",
//                           height: "30px",
//                           marginBottom: "10px",
//                           border: "1px solid white",
//                           borderRadius: "10px",
//                           padding: "20px",
//                           backgroundColor: "primary.main",

//                           background:
//                             "linear-gradient(180deg, #0D0D0D 50%, rgba(255,255,255,0) 100%)",
//                           borderImageSource:
//                             "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0) 100%)",
//                           borderImageSlice: 1,
//                         }}
//                       />

//                       <Box sx={{ display: "flex", justifyContent: "center" }}>
//                         <Typography
//                           variant="body2"
//                           sx={{ mt: 0.5, width: "150px" }}
//                         >
//                           {service.title}
//                         </Typography>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Box>

//         <Container>
//           <Box sx={{ textAlign: "left", marginTop: "100px", color: "black", }}>
//             <Typography variant="h4" color="white" pb={2}>
//               IT Consulting
//             </Typography>
//             <Typography
//               sx={{
//                 maxWidth: "1000px",
//                 paddingBottom: "100px",
//                 color: "white",
//                 paddingTop: "10px",
//               }}
//               variant="body2"
//             >
//               At Inkonsul we provide IT consulting services designed to help
//               businesses navigate the complexities of the digital landscape. Our
//               team of experienced consultants works closely with your
//               organization to identify opportunities, optimize technology
//               investments, and implement strategies that drive innovation,
//               efficiency, and growth.
//             </Typography>
//           </Box>
//         </Container>
//       </Box>
//       <Box>
//         <Box
//           sx={{
//             backgroundColor: "primary.main",
//             backgroundImage: `url(${linearColor})`,
//             backgroundSize: "contain",
//             backgroundPositionY: "center",

//           }}
//         >
//           <Container sx={{ position: "relative" }}>
//             <Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   height: { xs: "100%", sm: "100%", md: "65vh", lg: "65vh" },
//                   padding: { xs: 1, md: 0 },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     width: "100%",
//                     maxWidth: "1562px",
//                     aspectRatio: "1562 / 656",
//                     overflow: "hidden",
//                     position: { xs: "static", lg: "absolute" },
//                     top: { xs: 0, lg: -50 },
//                   }}
//                 >
//                   <img
//                     src={consulting}
//                     alt="IT Consulting"
//                     style={{
//                       width: "100%",
//                       height: "auto",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </Box>
//               </Box>
//             </Box>
//           </Container>
//         </Box>
//         {/* Why choose */}
//         <Box
//           sx={{
//             backgroundColor: "primary.main",
//             pt: 15,
//           }}
//         >
//           <Container maxWidth="lg">
//             <Grid container spacing={4}>
//               {/* Left Sidebar */}
//               <Grid
//                 item
//                 xs={12}
//                 md={4}
//                 sx={{
//                   position: { sm: "static", md: "sticky", lg: "sticky" },
//                   top: 20,
//                   height: { sm: "65vh", lg: "100%" },
//                 }}
//               >
//                 <Box textAlign="left" p={2} color="#fff" borderRadius={2}>
//                   <Typography variant="h6" lineHeight={1.3} fontWeight="400">
//                     Why Choose Our IT Consulting Services?
//                   </Typography>
//                   <Box mt={5}>
//                     <img
//                       src={scrollPart}
//                       alt="Company Logo"
//                       style={{ width: "100%", borderRadius: 8 }}
//                     />
//                   </Box>
//                 </Box>
//               </Grid>

//               {/* Right Content (Scrollable) */}
//               <Grid
//                 item
//                 xs={12}
//                 md={8}
//                 sx={{
//                   // overflowY: "auto",
//                   // maxHeight: "100vh",
//                   border:"0",
//                   "&::-webkit-scrollbar": { display: "none" },
//                   "-ms-overflow-style": "none",
//                   "scrollbar-width": "none",
//                 }}
//               >
//                 {services.map((service) => (
//                   <Card
//                     key={service.id}
//                     sx={{ mb: 3, bgcolor: "transparent", color: "#fff" }}
//                   >
//                     <CardContent>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: "#fff",
//                           border: "2px solid ",
//                           mb: "15px",
//                           borderImageSource:
//                             "linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)",
//                           borderImageSlice: 1,
//                           padding: "10px",
//                           width: "30px",
//                           textAlign: "center",
//                           borderRadius: "30px",
//                           fontWeight: 600,
//                         }}
//                       >
//                         {service.id}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         fontSize={18}
//                         fontWeight="400"
//                         my={1}
//                       >
//                         {service.title}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="secondary.contrastText"
//                         fontWeight={400}
//                         mt={1}
//                       >
//                         {service.description}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>

//       {/* Services section */}
//     </>
//   );
// };

// export default Services;

import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Icon,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import girdborder from "../../assets/company/gridborder.png";
import ino from "../../assets/company/ITConsulting.jpg";

import icon1 from "../../assets/ServiceImages/icon1.png";
import icon2 from "../../assets/ServiceImages/icon2.png";
import icon3 from "../../assets/ServiceImages/icon3.png";
import icon4 from "../../assets/ServiceImages/icon4.png";
import icon5 from "../../assets/ServiceImages/icon5.png";
import icon6 from "../../assets/ServiceImages/icon6.png";

import serviceicon1 from "../../assets/ServiceImages/service1.png";
import serviceicon2 from "../../assets/ServiceImages/service2.png";
import serviceicon3 from "../../assets/ServiceImages/service3.png";
import serviceicon4 from "../../assets/ServiceImages/service4.png";
import serviceicon5 from "../../assets/ServiceImages/service5.png";

import bglinear from "../../assets/ServiceImages/bglinergradient.png";
import Itservice from "../../assets/ServiceImages/Itservice.jpg";

import Banner from "../../components/Banner";
import useResponsive from "../../hook/useResponsive";
import img11 from "../../assets/compressed/img11.jpg";
import ContactBanner from "../../components/ContactBanner";

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

const servicee = [
  {
    icon: serviceicon1,
    title: "Custom Web & Mobile Applications",
  },
  {
    icon: serviceicon2,
    title: "Enterprise Software Solutions",
  },
  {
    icon: serviceicon3,
    title: "Cloud-Based Systems",
  },
  {
    icon: serviceicon4,
    title: "Integration with Existing Platforms",
  },
  {
    icon: serviceicon5,
    title: "Legacy System Modernization",
  },
  {
    icon: serviceicon1,
    title: "Maintenance & Support",
  },
];

const services = [
  {
    id: 1,
    title: "Integration with Existing Platforms",
    description:
      "At Inkonsul we provide IT consulting services designed to help businesses navigate the complexities of the digital landscape. Our team of experienced consultants works closely with your organization to identify opportunities, optimize technology investments, and implement strategies that drive innovation, efficiency, and growth.",
  },
  {
    id: 2,
    title: "Tailored Recommendations",
    description:
      "No two businesses are the same. We offer customized IT strategies and solutions that address your unique challenges and deliver measurable results.",
  },
  {
    id: 3,
    title: "Expertise Across Industries",
    description:
      "With deep industry knowledge and technical expertise, we provide relevant insights and practical solutions for businesses across various sectors, including finance, healthcare, retail, manufacturing, and more.",
  },
  {
    id: 4,
    title: "Technology Optimization",
    description:
      "We help streamline your IT infrastructure, enhance system performance, and ensure your technology aligns with best practices for security, scalability, and efficiency.",
  },
  {
    id: 5,
    title: "Change Management",
    description:
      "We guide your organization through transitions, whether you're adopting new technologies, migrating to the cloud, or implementing digital transformations, ensuring smooth adoption and minimal disruption.",
  },
  {
    id: 6,
    title: "Ongoing Support",
    description:
      "Our commitment to your success extends beyond implementation. We offer continuous support and monitoring to ensure that your IT strategy evolves with your business needs.",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { isSmallScreen } = useResponsive();
  return (
    <Box sx={{ bgcolor: "#000000" }}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          backgroundImage: `url(${girdborder})`,
          backgroundSize: "cover",
        }}
      >
        <Banner
          title="Services"
          heading="Comprehensive IT Solutions for a Future-Ready Business"
          caption="From cloud computing to AI-driven applications, our tailored IT solutions empower businesses to innovate, optimize, and scale seamlessly."
        />
      </Box>
      {/* Software development section */}

      <Box
        sx={{
          backgroundImage: `url(${bglinear})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100%",
          color: "#fff",
        }}
        pb={10}
      >
        <Box
          sx={{
            padding: isSmallScreen ? "20px 10px" : "20px 20px",
            py: 5,
            background:
              "linear-gradient(0deg,rgba(255, 255, 255, 0) 25%,rgba(13, 13, 13, 1) 100%)",
          }}
        >
          <Container>
            <Box
              sx={{ textAlign: "left", marginBottom: "30px", color: "black" }}
            >
              <Typography
                variant="h4"
                color="white"
                lineHeight={isSmallScreen ? "1.1" : ""}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                Custom Software Development
              </Typography>
              <Typography
                sx={{
                  maxWidth: "1000px",
                  margin: isSmallScreen ? "30px 0" : "40px 0",
                  color: "white",
                }}
                variant="body2"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                At Inkonsul, we specialize in delivering custom software
                development services that are specifically designed to meet the
                unique needs of your business. Whether you're looking to
                streamline operations, enhance customer experience, or drive
                innovation, our team of expert developers collaborates closely
                with you to build scalable, secure, and high-performing
                solutions that align with your strategic goals.
              </Typography>
            </Box>

            <Grid container justifyContent="center">
              {servicesData.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="400"
                    sx={{
                      backgroundColor: "#0D0D0D",
                      borderRadius: "0px",
                      color: "#fff",
                      textAlign: "left",
                      p: 2,
                      height: "200px",
                      transition: "0.3s",
                      border: "2px solid transparent",
                      "&:hover": {
                        backgroundColor: "rgba(13, 13, 13, 0.2)",
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
      </Box>

      {/* Services section */}
      <Box
        sx={{
          // backgroundImage: `url(${gridImage})`,
          backgroundSize: "cover",
          width: "100%",
          backgroundPosition: "center",
          color: "#fff",
          py: 10,
        }}
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="400"
      >
        <Container sx={{ px: 2 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            pb={"20px"}
            lineHeight={isSmallScreen ? "1.1" : ""}
          >
            Our Services Include
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ mb: 3, maxWidth: 700, mx: "auto" }}
          >
            Let us help you turn your vision into reality with software
            solutions that drive business success. Contact us today to discuss
            how our custom software development services can transform your
            operations and accelerate your growth.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {servicee.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <CardContent>
                    <Box
                      component="img"
                      src={service.icon}
                      alt="Icon"
                      sx={{
                        width: "50px",
                        height: "50px",
                        marginBottom: "10px",
                        border:
                          "1px solid linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0) 100%)",
                        borderRadius: "10px",
                        padding: "10px",
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0) 100%)",
                        // borderImageSource: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0) 100%)',
                        // borderImageSlice: 1,
                      }}
                    />

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        variant="body2"
                        sx={{ mt: 0.5, width: "150px" }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* It Consulting */}
      <Box
        sx={{
          backgroundImage: `url(${bglinear})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100%",
          color: "#fff",
          padding: "20px 20px",
          py: 5,
        }}
      >
        <Container fixed>
          <Box
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="400"
            sx={{ textAlign: "left", marginBottom: "30px", color: "black" }}
          >
            <Typography variant="h4" color="white" pb={2}>
              IT Consulting
            </Typography>
            <Typography
              sx={{ maxWidth: "1000px", margin: "20px 0", color: "white" }}
              variant="body2"
            >
              At Inkonsul we provide IT consulting services designed to help
              businesses navigate the complexities of the digital landscape. Our
              team of experienced consultants works closely with your
              organization to identify opportunities, optimize technology
              investments, and implement strategies that drive innovation,
              efficiency, and growth.
            </Typography>
          </Box>
          {/* Image Box with Fixed Proportions */}
          <Box
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="400"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "1562px",
              // aspectRatio: "1562 / 656",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                background: "rgba( 255, 255, 255, 0.35 );",
                padding: 2,
                borderRadius: 5,
              }}
            >
              <img
                src={Itservice}
                alt="IT Consulting"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 15,
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why choose */}
      <Box>
        <Container maxWidth="lg" sx={{ marginTop: 5 }}>
          <Grid container spacing={4}>
            {/* Left Sidebar */}
            <Grid
          
              item
              xs={12}
              md={5}
              sx={{
                position: {
                  xs: "static",
                  sm: "static",
                  md: "sticky",
                  lg: "sticky",
                },
                top: 20,
                height: { sm: "65vh", lg: "100vh" },
              }}
            >
              <Box
                textAlign="left"
                p={2}
                color="#fff"
                borderRadius={2}
            
              >
                <Typography
                  variant="h6"
                  lineHeight={1.3}
                  fontWeight="400"
                  pt={3}
                >
                  Why Choose Our IT Consulting Services?
                </Typography>
                <Box mt={10}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "rgba(255, 255, 255, 0.30)",
                      backdropFilter: "blur(2px) ",
                      WebkitBackdropFilter: "blur(2px)",
                      padding: 2,
                      display: "flex",
                      alignContent: "center",
                    }}
                  >
                    <Box
               
                      component="img"
                      src={img11}
                      alt="Inkonsul Technologies"
                      sx={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 1,
                        height: { xs: 250, sm: 350, md: "auto" }, // Dynamic image height on smaller screens
                      }}
                    />
                  </Card>
                  {/* <img
                    src={scrollPart}
                    alt="Company Logo"
                    style={{ width: "100%", borderRadius: 8 }}
                  /> */}
                </Box>
              </Box>
            </Grid>

            {/* Right Content (Scrollable) */}
            <Grid
              item
              xs={12}
              md={7}
              sx={
                {
                  // overflowY: isSmallScreen ? "" : "auto",
                  // maxHeight: isSmallScreen ? "" : "100vh",
                  // "&::-webkit-scrollbar": { display: "none" },
                  // "-ms-overflow-style": "none",
                  // "scrollbar-width": "none",
                }
              }
            >
              {services.map((service) => (
                <Card
                  key={service.id}
                  sx={{ mb: 3, bgcolor: "transparent", color: "#fff" }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#fff",
                        border: "2px solid ",
                        mb: "15px",
                        borderImageSource:
                          "linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)",
                        borderImageSlice: 1,
                        padding: "10px",
                        width: "50px",
                        textAlign: "center",
                        borderRadius: "30px",
                        fontWeight: 600,
                      }}
                    >
                      {service.id}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontSize={18}
                      fontWeight="400"
                      my={1}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="secondary.contrastText"
                      fontWeight={400}
                      mt={1}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box>
        <ContactBanner />
      </Box>
    </Box>
  );
};

export default Services;
