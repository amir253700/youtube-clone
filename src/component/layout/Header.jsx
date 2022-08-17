import {
  AppBar,
  Box,
  Toolbar,
  Button,
  InputBase,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import React from "react";
import Search from "../UI/Search";

const Header = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flex: "0.7" }}>
            <Search sx={{ color: "black" }} />
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
