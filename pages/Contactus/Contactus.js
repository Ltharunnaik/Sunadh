// import {
//   Box,
//   Container,
//   TextField,
//   Button,
//   Grid,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import bgImg from "../../assets/bg.png";
// import ContactBanner from "../../components/ContactBanner";
// import useResponsive from "../../hook/useResponsive";
// import Banner from "../../components/Banner";
// import girdborder from "../../assets/company/gridborder.png";

// const Contactus = () => {
//   const { isSmallScreen } = useResponsive();
//   return (
//     <div>
//       <Box sx={{ backgroundColor: "primary.main" }}>
//         <Box
//           sx={{
//             backgroundColor: "primary.main",
//             backgroundImage: `url(${girdborder})`,
//             backgroundSize: "cover",
//           }}
//         >
//           <Banner
//             title="Contact us"
//             heading=" Let’s Build Something Great Together"
//             caption="Get in touch with our team to explore how our IT solutions can transform your business. We’re here to help!."
//           />
//         </Box>
//         <Container sx={{ py: 5 }}>
//           <Box
//             sx={{
//               backgroundImage: `url(${bgImg})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: "auto",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 width: isSmallScreen ? "95%" : "80%",
//                 backgroundColor: "primary.main",
//                 padding: isSmallScreen ? 2 : "10px 80px",
//               }}
//             >
//               <Typography variant="h4" color="white" textAlign="center" mb={2}>
//                 Get in Touch
//               </Typography>
//               <Typography
//                 variant="body1"
//                 color="gray"
//                 textAlign="center"
//                 mb={4}
//               >
//                 Let’s start a conversation! Fill out the form below, and we’ll
//                 get back to you shortly.
//               </Typography>

//               <Grid container spacing={2}>
//                 <Grid item xs={12} md={6}>
//                   <label style={{ color: "white" }}>
//                     First Name <span style={{ color: "red" }}>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       backgroundColor: "#171717",
//                       borderRadius: "4px",
//                       border: "1px solid gray",
//                       color: "white",
//                       outline: "none",
//                       fontSize: "16px",
//                       height: "40px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <label style={{ color: "white" }}>
//                     Last Name <span style={{ color: "red" }}>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       backgroundColor: "#171717",
//                       borderRadius: "4px",
//                       border: "1px solid gray",
//                       color: "white",
//                       outline: "none",
//                       fontSize: "16px",
//                       height: "40px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <label style={{ color: "white" }}>
//                     Phone Number <span style={{ color: "red" }}>*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       backgroundColor: "#171717",
//                       borderRadius: "4px",
//                       border: "1px solid gray",
//                       color: "white",
//                       outline: "none",
//                       fontSize: "16px",
//                       height: "40px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <label style={{ color: "white" }}>
//                     Work Email <span style={{ color: "red" }}>*</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Work Email"
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       backgroundColor: "#171717",
//                       borderRadius: "4px",
//                       border: "1px solid gray",
//                       color: "white",
//                       outline: "none",
//                       fontSize: "16px",
//                       height: "40px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <label style={{ color: "white" }}>
//                     Company Name <span style={{ color: "red" }}>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Company Name"
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       backgroundColor: "#171717",
//                       borderRadius: "4px",
//                       border: "1px solid gray",
//                       color: "white",
//                       outline: "none",
//                       fontSize: "16px",
//                       height: "40px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <label style={{ color: "white" }}>
//                     Designation <span style={{ color: "red" }}>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Designation"
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       backgroundColor: "#171717",
//                       borderRadius: "4px",
//                       border: "1px solid gray",
//                       color: "white",
//                       outline: "none",
//                       fontSize: "16px",
//                       height: "40px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <label style={{ color: "white" }}>
//                     About the Project <span style={{ color: "red" }}>*</span>
//                   </label>
//                   <textarea
//                     placeholder="About the Project"
//                     required
//                     rows={4}
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       backgroundColor: "#171717",
//                       borderRadius: "4px",
//                       border: "1px solid gray",
//                       color: "white",
//                       outline: "none",
//                       fontSize: "16px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} textAlign="center">
//                   <Button
//                     variant="contained"
//                     sx={{
//                       background:
//                         "linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)",
//                       mt: 3,
//                       color: "white",
//                       fontSize: "16px",
//                       padding: "10px 20px",
//                       borderRadius: "25px",
//                       textTransform: "none",
//                     }}
//                   >
//                     Get in Touch
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>

//         {/* <ContactBanner /> */}
//       </Box>
//     </div>
//   );
// };

// export default Contactus;



// ---------------------------------------------------------------------------------------------------------------


import {
  Box,
  Container,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import bgImg from "../../assets/bg.png";
import useResponsive from "../../hook/useResponsive";
import Banner from "../../components/Banner";
import girdborder from "../../assets/company/gridborder.png";

const Contactus = () => {
  const { isSmallScreen } = useResponsive();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    designation: "",
    projectDetails: "",
  });

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const serviceId = "service_g30fl4m";
    const templateId = "template_zlcry2k"; 
    const publicKey = "O-AchOYLLbJxuBNdV"; 

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setMessage("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        designation: "",
        projectDetails: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
      setMessage("Failed to send message. Please try again.");
    }
  
    setIsSubmitting(false);
  };

  return (
    <div>
      <Box sx={{ backgroundColor: "primary.main" }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            backgroundImage: `url(${girdborder})`,
            backgroundSize: "cover",
          }}
        >
          <Banner
            title="Contact us"
            heading=" Let’s Build Something Great Together"
            caption="Get in touch with our team to explore how our IT solutions can transform your business. We’re here to help!"
          />
        </Box>
        <Container sx={{ py: 5 }}>
          <Box
            sx={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: isSmallScreen ? "95%" : "80%",
                backgroundColor: "primary.main",
                padding: isSmallScreen ? 2 : "10px 80px",
              }}
            >
              <Typography variant="h4" color="white" textAlign="center" mb={2}>
                Get in Touch
              </Typography>
              <Typography variant="body1" color="gray" textAlign="center" mb={4}>
                Let’s start a conversation! Fill out the form below, and we’ll
                get back to you shortly.
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {[
                    { label: "First Name", name: "firstName" },
                    { label: "Last Name", name: "lastName" },
                    { label: "Phone Number", name: "phoneNumber", type: "tel" },
                    { label: "Work Email", name: "email", type: "email" },
                    { label: "Company Name", name: "companyName" },
                    { label: "Designation", name: "designation" },
                  ].map((field, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <label style={{ color: "white" }}>
                        {field.label} <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        style={{
                          width: "100%",
                          padding: "10px",
                          backgroundColor: "#171717",
                          borderRadius: "4px",
                          border: "1px solid gray",
                          color: "white",
                          outline: "none",
                          fontSize: "16px",
                          height: "40px",
                          marginTop: "10px",
                        }}
                      />
                    </Grid>
                  ))}

                  <Grid item xs={12}>
                    <label style={{ color: "white" }}>
                      About the Project <span style={{ color: "red" }}>*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      required
                      rows={4}
                      style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#171717",
                        borderRadius: "4px",
                        border: "1px solid gray",
                        color: "white",
                        outline: "none",
                        fontSize: "16px",
                        marginTop: "10px",
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{
                        background:
                          "linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)",
                        mt: 3,
                        color: "white",
                        fontSize: "16px",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        textTransform: "none",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Get in Touch"}
                    </Button>
                  </Grid>

                  {message && (
                    <Grid item xs={12} textAlign="center">
                      <Typography variant="body1" color="white">
                        {message}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Contactus;
