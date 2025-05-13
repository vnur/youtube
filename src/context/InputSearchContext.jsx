import { Children, createContext, useContext, useState } from "react";

//create the context
export const InputSearchContext = createContext();

//crate the context Provider
export const InputSearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState(false);
  return (
    <InputSearchContext.Provider
      value={{ searchQuery, setSearchQuery, searchList, setSearchList }}
    >
      {children}
    </InputSearchContext.Provider>
  );
};


//create the custom context
export const useInputSearch = ()=>{
    return useContext(InputSearchContext)
}