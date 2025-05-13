import { createContext, useContext, useState } from "react";

//! create the context
export const SidebarToggleContext = createContext();

//! create the context provider
export const SidebarToggleContextProvider = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const setToggleSideBarFun = () => {
    setToggleSideBar(!toggleSideBar);
  };

  return (
    <SidebarToggleContext.Provider
      value={{ toggleSideBar, setToggleSideBarFun }}
    >
      {children}
    </SidebarToggleContext.Provider>
  );
};

//! create the context custom hook
export const useSidebarToggleContext = () => {
  return useContext(SidebarToggleContext);
};
