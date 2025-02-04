import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

interface UserData {
  name: string;
  address: string;
  email: string;
  phone: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isDirty, setIsDirty] = useState<boolean>(false);

  // Listen for beforeunload to warn the user if there are unsaved changes.
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        // Chrome requires returnValue to be set.
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setIsDirty(true);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a unique user ID
    const userId = uuidv4();

    // Combine user ID with the form data
    const dataToSave = { id: userId, ...formData };

    // Retrieve any previously saved users from localStorage
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Save the new user data
    savedUsers.push(dataToSave);
    localStorage.setItem("users", JSON.stringify(savedUsers));

    // Reset the form state and dirty flag
    setFormData({
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    setIsDirty(false);
    alert("User data saved successfully!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" component="h1" align="center">
        User Data Form
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <TextField
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default UserForm;
