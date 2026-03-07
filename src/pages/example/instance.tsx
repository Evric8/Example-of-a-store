//no need
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Instance = <T,>(arg: T) => {
  return (
    <Box>
      <Typography>This Box renders as an HTML section element.</Typography>
    </Box>
  );
};

export default Instance;

/* Супер 👍
ось коротке і зрозуміле пояснення різниці між .ts і .tsx у React-проєктах 👇

🟦 .ts — звичайний TypeScript

Файли з розширенням .ts містять чистий TypeScript-код, без JSX.
Їх використовують для логіки, утиліт, типів, хука чи сервісів.

🔹 Приклад example.ts:

export function sum(a: number, b: number): number {
  return a + b;
}


➡️ Тут нема JSX, лише TypeScript.

🟩 .tsx — TypeScript + JSX (React)

Файли з розширенням .tsx потрібні тоді, коли ти пишеш компоненти React — тобто коли в коді є JSX:

const MyComponent = () => {
  return <div>Hello World</div>;
};


JSX — це суміш JavaScript і HTML, яку браузер напряму не розуміє.
TypeScript має знати, що у файлі є JSX, тому .tsx “вмикає” JSX-підтримку.

🧠 Підсумуємо:
Файл	Використовується для	JSX усередині	Приклад
.ts	типи, функції, логіка	❌ ні	sum.ts
.tsx	React-компоненти	✅ так	Button.tsx  */
