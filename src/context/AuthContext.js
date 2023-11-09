import React, { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const user = {
    id: '12',
    name: '',
    email: '',
  };

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export const useAuth = () =>  useContext(AuthContext);
  