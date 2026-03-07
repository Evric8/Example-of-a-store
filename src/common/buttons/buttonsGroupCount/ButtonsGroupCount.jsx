import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { styles } from "./StylesButtonsGroupCount";
import {
  decrementBasketId,
  incrementBasketId,
  selectItemById,
  selectItemCount,
} from "../../../features/Slice/CountInBasketSlice";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasketSingle } from "../../../utils/math";

const ButtonsGroupCount = ({ item }) => {
  // console.log(item);
  // console.log(item.count);
  // const countSelector = useSelector((state) => selectItemCount(state, item.id));
  // console.log(countSelector);

  //+
  const single = useSelector((state) => selectItemById(state, item.id));
  // console.log(single);
  const count = single?.count;
  // console.log(single?.count);
  const sumSingle = calculateBasketSingle(single);
  // console.log(sumSingle);

  const dispatch = useDispatch();

  const handleMinusCount = (id) => {
    dispatch(decrementBasketId(id));
  };

  const handleAddCount = (id) => {
    dispatch(incrementBasketId(id));
  };

  return (
    <Box sx={styles.boxBottons}>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => handleMinusCount(item.id)}>
          <RemoveCircleOutlineIcon
            sx={{ color: count === 1 ? "var(--warning-color)" : "var(--white-color)" }}
          />
        </Button>
        <Button translate="no">{count}</Button>
        <Button onClick={() => handleAddCount(item.id)}>
          <AddCircleIcon />
        </Button>
      </ButtonGroup>

      <Typography variant="h5" sx={styles.price} translate='no'>
        {/* {item.price} */}
        {sumSingle}
        <AttachMoneyIcon sx={styles.attachMoneyIcon} />
      </Typography>
    </Box>
  );
};

export default ButtonsGroupCount;
