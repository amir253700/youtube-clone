import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import React from "react";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "50%",
  border: "1px solid black",
  display: "flex",
  flexDirection: "row-reverse",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(3),
    width: "30vw",
  },
  "&:focus > #srch": {
    display: "flex",
  },
  "&:active > #srch": {
    display: "flex",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  pointerEvents: "none",
  display: "none",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create(["width", "background-color"]),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
}));

const Search = ({ sx }) => {
  const styledInputRef = React.useRef();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        ...sx,
      }}
    >
      <SearchContainer
        tabIndex={0}
        ref={styledInputRef}
        onClick={() => {
          styledInputRef.current.focus();
        }}
      >
        <StyledInputBase placeholder="Search..." />
        <SearchIconWrapper id="srch">
          <SearchIcon />
        </SearchIconWrapper>
      </SearchContainer>
      <IconButton
        sx={{
          border: "1px solid black",
          borderRadius: "5px",
          transform: "translateX(-15px)",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
