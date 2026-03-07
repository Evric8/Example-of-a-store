import {
  Box,
  ClickAwayListener,
  Paper,
  Slide,
  styled,
  Typography,
} from "@mui/material";
import CatalogDrawer from "../drawers/CatalogDrawer";
import { useState } from "react";
import { PrimaryDrawer } from "../../utils/thingsForDrawer";
import { styles } from "../slideCatalog/SlideCataloge";
import LiFromSlideCatalog from "./LiFromSlideCatalog";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "inherit",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "start",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const SlideCatalog = ({ open, toggleDrawer }) => {
  const [hover, setHover] = useState("");
  // console.log(Boolean(hover));
  const handleMouseEnter = (item) => {
    setHover(item);
  };
  const handleMouseLeave = () => {
    setHover("");
  };
  // console.log(data);
  // console.log(hover);

  return (
    <Box>
      {/* Затемнення */}
      <Box sx={styles.boxShadow} />
      {/* Меню каталогу + ClickAway */}
      <ClickAwayListener onClickAway={() => toggleDrawer(false)}>
        <Slide direction="down" timeout={500} in={open}>
          <Box
            sx={styles.boxInSlide}
            // не скидає hover, коли мишка між елементами а скидає, коли вийшли з обох зон
            onMouseLeave={handleMouseLeave}
          >
            <CatalogDrawer
              handleMouseEnter={handleMouseEnter}
              toggleDrawer={toggleDrawer}
            />

            <Box
              sx={{
                ...styles.oneBoxVisible,
                display: hover ? "none" : "block",
              }}
            >
              {PrimaryDrawer.map((i) => (
                <Box key={i.text} sx={styles.boxColumn}>
                  <Item>
                    <Typography sx={styles.typografy}>{i.text}</Typography>
                    <LiFromSlideCatalog
                      category={i.text.toLowerCase()}
                      toggleDrawer={toggleDrawer}
                    />
                  </Item>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: hover ? "block" : "none",
                mt: 1,
                ml: 1,
              }}
            >
              <Item>
                <Typography sx={styles.typografy}>
                  {hover ? hover.charAt(0).toUpperCase() + hover.slice(1) : ""}
                </Typography>
                <LiFromSlideCatalog
                  category={hover}
                  toggleDrawer={toggleDrawer}
                />
              </Item>
            </Box>
          </Box>
        </Slide>
      </ClickAwayListener>
    </Box>
  );
};

export default SlideCatalog;
