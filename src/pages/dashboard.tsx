import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Line } from "react-chartjs-2";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import Counter from "../components/counter";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useAuth } from "../appContext/AuthContext";
import RichTextEditor from "../components/richTextEditor";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Engagement",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={springProps}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 50%, #F0FDFA 100%)",
          padding: 2,
          width: "90%",
          margin: "auto",
        }}
      >
        <Card
          sx={{
            width: "100%",
            padding: 3,
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#4F46E5"
              gutterBottom
            >
              Dashboard
            </Typography>
            <Box className="flex items-center justify-between w-[70%] m-auto py-2">
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Welcome, {user?.name}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #4F46E5, #7C3AED)",
                  color: "white",
                  mt: 2,
                  "&:hover": {
                    background: "linear-gradient(to right, #4338CA, #6D28D9)",
                  },
                }}
                onClick={() => {
                  signOut();
                  navigate("/signin");
                }}
              >
                Sign Out
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 4,
                gap: 4,
              }}
            >
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Counter
                </Typography>
                <Counter />
              </Box>

              <Box sx={{ flex: 1, textAlign: "center" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  User Profile Trends
                </Typography>
                <Box
                  sx={{ padding: 2, background: "white", borderRadius: "12px" }}
                >
                  <Line
                    data={data}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                      },
                      scales: {
                        x: {
                          display: true,
                          title: {
                            display: true,
                            text: "Months",
                          },
                        },
                        y: {
                          display: true,
                          title: {
                            display: true,
                            text: "Engagement",
                          },
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <RichTextEditor />
          </CardContent>
        </Card>
      </Box>
    </animated.div>
  );
};

export default Dashboard;
