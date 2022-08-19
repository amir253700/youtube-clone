import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import React, { useEffect, useState } from "react";
import { languages_list, countries } from "../../../../data";

const KebabSubMenus = () => {
  return <div>KebabSubMenus</div>;
};

const THEME_OPTIONS = ["Use device theme", "Dark theme", "Light theme"];
const LANGUAGE_OPTIONS = languages_list;
const COUNTRIES_OPTIONS = countries;

export const SimilarSubMenus = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [optionsData, setOptionsData] = useState(["Loading..."]);
  const { component, onBackButtonPressed } = props;
  useEffect(() => {
    switch (component) {
      case "theme":
        setOptionsData(THEME_OPTIONS);
        break;
      case "languages":
        setOptionsData(LANGUAGE_OPTIONS);
        break;
      case "countries":
        setOptionsData(COUNTRIES_OPTIONS);
        break;
      default:
        setOptionsData(["Nothing to display"]);
        break;
    }
  }, [component]);

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
  };

  const backIconHandler = () => {
    onBackButtonPressed();
  };

  return (
    <MenuList sx={{ overflow: "scroll" }}>
      <ListItem>
        <ListItemIcon onClick={backIconHandler} sx={{ cursor: "pointer" }}>
          <ArrowBackOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Select your theme</ListItemText>
      </ListItem>
      <Divider />
      {optionsData.map((item, index) => {
        return (
          <MenuItem
            selected={selectedIndex === index}
            onClick={() => {
              handleMenuItemClick(index);
            }}
          >
            <Typography key={item} variant="body2" color="text.secondary">
              {item}
            </Typography>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default KebabSubMenus;
