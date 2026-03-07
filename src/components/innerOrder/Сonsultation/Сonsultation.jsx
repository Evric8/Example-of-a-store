import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./StylesConsultation";

const Consultation = () => {
  const [checked, setChecked] = useState(true);
  const [showComment, setShowComment] = useState(false);
 
  const handleChange = () => {
  setChecked(prev => !prev);
};
  const handleTouch = () => {
    setShowComment(!showComment);
  };
  return (
    <Box component="section" sx={styles.section}>
      <FormControlLabel
        sx={styles.FormControlLabel}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            sx={styles.Checkbox}
          />
        }
        label="Мені можна не передзвонювати для підтвердження замовлення"
      />

      {checked && (
        <Typography sx={styles.Typography}>
          Якщо вам все ж потрібна консультація по замовленню - зніміть галочку
        </Typography>
      )}

      <Typography onClick={handleTouch} sx={styles.advice}>
        {showComment
          ? "Приховати коментар до замовлення"
          : "Додати коментар до замовлення"}
      </Typography>

      {showComment && (
        <TextField
          placeholder="Текст"
          rows={4}
          multiline
          sx={styles.TextField}
        />
      )}
    </Box>
  );
};

export default Consultation;
