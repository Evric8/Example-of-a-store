import { Box } from "@mui/material";

export const FlagUK = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="16"
        viewBox="0 0 22 16"
      >
        <defs>
          <clipPath id="flag-clip">
            {/* Одна загальна форма з закругленими кутами */}
            <rect width="22" height="16" rx={4} />
          </clipPath>
        </defs>

        {/* Вміст обрізаємо загальним clipPath */}
        <g clipPath="url(#flag-clip)">
          <rect width="22" height="8" y="0" fill="#005BBB" />
          <rect width="22" height="8" y="8" fill="#FFD500" />
        </g>

        {/* Рамка малюється після вмісту, щоб бути зверху */}
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
