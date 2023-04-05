import { Stack } from "@mui/system";
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div className="footer h-20">
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <div className="add absolute right-6 translate-y-6">
          <Link to="/Home/CreateCard">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </Stack>
    </div>
  );
}
