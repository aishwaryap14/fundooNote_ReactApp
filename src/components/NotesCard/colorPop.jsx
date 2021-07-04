import React, { Component, } from 'react';
import { card, Popover, IconButton , createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import { useState } from 'react';
import { useEffect } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './colorPop.scss';

const Coltheme = createMuiTheme( {
    overrides: {
        MuiPopover:{
            paper:{
                display: "flex",
                // height: "100px",
                flexWrap: "wrap",
                // width:"400px",
                padding:"4px",
                background:"white"
            }
        },
        MuiIconButton:{
            root:{
                margin:"2px"
            }
        }
    }
});


const ColorPopUp = ({ propColor, changeColor }) => {
    const colorCodeArray = [
        {
            rgbCode: "#FFFFFF",
            ColorName: "white"
        },
        {
            rgbCode: "#FA8072",
            ColorName: "red"
        },
        {
            rgbCode: "#FFFF00",
            ColorName: "yellow"
        },
        {
            rgbCode: "#F4A460",
            ColorName: "orange"
        },
        {
            rgbCode: "#98FB98",
            ColorName: "green"
        },
        {
            rgbCode: "#ADD8E6",
            ColorName: "blue"
        },
        {
            rgbCode: "#7FFFD4",
            ColorName: "aqua"
        },
        {
            rgbCode: "#DDA0DD",
            ColorName: "purple"
        },
        {
            rgbCode: "#FF69B4",
            ColorName: "magenta"
        },
        {
            rgbCode: "#FFC0CB",
            ColorName: "pink"
        },
        {
            rgbCode: "#FFE4C4",
            ColorName: "brown"
        },
        {
            rgbCode: "#E6E6FA",
            ColorName: "lavender"
        }
    ]
    // console.log("propsColor value: ", propsColor);
    const [colorArr, setColorArr] = useState([]);
    const [openColor, setOpenColor] = useState(false);
    const [anchor, setAnchor] = useState(null);
    // console.log("colors Arr: ", colorArr);

    const handleClick = (event) => {
        setColorArr(colorCodeArray);
        setOpenColor(!openColor);
        setAnchor(event.currentTarget);
    };

    // useEffect(() => {
    //     setColorArr(colorCodeArray);
    // })

    const handleClose = () => {
        setOpenColor(false);
    };

    // console.log("colorArr: ", colorArr);
    return (
        <MuiThemeProvider theme = {Coltheme}>
            <div>
            <ColorLensIcon fontSize='medium' id="ColorLensIcon" onClick={handleClick} />
            <Popover className="color-plate"
                open={openColor}
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
                {colorArr.map((option, index) => {

                    return (
                        <div >
                            <Tooltip title={option.ColorName}>
                                <IconButton style={{ backgroundColor: option.rgbCode , border:"0.3px solid grey"}}
                                    value={option.rgbCode}
                                    onClick={(event) => {propColor(event.target.value);setOpenColor(false);}}>

                                </IconButton>

                            </Tooltip>

                        </div>

                    )
                })}
            </Popover>
            </div>
         </MuiThemeProvider>
    )
}

export default withRouter(ColorPopUp);