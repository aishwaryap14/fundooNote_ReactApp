import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { withRouter } from 'react-router-dom';
import './popOver.scss';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import { useState } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const Poptheme = createMuiTheme( {
  overrides: {
      MuiPopover:{
          paper:{
              width: "230px",
              background:"white"
          }
      }
  }
});

const PopoverPopupState = ({propChip, propDate, propTime}) => {
  const [openPop, setOpenPop] = React.useState(false);
  let [chip, setChip] = React.useState("");
  const [openRemindme, setOpenRemindme] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const currentdate = new Date();
  // const currentDay = currentdate.getDate();
  // const currentMonth = currentdate.getMonth();
  // const currentYear = currentdate.getFullYear();
  // const timeStamp = currentdate.toLocaleTimeString();

  const handleClick = (event) => {
    setOpenRemindme(!openRemindme);
            setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setOpenRemindme(false);
    console.log("chip val: ", chip);
    propChip(chip);
  };

  const handlepopOvercontent = () => {
    setOpenPop(!openPop)
  }
  

  return (
    <MuiThemeProvider theme = {Poptheme}>
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
        {openPop ? 
        (
          <div>
          <div style={{display:"flex",padding:"5px"}}><ArrowBackIcon style={{marginRight:"5px"}} onClick={handlepopOvercontent}/> Pick Date and Time</div>
          <div className="select-date" style={{width:"230px"}}><input onClick={(event)=>{propDate(event.target.value)}} type="date" /></div>
          <div className="select-time" style={{width:"230px"}}><input onClick={(event)=>{propTime(event.target.value)}} type="time"/></div>
          </div>
        ) :
            (
            <div style={{padding:"15px"}}>
              <Typography style={{fontSize:"20px"}} >Reminder:</Typography>
                <div style={{padding:"8px"}} >
                  <div id="pop-style" onClick={() => {propChip(currentdate.toLocaleString()); setOpenRemindme(false)}} >Later Today </div>
                  <div id="pop-style" onClick={() => {propChip((currentdate).toLocaleString()); setOpenRemindme(false);}}>Tommorrow </div>
                  <div id="pop-style" onClick={handlepopOvercontent} ><AccessTimeIcon /> Pick Date and Time</div>
                </div>
            </div>
            )}
      </Popover>
    </MuiThemeProvider>
  );

}

export default withRouter (PopoverPopupState);
