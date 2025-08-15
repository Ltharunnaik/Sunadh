import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, CircularProgress, Typography, Box } from "@mui/material";
import PostCard from "./PostCard";
import { apiUrl } from "../../../config/config";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/posts`);
        setPosts(response.data.posts);
        setLoading(false);
      } catch (err) {
        setError("Error fetching posts!");
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

  if (error) {
    return (
      <Typography
        variant="h6"
        color="error"
        sx={{ textAlign: "center", marginTop: 5 }}
      >
        {error}
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {posts?.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
          No posts available.
        </Typography>
      ) : (
        posts?.map((post) => (
          <Grid item xs={12} sm={6} md={12} key={post.id}>
            <PostCard post={post} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default PostList;
