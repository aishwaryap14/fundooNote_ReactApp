import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { withRouter } from 'react-router-dom';

const PopoverPopupState = () => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <AddAlertIcon variant="contained" color="action" {...bindTrigger(popupState)}>
            Open Popover
          </AddAlertIcon>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
            <div style={{padding:"15px"}}>
            <Typography style={{fontSize:"20px"}} >Reminder:</Typography>
              <div style={{padding:"8px"}}>
                  <div style={{fontSize:"15px",margin:"5px",padding:"8px"}}>Later Today   8:00PM</div>
                  <div style={{fontSize:"15px",margin:"5px",padding:"8px"}}>Tommorrow   8:00AM</div>
                  <div style={{fontSize:"15px",margin:"5px",padding:"8px"}}>Next Day   8:00PM</div>
                  <div style={{fontSize:"15px",margin:"5px",padding:"8px"}}>Pick Date and Time</div>
              </div>
            </div>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default withRouter (PopoverPopupState);
