import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@mui/material";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export const Porfolio = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div> Loading...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <div>
          <center>
            <Avatar
              alt={user.name}
              src={user.picture}
              sx={{ width: 100, height: 100 }}
            />
          </center>
          
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      </>
    )
  );
};
