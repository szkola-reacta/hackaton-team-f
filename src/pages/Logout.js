import React, { useState } from "react";
import { Button } from "@material-ui/core";
function Logout() {
  const [user] = useState({ email:"", password: "" });
  return (
      <div>
        Welcome {user.email}
        <Button
        onClick={Logout}
        variant="outlined"
        color="default"
      >
     Logout
      </Button>
      </div>

  );
}

export default Logout;
