import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileUser } from "../../api/Users";
import { logOutUser } from "../../api/Users";

const SessionContext = createContext();


export const SessionProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    profileUser()
    .then((res) => setProfile(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);
  
  const closeSession = async () => {
    try {
      await logOutUser();
      setProfile(null);
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <SessionContext.Provider value={{ 
      getProfile,
      profile,
      closeSession
    }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }  
  return context;
};


