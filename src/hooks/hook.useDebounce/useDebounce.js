import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
/*// Як підключати:
import { useDebounce } from "../../../hooks/";
// Затримуємо оновлення значення
const debouncedInputValue = useDebounce(inputValue, 500);
// Викликаємо API тільки після debounce
useEffect(() => {
  if (debouncedInputValue.trim().length >= 3) {
    fetchCities(debouncedInputValue);
  }
}, [debouncedInputValue, fetchCities]); 
*/

/* import { useDebounce } from "use-debounce"; // npm i use-debounce --save
const debounceValue = useDebounce(inputValue, 500); */
