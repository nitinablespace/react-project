import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Box, Typography } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Add animation trigger
  const [isAnimating, setIsAnimating] = useState(false);

  const opacity = Math.min(1, Math.abs(count) * 0.1);
  const bgColor = `rgba(0, 0, 255, ${opacity})`;

  const slowStyle = useSpring({
    backgroundColor: bgColor,
    transform: isAnimating ? "scale(1.03)" : "scale(1)",
    config: { tension: 120, friction: 14 },
  });

  const handleClick = (newCount: number) => {
    setCount(newCount);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <animated.div
      style={slowStyle}
      className="h-[400px] flex flex-col justify-center items-center rounded-lg"
    >
      <Typography variant="h2" component="div" gutterBottom>
        {count}
      </Typography>

      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick(count + 1)}
          sx={{ mr: 2 }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleClick(count - 1)}
          sx={{ mr: 2 }}
        >
          Decrement
        </Button>
        <Button variant="contained" onClick={() => setCount(0)}>
          Reset
        </Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
