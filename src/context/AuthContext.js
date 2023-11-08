import React, { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const user = {
    id: '125536263',
    name: 'abhishek',
    email: 'abhishekoza11@gmail.com',
  };

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export const useAuth = () =>  useContext(AuthContext);
  