import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  Switch,
  Typography,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import React, { useState } from "react";

const RestrictedSubMenu = (props) => {
  const [checked, setChecked] = useState(props.restricted);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.onRestrictionChanged();
  };
  const backIconHandler = () => {
    props.onBackButtonPressed();
  };
  return (
    <MenuList sx={{ overflow: "scroll" }}>
      <ListItem>
        <ListItemIcon onClick={backIconHandler} sx={{ cursor: "pointer" }}>
          <ArrowBackOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Restricted Mode</ListItemText>
      </ListItem>
      <Divider />
      <ListItem sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">
          This helps hide potentially mature videos. No filter is 100% accurate.
          This setting only applies to this browser.
        </Typography>
        <ListItem disableGutters>
          <ListItemText>Activate Restricted Mode</ListItemText>
          <Switch checked={checked} onChange={handleChange} />
        </ListItem>
      </ListItem>
    </MenuList>
  );
};

export default RestrictedSubMenu;
