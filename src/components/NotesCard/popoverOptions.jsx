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
import { SettingsPowerRounded } from '@material-ui/icons';

const PopoverPopupState = ({propChip}) => {
  const [open, setOpen] = React.useState(false);
  let [chip, setChip] = React.useState("");
  const [openRemindme, setOpenRemindme] = useState(false);
  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setOpenRemindme(!openRemindme);
            setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setOpenRemindme(false);
    setChip("today 8:00PM");
    console.log("chip val: ", chip);
    propChip(chip);
  };

  

  return (
    <div>
      <AddAlertIcon  variant="contained" color="action" onClick={handleClick} />
      <Popover
       
        open={openRemindme}
        anchorEl={anchor}
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
                  <div id="pop-style" onClick={() => {
                setChip("today 8:00PM");
                propChip("today 8:00PM");
                setOpenRemindme(false);
            }} >Later Today   8:00PM</div>
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
