import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the CSS for the snow theme
import { Box, Typography } from "@mui/material";

const RichTextEditor: React.FC = () => {
  // State to hold the editor's content.
  const [editorContent, setEditorContent] = useState<string>("");

  // Load persisted data from localStorage when the component mounts.
  useEffect(() => {
    const savedContent = localStorage.getItem("richTextData");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  // Handle changes in the editor.
  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    // Persist the updated content to localStorage.
    localStorage.setItem("richTextData", content);
  };

  // Define the toolbar options with formatting tools.
  const modules = {
    toolbar: [
      // Header formatting
      [{ header: [1, 2, false] }],
      // Inline formatting options
      ["bold", "italic", "underline"],
      // List options
      [{ list: "ordered" }, { list: "bullet" }],
      // Option to remove formatting
      ["clean"],
    ],
  };

  // Specify the formats that the editor supports.
  const formats = ["header", "bold", "italic", "underline", "list", "bullet"];

  return (
    <Box sx={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Rich Text Editor
      </Typography>
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        theme="snow" // You can also choose the "bubble" theme if preferred
      />
    </Box>
  );
};

export default RichTextEditor;
