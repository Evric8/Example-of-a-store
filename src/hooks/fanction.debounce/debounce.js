const debounce = (fn, delay) => {
  let timeId;
  return (...arg) => {
    clearTimeout(timeId);
    timeId = setTimeout(() => fn(...arg), delay);
  };
};
export default debounce;
/*// Обгортаємо debounce в useCallback, щоб він не створювався на кожен рендер
const debounceFetch = useCallback(
  debounce((value) => {
    value?.trim().length > 3 && fetchCities(value);
  }, 500),
  [fetchCities]
);
useEffect(() => {
  debounceFetch(inputValue);
}, [inputValue, debounceFetch]); 

//більше підходить, коли:                          1. Ти хочеш одразу обмежити частоту викликів обробника подій (scroll, resize).                  2. У тебе є різні аргументи в залежності від контексту.                                         3. Використовуєш поза React (наприклад, у чистому JS або Node). */


