"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../appContext/AuthContext";
import { LoadingDots } from "./singIn";

// Custom styled components
const GradientButton = styled(Button)(() => ({
  background: "linear-gradient(to right, #4F46E5, #7C3AED)",
  color: "white",
  padding: "10px 0",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(to right, #4338CA, #6D28D9)",
    boxShadow: "0 4px 15px rgba(79, 70, 229, 0.25)",
    transform: "translateY(-1px)",
  },
  "&:disabled": {
    background: "linear-gradient(to right, #9CA3AF, #D1D5DB)",
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: "440px",
  padding: theme.spacing(4),
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
}));

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(to right, #4F46E5, #7C3AED)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  marginBottom: theme.spacing(1),
}));

const SignUp: React.FC = () => {
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await signUp(name, email); // Added password to signUp function call
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to sign up:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        background:
          "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 50%, #F0FDFA 100%)",
      }}
    >
      <StyledCard>
        <CardContent sx={{ padding: 0 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <GradientTypography variant="h4" fontWeight="bold">
              Create Account
            </GradientTypography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Enter your details to get started
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <TextField
                label="Name"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#4F46E5",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4F46E5",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4F46E5",
                  },
                }}
              />

              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#4F46E5",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4F46E5",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4F46E5",
                  },
                }}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#4F46E5",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4F46E5",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4F46E5",
                  },
                }}
              />

              <GradientButton
                disabled={loading}
                type="submit"
                fullWidth
                sx={{ mt: 1 }}
              >
                {loading ? <LoadingDots /> : " Sign Up"}
              </GradientButton>
            </Box>
          </form>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{" "}
              <Link
                href="#"
                sx={{
                  color: "#4F46E5",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                onClick={() => navigate("/signin")}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default SignUp;
