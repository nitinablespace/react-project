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
import { useAuth } from "../appContext/AuthContext";
import { useNavigate } from "react-router-dom";

// Add gradient constants at the top
const GRADIENT = "linear-gradient(to right, #4F46E5, #7C3AED)";
const HOVER_GRADIENT = "linear-gradient(to right, #4338CA, #6D28D9)";

// Custom styled components
const GradientButton = styled(Button)(() => ({
  background: GRADIENT,
  color: "white",
  padding: "10px 0",
  transition: "all 0.3s ease",
  "&:hover": {
    background: HOVER_GRADIENT,
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

export const LoadingDots = () => (
  <Box sx={{ display: "flex", gap: "4px", justifyContent: "center" }}>
    {[0, 1, 2].map((i) => (
      <Box
        key={i}
        sx={{
          width: "4px",
          height: "8px",
          backgroundColor: "#4F45E4",
          borderRadius: "4px",
          animation: "wave 1s ease-in-out infinite",
          animationDelay: `${i * 0.1}s`,
          "@keyframes wave": {
            "0%, 100%": {
              transform: "scaleY(1)",
            },
            "50%": {
              transform: "scaleY(2)",
            },
          },
        }}
      />
    ))}
  </Box>
);

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await signIn(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to sign in:", error);
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
              Welcome Back
            </GradientTypography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Enter your credentials to access your account
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
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
                type="submit"
                fullWidth
                disabled={loading}
                sx={{ mt: 1 }}
              >
                {loading ? <LoadingDots /> : "Sign In"}
              </GradientButton>
            </Box>
          </form>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{" "}
              <Link
                href="#"
                sx={{
                  color: "#4F46E5",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
}
