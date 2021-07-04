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
            rgbCode: "rgb(255,255,255)",
            ColorName: "white"
        },
        {
            rgbCode: "rgb(250,128,114)",
            ColorName: "red"
        },
        {
            rgbCode: "rgb(255,255,0)",
            ColorName: "yellow"
        },
        {
            rgbCode: "rgb(244,164,96)",
            ColorName: "orange"
        },
        {
            rgbCode: "rgb(152,251,152)",
            ColorName: "green"
        },
        {
            rgbCode: "rgb(173,216,230)",
            ColorName: "blue"
        },
        {
            rgbCode: "rgb(127,255,212)",
            ColorName: "aqua"
        },
        {
            rgbCode: "rgb(221,160,221)",
            ColorName: "purple"
        },
        {
            rgbCode: "rgb(255,105,180)",
            ColorName: "magenta"
        },
        {
            rgbCode: "rgb(255,192,203)",
            ColorName: "pink"
        },
        {
            rgbCode: "rgb(255,228,181)",
            ColorName: "brown"
        },
        {
            rgbCode: "rgb(230,230,250)",
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