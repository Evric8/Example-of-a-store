import  { createContext } from "react";

export const HomeContext = createContext();

const HomeContextProvider = ({ children, value }) => {
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;
