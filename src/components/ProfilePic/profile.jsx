import { useState } from "react"
import Popover from '@material-ui/core/Popover';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './profileCss.scss'

const ProfilePic = () => {
    const [openProfilePop, setOpenProfilePop] = useState(false);
    const [anchor, setAnchor] = useState(null);
    const [file, setFile] = useState("");

    const handleOpenPopOver = (event) => {
        setOpenProfilePop(!openProfilePop);
        // console.log("openProfile: ", openProfilePop)
        setAnchor(event.currentTarget);
    }

    const handleProfileClose = () =>{
        setOpenProfilePop(false)
    }

    const handleChange = (event) => {
        setFile(event.target.value);
        // let formData = {
        //     file: file
        // }
        // console.log("profile image: ",formData);
    }
    return(
    <div>
        <AccountCircleIcon fontSize="large" color="action" onClick={handleOpenPopOver}/>
        <Popover 
        open={openProfilePop}
        anchorEl={anchor}
        onClose={handleProfileClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <div  className="profile-pop">
            <div className="totalProfilePop">
                <div className="profile-pic">
                    <Avatar style={{maxHeight:"100%",maxWidth:"100%",objectFit: "cover"}}>
                        <input type="file" onChange={handleChange}/><AccountCircleIcon fontSize="large"/>
                    </Avatar>
                </div>
                <div className="Account-details">
                    <Typography style={{padding:"5px"}}>Name</Typography>
                    <Typography style={{padding:"5px"}}>Email</Typography>
                </div>
            </div>
                <span><hr/></span>
                <div className="signUp-btn">
                    <button>Sign Up</button>
                </div>
            
        </div>
        </Popover>
    </div>
    )
}

export default withRouter (ProfilePic);