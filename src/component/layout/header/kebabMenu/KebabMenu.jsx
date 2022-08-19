import React, { useEffect, useRef } from "react";

import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

import { Fade, Menu, MenuList } from "@mui/material";
import { SimilarSubMenus } from "./SimilarSubMenus";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const KebabMenu = ({ openMenu, anchorEl, onClose }) => {
  const [open, setOpen] = React.useState(false);
  const [component, setComponent] = React.useState(null);
  const [anchorsEl, setAnchorSEl] = React.useState(null);

  const handleClick = (component) => {
    setComponent(component);
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorSEl(null);
    setOpen(!open);
  };

  const slideProps = {
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: { enter: 225, exit: 195 },
  };

  const ReturnToMainHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Menu
      open={openMenu}
      anchorEl={anchorEl}
      onClose={onClose}
      PaperProps={{ sx: { width: "350px" } }}
      TransitionComponent={Fade}
      TransitionProps={slideProps}
    >
      {open ? (
        <SimilarSubMenus
          component={component}
          onBackButtonPressed={ReturnToMainHandler}
        />
      ) : (
        <MenuList>
          <MenuItem id="kharpedar">
            <ListItemIcon>
              <SafetyCheckOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Your data in YouTube</ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem onClick={() => handleClick("theme")}>
            <ListItemIcon>
              <DarkModeOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Appearance:Device theme</ListItemText>
            <KeyboardArrowRightOutlinedIcon />
          </MenuItem>

          <MenuItem onClick={() => handleClick("languages")}>
            <ListItemIcon>
              <LanguageOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Language:English</ListItemText>
            <KeyboardArrowRightOutlinedIcon />
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <AdminPanelSettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Restricted Mode:Off</ListItemText>
            <KeyboardArrowRightOutlinedIcon />
          </MenuItem>

          <MenuItem onClick={() => handleClick("countries")}>
            <ListItemIcon>
              <TranslateOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Location:Germany</ListItemText>
            <KeyboardArrowRightOutlinedIcon />
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <KeyboardOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Keyboard Shortcuts</ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem>
            <ListItemIcon>
              <HelpOutlineOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Help</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FeedbackOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Send Feedback</ListItemText>
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  );
};

export default KebabMenu;
