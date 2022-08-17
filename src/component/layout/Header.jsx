import {
  AppBar,
  Box,
  Toolbar,
  Button,
  InputBase,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled, alpha, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import Search from "../UI/Search";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Header = () => {
  const theme = useTheme();
  const mobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchIconClicked, setSearchIconClicked] = useState(false);

  return (
    <Box>
      <AppBar sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {mobileMode && searchIconClicked ? (
            <IconButton
              onClick={() => {
                setSearchIconClicked((prev) => !prev);
              }}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
          ) : (
            <Box
              sx={{
                display: {
                  xs: searchIconClicked ? "none" : "flex",
                  sm: "flex",
                },
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&>:first-child": { color: "red" },
                  "&:hover": { backgroundColor: "inherit" },
                }}
              >
                <YouTubeIcon />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "fontWeightBold",
                    fontFamily: "Arial",
                    letterSpacing: "-0.1rem",
                  }}
                >
                  YouTube
                </Typography>
              </IconButton>
            </Box>
          )}
          <Box sx={{ flex: "0.5" }}>
            {(mobileMode && searchIconClicked) || !mobileMode ? (
              <Search sx={{ color: "black" }} />
            ) : null}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {mobileMode && !searchIconClicked && (
              <IconButton
                onClick={() => {
                  setSearchIconClicked((prev) => !prev);
                }}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <SearchIcon />
              </IconButton>
            )}
            <IconButton sx={{ border: "none" }}>
              <MoreVertIcon />
            </IconButton>
            <Button
              color="primary"
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                flexShrink: "0",
              }}
            >
              <AccountCircleOutlinedIcon />
              <Typography
                variant="button"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                Sign In
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
