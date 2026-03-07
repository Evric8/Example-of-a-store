import { Box } from "@mui/material";

const FlagPl = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="16"
        viewBox="0 0 22 16"
      >
        {/* Верхня половина (синя) */}
        <rect width="22" height="8" y="0" fill="#ffffffff" />
        {/* Нижня половина (жовта) */}
        <rect width="22" height="8" y="8" fill="#ff0000ff" />
        <rect
          width="22"
          height="16"
          // rx={4}
          fill="none"
          stroke="#ccc"
          strokeWidth={2}
        />
      </svg>
    </Box>
  );
};

export default FlagPl;
