import AOS from "aos";
import "aos/dist/aos.css";
import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Box,
  CircularProgress,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoutes from "./components/ProtectedRoutes"; // Import ProtectedRoute

import Insights from "./pages/Insights/Insights";
import Contactus from "./pages/Contactus/Contactus";
import Article from "./pages/Blog/Article";
import Commonpage from "./pages/Industries/Commonpage";
import Careers from "./pages/Carrers/Careers";
import AdminMain from "./pages/adminpages/AdminMain";
import JobList from "./pages/adminpages/Jobs/JobList";
import AddJobPost from "./pages/adminpages/Jobs/AddJobPost";
import CreatePost from "./pages/adminpages/blogs/CreatePost";
import PostList from "./pages/adminpages/blogs/PostList";
import UpdatePost from "./pages/adminpages/blogs/UpdatePost";
import Login from "./components/Login";
const Home = lazy(() => import("./pages/Home/Home"));
const Company = lazy(() => import("./pages/Company/Company"));
const Industries = lazy(() => import("./pages/Industries/Industries"));
const Services = lazy(() => import("./pages/Services/Services"));
const SolutionHub = lazy(() => import("./pages/Solution/SolutionHub"));

const theme = createTheme({
  palette: {
    success: {
      main: "#4BCE97",
      background: "#EDFAF5",
    },
    primary: {
      main: "#0D0D0D",
      contrastText: "#D8D8D8",
      submain: "#2C2C2C",
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#C2C2C2",
    },
    footer: {
      main: "#BCBCBC",
    },
    error: {
      main: "#FF0000",
    },
    accent: {
      // main: "linear-gradient(90deg, #FFAE00 0%, #FE0056 33%, #E0007A 66%, #8B2CCB 100%)",
      background: "#44537126",
    },
  },
  typography: {
    fontFamily: "Be Vietnam Pro",
    fontSize: 20,
    fontWeightBold: 700,
    color: "#D8D8D8",
    h1: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 700,
      fontSize: 60,
    },
    h2: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 600,
      fontSize: 58,
    },
    h3: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 500,
      fontSize: 50,
    },
    h4: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 400,
      fontSize: 42,
      lineHeight: "23.12px",
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 300,
      fontSize: 40,
      lineHeight: "26.67px",
    },
    h6: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 200,
      fontSize: 32,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "24.5px",
      letterSpacing: "0.02857em",
      textTransform: "none",
    },
    caption: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "19.92px",
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: "Be Vietnam Pro",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "21.33px",
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});



const App = () => {
  useEffect(() => {
    AOS.init({

      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop/>
      <div>
        {/* Render Navbar only for non-admin routes */}

        <Suspense
          fallback={
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh"
              bgcolor="black"
            >
              <CircularProgress color="secondary" />
            </Box>
          }
        >
          {window.location.pathname.includes("/admin") ? null : <Navbar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutionhub" element={<SolutionHub />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/industries/article/:id" element={<Article />} />
            <Route path="/industries/sector" element={<Commonpage />} />
            <Route path="/careers" element={<Careers />} />

            {/* Admin routes protected */}
            <Route
              path="/admin"
              element={
                <ProtectedRoutes>
                  <AdminMain />
                </ProtectedRoutes>
              }
            >
              <Route
                path="joblist"
                element={
                  <ProtectedRoutes>
                    <JobList />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="jobpost"
                element={
                  <ProtectedRoutes>
                    <AddJobPost />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="bloglist"
                element={
                  <ProtectedRoutes>
                    <PostList />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="blogpost"
                element={
                  <ProtectedRoutes>
                    <CreatePost />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="blogupdate"
                element={
                  <ProtectedRoutes>
                    <UpdatePost />
                  </ProtectedRoutes>
                }
              />
            </Route>
            {/* Add Login Route */}
            <Route path="/login" element={<Login />} />
          </Routes>
          {window.location.pathname.includes("/admin") ? null : <Footer />}
        </Suspense>

        {/* Render Footer only for non-admin routes */}
      </div>
    </ThemeProvider>
  );
};

export default App;




const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);

  return null;
};

 ;