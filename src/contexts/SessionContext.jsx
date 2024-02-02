import React, { createContext, useContext, useEffect, useState } from "react";
import { profileUser } from "../../api/Users";

const SessionContext = createContext();


export const SessionProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  const getProfile = () => {
    profileUser()
    .then((res) => setProfile(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);
  
    return (
      <SessionContext.Provider value={{ 
        getProfile,
        profile
      }}>
        {children}
      </SessionContext.Provider>
    );
  };

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
      throw new Error(err);
    }
    return context;
  };