import React, { createContext, useContext, useState } from 'react';
const DataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
    const [formSubmit, setFormSubmit] = useState(null);

    return (
        <DataContext.Provider 
          value={{ 
            formSubmit,
            setFormSubmit
          }}
        >
          {children}
        </DataContext.Provider>
      );
}

export const useData = () => {
    return useContext(DataContext);
};