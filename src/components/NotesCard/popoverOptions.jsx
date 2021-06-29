import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { withRouter } from 'react-router-dom';
import './popOver.scss';
import { useState } from 'react';

const PopoverPopupState = () => {
  let [chip, setChip] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setChip(chip = "today 8:00PM");
    console.log("chip val: ", chip);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <AddAlertIcon aria-describedby={id} variant="contained" color="action" onClick={handleClick}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{padding:"15px"}}>
            <Typography style={{fontSize:"20px"}} >Reminder:</Typography>
              <div style={{padding:"8px"}} >
                  <div id="pop-style" onClick={handleClose} >Later Today   8:00PM</div>
                  <div id="pop-style" aria-valuetext="">Tommorrow   8:00AM</div>
                  <div id="pop-style" aria-valuetext="">Next Day   8:00PM</div>
                  <div id="pop-style" >Pick Date and Time</div>
              </div>
            </div>
      </Popover>
    </div>
  );

}

export default withRouter (PopoverPopupState);