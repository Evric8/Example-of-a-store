import { useEffect, useState, useCallback } from "react";

// Дублювання initialValue в кількох місцях, У тебе і в useState, і в storage listener, і в clearKey. Якщо initialValue буде функцією чи важким об’єктом — це може створити проблеми. Можна подумати про useRef для збереження стабільного initialValue. useRef створює об’єкт { current: ... }, який живе весь час існування компонента і не змінюється між рендерами. Тобто initialRef.current завжди буде містити твоє початкове значення, яке ти передав у хук при виклику. Це краще, ніж напряму використовувати initialValue у залежностях, бо якщо передати новий об’єкт чи масив → React вважатиме його новим значенням при кожному рендері. А ref дає стабільний вказівник.

const useLocalStorageGlobal = (key, initialValue) => {
  // зберігаємо стабільне initialValue
  const initialRef = useRef(initialValue);

  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialRef.current;
    } catch (error) {
      console.warn("Помилка читання localStorage:", error);
      // Якщо localStorage зіпсований (наприклад, користувач руками записав "not-json"), JSON.parse зловить помилку і ти повернеш initialRef.current. Це ок, але можна ще й чистити некоректне значення:
      localStorage.removeItem(key);
      return initialRef.current;
    }
  });

  // Запис у localStorage при зміні value
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Помилка запису localStorage:", error);
    }
  }, [key, value]);

  // Слухання змін у localStorage з інших вкладок
  useEffect(() => {
    const handleSavedValue = (event) => {
      if (event.key === key)
        try {
          setValue(
            event.newValue ? JSON.parse(event.newValue) : initialRef.current
          );
        } catch (error) {
          console.error("Помилка синхронізації localStorage:", error);
        }
    };

    // Додаємо слухача подій storage до window. Тепер, якщо у будь-якій іншій вкладці викличуть localStorage.setItem(...), ця подія прилетить і сюди.
    window.addEventListener("storage", handleSavedValue);

    // При демонтуванні компонента (або зміні key чи initialValue) ми знімаємо слухач. Це важливо, щоб не було "витоків пам’яті" і не лишалося зайвих підписок.
    return () => window.removeEventListener("storage", handleSavedValue);

    //Залежності: якщо зміниться key (наприклад, з "basket" на "city") або initialValue, то цей ефект відпишеться від старого ключа і підпишеться заново.
  }, [key]);

  // --- methods for array ---
  const addItem = useCallback((item) => {
    setValue((prev) => (Array.isArray(prev) ? [...prev, item] : prev));
  }, []);

  // useCallback дає стабільну функцію, яка міняється лише коли змінюються залежності. без нього кожен рендер створює нову функцію (addItem, removeItem, update). якщо ти передаєш їх у дочірні компоненти як пропси — вони будуть кожен раз вважати, що пропс змінився → зайві ререндери.
  const removeItemByValue = useCallback((itemValue) => {
    setValue((prev) =>
      Array.isArray(prev) ? prev.filter((el) => el !== itemValue) : prev
    );
  }, []);

  const removeItemByIndex = useCallback((index) => {
    setValue((prev) =>
      Array.isArray(prev) ? prev.filter((_, i) => i !== index) : prev
    );
  }, []);

  // --- methods for object ---
  // update залежить від value. Зараз твоя функція update кожного разу створюється заново при зміні value, бо вона є в залежностях:
  // const update = useCallback(
  //   (patch) => {
  //     if (
  //       value !== null &&
  //       typeof value === "object" &&
  //       !Array.isArray(value)
  //     ) {
  //       setValue((prev) => ({ ...prev, ...patch }));
  //     } else {
  //       console.warn(`update доступний тільки для об'єктів `);
  //     }
  //   },
  //   [value]
  // );
  //Насправді можна винести перевірку всередину setValue, тоді залежність від value не потрібна:. Плюс: update буде стабільною функцією завжди.
  // const update = useCallback((keyObject, innerValue) => {
  //   setValue((prev) => {
  //     if (prev !== null && typeof prev === "object" && !Array.isArray(prev)) {
  //       if (typeof keyObject === "object") return { ...prev, ...keyObject };
  //       if (typeof keyObject === "string")
  //         return { ...prev, [keyObject]: innerValue };
  //     }
  //     return prev;
  //   });
  // }, []);

  const patchObject = useCallback((patch) => {
    setValue((prev) =>
      prev !== null && typeof prev === "object" && !Array.isArray(prev)
        ? { ...prev, ...patch }
        : prev
    );
  }, []);

  const setFieldObject = useCallback((keyField, valueField) => {
    setValue((prev) => {
      return prev !== null && typeof prev === "object" && !Array.isArray(prev)
        ? { ...prev, [keyField]: valueField }
        : prev;
    });
  }, []);

  // видалення властивості з об'єкта
  const removeFieldObject = useCallback((keyField) => {
    setValue((prev) => {
      if (prev !== null && typeof prev === "object" && !Array.isArray(prev)) {
        const { [keyField]: _, ...rest } = prev;
        return rest;
      }
      return prev;
    });
  }, []);

  // повна заміна значення
  const replaceValue = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  // --- Системні методи ---
  const clearStorageKey = useCallback(() => {
    window.localStorage.removeItem(key);
    setValue(initialRef.current);
  }, [key]);

  // Коли викликається reset(), ми просто ставимо value у його початковий стан. Це працює так само, якби ми перезапустили хук заново, але без перезавантаження компонента. Ми обгорнули у useCallback з порожнім масивом залежностей → значить, функція reset буде створена тільки один раз і не буде мінятись при кожному рендері. Завдяки цьому, якщо reset передати в дочірній компонент → він не буде вважати, що проп змінився при кожному апдейті. ---Коротко useRef — це кишенька для мутабельних даних, що переживають рендери і не тригерять оновлення екрану. Для DOM — ref={elRef}, для службових речей — ref.current = щось. Для UI — тримай у state.
  const resetToInitialValue = useCallback(() => {
    setValue(initialRef.current);
  }, []);

  return {
    value,
    setValue,
    addItem,
    removeItemByValue,
    removeItemByIndex,
    // update,
    patchObject,
    setFieldObject,
    removeFieldObject,
    replaceValue,
    clearStorageKey,
    resetToInitialValue,
  };
};

export default useLocalStorageGlobal;
