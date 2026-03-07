import { Box } from "@mui/material";

const LineFlags = ({
  width = 22,
  height = 16,
  colors = ["#005BBB", "#FFD500"], // масив кольорів
  orientation = "horizontal", // "horizontal" | "vertical"
  borderRadius = 2, // закруглення кутів (px)
  borderColor = "#ccc", // колір рамки
  borderWidth = 1, // товщина рамки
}) => {
  const count = colors.length;
  const id = `clip-${Math.random().toString(36).substr(2, 9)}`; // унікальний id для clipPath

  return (
    <Box
      sx={{
        display: "inline-block",
        lineHeight: 0, // щоб не було відступів
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        {/* Обрізання по закругленим кутам */}
        <defs>
          <clipPath id={id}>
            <rect
              width={width}
              height={height}
              rx={borderRadius}
              ry={borderRadius}
            />
          </clipPath>
        </defs>

        {/* Фон прапора */}
        <g clipPath={`url(#${id})`}>
          {orientation === "horizontal"
            ? colors.map((color, i) => (
                <rect
                  key={i}
                  width={width}
                  height={height / count}
                  y={(height / count) * i}
                  fill={color}
                />
              ))
            : colors.map((color, i) => (
                <rect
                  key={i}
                  width={width / count}
                  height={height}
                  x={(width / count) * i}
                  fill={color}
                />
              ))}
        </g>

        {/* Рамка */}
        {borderWidth > 0 && (
          <rect
            width={width}
            height={height}
            rx={borderRadius}
            ry={borderRadius}
            fill="none"
            stroke={borderColor}
            strokeWidth={borderWidth}
          />
        )}
      </svg>
    </Box>
  );
};

export default LineFlags;

// Україна 🇺🇦 з рамкою
{
  /* <Flag 
  colors={["#005BBB", "#FFD500"]} 
  borderRadius={4} 
  borderColor="#000" 
  borderWidth={1}
/> */
}

// Франція 🇫🇷 вертикально з закругленими кутами
{
  /* <Flag 
  colors={["#0055A4", "#FFFFFF", "#EF4135"]}
  orientation="vertical"
  borderRadius={6}
/> */
}

// Німеччина 🇩🇪 без рамки
{
  /* <Flag colors={["#000000", "#DD0000", "#FFCE00"]} borderWidth={0} /> */
}

