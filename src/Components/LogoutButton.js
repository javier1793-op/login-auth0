import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function Logoutbutton() {
  
  const {logout}= useAuth0();

  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button variant="outlined" color="error"
        onClick={()=> logout({returnTo:window.location.origin})}>
          
          Logout
        </Button>
      </div>
    </Box>
  );
}
