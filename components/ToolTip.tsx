import { Popover, Typography } from "@mui/material";
import React, { ReactNode, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import { backgroundGradient } from "../utils/styleUtils";

interface ToolTipProps {
  content: string;
  children: ReactNode;
}

export function ToolTip(props: ToolTipProps) {
  const { children } = props;

  const [isActive, setIsActive] = React.useState(false);
  const debouncedClick = useDebouncedCallback((isActive: boolean) => {
    setIsActive(isActive);
  }, 100);
  return (
    <div
      onClick={() => {
        debouncedClick(!isActive);
      }}
      onMouseLeave={() => debouncedClick(false)}
    >
      {children}
      <div style={{ pointerEvents: "none" }}>
        <Popover
          style={{
            pointerEvents: "none",
          }}
          id="card"
          open={isActive}
          onClose={() => null}
          // anchorEl={anchorRef}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 150, left: 500 }}
        >
          <Typography
            sx={{
              fontFamily: "SilkScreen",
              p: 2,
              background: `${backgroundGradient}`,
              border: `2px solid #ffebcd`,
              width: "10rem",
              height: "10rem",
              color: "#ffebcd",
            }}
          >
            {props.content}
          </Typography>
        </Popover>
      </div>
    </div>
  );
}
