import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Paper,
  CircularProgress,
} from "@mui/material";
import { apiUrl } from "../../../config/config";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/career`);
        setJobs(response.data.careers);
        setLoading(false);
      } catch (error) {
        setError("Error fetching job listings");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: "20px", textAlign: "center" }}>
          <CircularProgress color="secondary" />
        </Paper>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Paper>
      </Container>
    );
  }

  const renderJobDescription = (htmlContent) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.jobId}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {job.jobTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {job.jobLocation || "Not Specified"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Job Type: {job.jobType || "Not Specified"}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.jobDescription && job.jobDescription.length > 100
                    ? renderJobDescription(
                        job.jobDescription.slice(0, 100) + "..."
                      )
                    : renderJobDescription(job.jobDescription)}
                </Typography>

                {/* Displaying all details */}
                <Typography variant="h6" color="text.primary">
                  Job Responsibilities:
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.jobResponsibilities
                    ? renderJobDescription(job.jobResponsibilities)
                    : "No responsibilities listed"}
                </Typography>

                <Typography variant="h6" color="text.primary">
                  Job Requirements:
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.jobRequirements
                    ? renderJobDescription(job.jobRequirements)
                    : "No requirements listed"}
                </Typography>

                <Typography variant="h6" color="text.primary">
                  Preferred Skills:
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.jobPreferredSkills || "No preferred skills listed"}
                </Typography>

                <Typography variant="h6" color="text.primary">
                  Education Requirement:
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.educationRequirement ||
                    "No education requirement listed"}
                </Typography>

                <Typography variant="h6" color="text.primary">
                  Job Experience:
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.jobExperience || "No experience required"}
                </Typography>

                <Typography variant="h6" color="text.primary">
                  Salary:
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.jobSalary ? job.jobSalary : "Salary not disclosed"}
                </Typography>

                <Typography variant="h6" color="text.primary">
                  Posted At:
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {new Date(job.postedAt).toLocaleDateString() ||
                    "Date not available"}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => (window.location.href = `/job/${job.jobId}`)}
                >
                  View Full Job
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobList;
