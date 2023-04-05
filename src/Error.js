import React from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import AnimatedPage from "./transition/AnimatedPage";

export default function Error() {
  return (
    <div>
      <AnimatedPage>
        <Stack
          direction={"column"}
          height={"100vh"}
          alignItems="flex-start"
          justifyContent={"flex-start"}
        >
          <Typography color={"#e60000"} variant="h1">
            404: Not Found
          </Typography>
          <Typography variant="h3">Something went wrong</Typography>
        </Stack>
        <h1>Need to login</h1>
      </AnimatedPage>
    </div>
  );
}
