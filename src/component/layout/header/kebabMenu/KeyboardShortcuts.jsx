import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const SHORTCUTS_DATA = [
  {
    playback: [
      { shortcutTitle: "Toggle play/pause", shortcut: "k" },
      { shortcutTitle: "Rewind 10 seconds", shortcut: "j" },
      { shortcutTitle: "Fast forward 10 seconds", shortcut: "l" },
      { shortcutTitle: "Previous video", shortcut: "P (SHIFT+p)" },
      { shortcutTitle: "Next video", shortcut: "N (SHIFT+n)" },
      { shortcutTitle: "Previous frame (while paused)", shortcut: "," },
      { shortcutTitle: "Next frame (while paused)", shortcut: "." },
      { shortcutTitle: "Decrease playback rate", shortcut: "< (SHIFT+,)" },
      { shortcutTitle: "Increase playback rate", shortcut: "> (SHIFT+.)" },
      {
        shortcutTitle:
          "Seek to specific point in the video (7 advances to 70% of duration)",
        shortcut: "0..9",
      },
      { shortcutTitle: "Seek to previous chapter", shortcut: "CONTROL + ←" },
      { shortcutTitle: "Seek to next chapter", shortcut: "CONTROL + →" },
    ],
  },
  {
    "Subtitles and closed captions": [
      {
        shortcutTitle: "If the video supports captions, toggle captions ON/OFF",
        shortcut: "c",
      },
      {
        shortcutTitle: "Rotate through different text opacity levels",
        shortcut: "o",
      },
      {
        shortcutTitle: "Rotate through different window opacity levels",
        shortcut: "w",
      },
      {
        shortcutTitle: "Rotate through font sizes (increasing)",
        shortcut: "+",
      },
      {
        shortcutTitle: "Rotate through font sizes (decreasing)",
        shortcut: "-",
      },
    ],
  },
  {
    general: [
      { shortcutTitle: "Toggle full screen", shortcut: "f" },
      { shortcutTitle: "Toggle theater mode", shortcut: "t" },
      { shortcutTitle: "Toggle miniplayer", shortcut: "i" },
      {
        shortcutTitle: "Close miniplayer or current dialog",
        shortcut: "ESCAPE",
      },
      { shortcutTitle: "Toggle mute", shortcut: "m" },
    ],
  },
  {
    "Spherical Videos": [
      { shortcutTitle: "Pan up", shortcut: "w" },
      { shortcutTitle: "Pan left", shortcut: "a" },
      { shortcutTitle: "Pan down", shortcut: "s" },
      { shortcutTitle: "Pan right", shortcut: "d" },
      { shortcutTitle: "Zoom in", shortcut: "+ on numpad or ]" },
      { shortcutTitle: "Zoom out", shortcut: "- on numpad or ]" },
    ],
  },
];

const KeyboardShortcuts = (props) => {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <Dialog
      {...props}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ sx: { width: "100%", maxWidth: "1200px!important" } }}
    >
      <Grid container spacing={4}>
        {[0, 2, 1, 3].map((index) => {
          let title = Object.keys(SHORTCUTS_DATA[index]);
          return (
            <Grid item xs={6}>
              <DialogTitle>{title}</DialogTitle>
              <List>
                {SHORTCUTS_DATA[index][title].map((item) => {
                  return (
                    <>
                      <ListItem
                        secondaryAction={
                          <ListItemText
                            primaryTypographyProps={{
                              variant: "caption",
                            }}
                          >
                            {item.shortcut}
                          </ListItemText>
                        }
                      >
                        <ListItemText
                          primaryTypographyProps={{
                            variant: "caption",
                          }}
                        >
                          {item.shortcutTitle}
                        </ListItemText>
                      </ListItem>
                      <Divider />
                    </>
                  );
                })}
              </List>
            </Grid>
          );
        })}
      </Grid>
      <DialogActions sx={{ margin: "1rem" }}>
        <Button onClick={handleClose} autoFocus>
          Dismiss
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default KeyboardShortcuts;
