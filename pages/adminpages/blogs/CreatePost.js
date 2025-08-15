import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { apiUrl } from "../../../config/config";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    authorCaption: "",
    category: "",
    scheduledAt: "",
  });
  const [content, setContent] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBannerImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const imageHandler = async (editor) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.click();

    fileInput.onchange = async () => {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(`${apiUrl}/upload`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const base64Image = response.data.base64;
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", base64Image);
      } catch (error) {
        console.error("Error uploading image", error);
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(post).forEach((key) => formData.append(key, post[key]));
    formData.append("content", content);
    if (bannerImage) formData.append("file", bannerImage);

    await axios.post(`${apiUrl}/posts`, formData);
    alert("Post Created");
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Create a Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />
        <TextField
          fullWidth
          label="Author"
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          required
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          label="Author Caption"
          onChange={(e) => setPost({ ...post, authorCaption: e.target.value })}
          sx={{ mt: 2 }}
        />
        {/* <TextField
          fullWidth
          label="Category"
          onChange={(e) => setPost({ ...post, category: e.target.value })}
          required
          sx={{ mt: 2 }}
        /> */}
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={post.category}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
            required
            label="Category"
          >
            <MenuItem value="fintech">Fintech </MenuItem>
            <MenuItem value="healthcare">Healthcare</MenuItem>
            <MenuItem value="software">Software and IT</MenuItem>
            <MenuItem value="automobile">Automobile</MenuItem>
            <MenuItem value="realestate">Real Estate </MenuItem>
            <MenuItem value="iot">IoT</MenuItem>
            <MenuItem value="energyandutilities">Energy and utilities</MenuItem>
            <MenuItem value="other">other</MenuItem>
            {/* Add more categories as needed */}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Schedule Date & Time"
          type="datetime-local"
          value={post.scheduledAt}
          onChange={(e) => setPost({ ...post, scheduledAt: e.target.value })}
          sx={{ mt: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <input
          type="file"
          onChange={handleImageChange}
          name="file"
          style={{ marginTop: "16px" }}
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ width: "100%", marginTop: "10px" }}
          />
        )}
        <ReactQuill
          value={content}
          onChange={setContent}
          style={{ marginTop: "16px" }}
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ align: [] }],
              ["link", "image"],
            ],
          }}
          formats={[
            "header",
            "font",
            "list",
            "bullet",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "align",
            "link",
            "image",
          ]}
          onChangeSelection={(range, source, editor) => {
            if (source === "toolbar" && editor.getFormat().image) {
              imageHandler(editor);
            }
          }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 3 }}
        >
          Create Post
        </Button>
      </form>
    </Box>
  );
};

export default CreatePost;
