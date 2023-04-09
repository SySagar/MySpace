import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Stack, TextField, TextareaAutosize } from "@mui/material";

export default function FlipCard({ front, back }) {
  const [flip, setFlip] = useState(false);
  return (
    <div>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <Stack
          className="clay-body"
          sx={{
            width: "350px",
            height: "250px",
            fontSize: "20px",
            color: "green",
            textAlign: "center",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <TextareaAutosize maxRows={10} value={front} style={{ width: 200 }} />

          <Button
            sx={{
              position: "absolute",
              bottom: "0px",
              width: "35px",
              background: "#f5d9fa",
              borderRadius: "5px",
              justifyContent: "center",
              marginBottom: "20px",
            }}
            onClick={() => setFlip(!flip)}
          >
            <VisibilityIcon sx={{ scale: "1.5", color: "#ff471a" }} />
          </Button>
        </Stack>

        <Stack
          className="clay-body"
          sx={{
            width: "350px",
            height: "250px",
            fontSize: "20px",
            color: "blue",
            borderRadius: "4px",
            textAlign: "center",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <TextareaAutosize maxRows={10} value={back} style={{ width: 200 }} />
          <br />
          <Button
            sx={{
              position: "absolute",
              bottom: "0px",
              width: "35px",
              background: "#f5d9fa",
              borderRadius: "5px",
              justifyContent: "center",
              marginBottom: "20px",
            }}
            onClick={() => setFlip(!flip)}
          >
            <ArrowCircleRightTwoToneIcon
              sx={{ scale: "1.5", color: "#3366FF" }}
            />
          </Button>
        </Stack>
      </ReactCardFlip>
    </div>
  );
}
