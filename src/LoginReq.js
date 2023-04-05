import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function LoginReq() {
  return (
    <div className="loginReq">
      <Stack
        direction={"column"}
        border={2}
        height={"100vh"}
        alignItems="flex-start"
        justifyContent={"flex-start"}
      >
        <Typography color={"#e60000"} variant="h1">
          401: Unauthorised
        </Typography>
        <Typography variant="h3">You are currently not logged in</Typography>
      </Stack>
    </div>
  );
}
