import { createContext } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children, value }) => {
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
