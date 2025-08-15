// import React from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { apiUrl } from "../../../config/config";

const AddJobPost = () => {
  const [formData, setFormData] = useState({
    jobId: "",
    jobTitle: "",
    jobDescription: "",
    jobRequirements: "",
    jobPreferredSkills: "",
    jobResponsibilities: "",
    jobType: "",
    jobLocation: "",
    jobExperience: "",
    jobPostedByEmail: "",
    educationRequirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  const handleQuillChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/career`, formData);
      alert("Job posted successfully!");
    } catch (error) {
      console.error("There was an error posting the job:", error);
      alert("Failed to post job!");
    }
  };

  return (
    <>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Post a New Job
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Job ID"
                  name="jobId"
                  value={formData.jobId}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Location"
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Job Type"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Experience"
                  name="jobExperience"
                  value={formData.jobExperience}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Email"
                  name="jobPostedByEmail"
                  value={formData.jobPostedByEmail}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Education Requirement"
                  name="educationRequirement"
                  value={formData.educationRequirement}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Preferred Skills"
                  name="jobPreferredSkills"
                  value={formData.jobPreferredSkills}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Job Requirements"
                  name="jobRequirements"
                  value={formData.jobRequirements}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Job Description
                </Typography>
                <ReactQuill
                  value={formData.jobDescription}
                  onChange={(value) =>
                    handleQuillChange("jobDescription", value)
                  }
                  placeholder="Job Description"
                  style={{ height: "200px", marginBottom: "20px" }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Job Responsibilities
                </Typography>
                <ReactQuill
                  value={formData.jobResponsibilities}
                  onChange={(value) =>
                    handleQuillChange("jobResponsibilities", value)
                  }
                  placeholder="Job Responsibilities"
                  style={{ height: "200px", marginBottom: "20px" }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Post Job
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default AddJobPost;
