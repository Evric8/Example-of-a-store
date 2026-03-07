import { useState, useEffect, useRef } from "react";

const useLocalStorageCity = (key, initialValue) => {
  const initialRef = useRef(initialValue);

  const [objectCity, setObjectCity] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialRef.current;
    } catch (error) {
      console.warn(`Помилка читання localStorage ключа "${key}":`, error);
      return initialRef.current;
    }
  });

  // 🔧 ось тут — кастомний setter
  const setValue = (value) => {
    try {
      // завжди створюємо новий об’єкт, щоб React побачив зміну
      const valueToStore =
        value instanceof Function ? value(objectCity) : { ...value };

      // console.log(
      //   "[useLocalStorageCity] setValue called, new ref:",
      //   valueToStore
      // );

      setObjectCity(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Помилка запису localStorage "${key}":`, error);
    }
  };

  // опціонально — слухати зміни між вкладками
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setObjectCity(JSON.parse(item));
        }
      } catch (error) {
        console.warn(`Помилка читання localStorage при зміні ключа "${key}"`);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [objectCity, setValue];
};

export default useLocalStorageCity;

// import { useState, useEffect, useRef } from "react";
// //initialValue = {}
// const useLocalStorageCity = (key, initialValue) => {
//   const initialRef = useRef(initialValue);

//   const [objectCity, setObjectCity] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialRef.current;
//     } catch (error) {
//       console.warn(`Помилка читання localStorage ключа "${key}":`, error);
//       return initialRef.current;
//     }
//   });

//   useEffect(() => {
//     try {
//       window.localStorage.setItem(key, JSON.stringify(objectCity));
//     } catch (error) {
//       console.error(`Помилка запису localStorage "${key}":`, error);
//     }
//   }, [key, objectCity]);

//   return [objectCity, setObjectCity];
// };

// export default useLocalStorageCity;
