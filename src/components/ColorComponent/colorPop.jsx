import React, {Component,} from 'react';
import {card,Popover} from '@material-ui/core';

const colorCodeArray = [
    {
        rgbCode:"(255,99,71)",
        ColorName:"tomato"
    },
    {
        rgbCode:"(255,255,0)",
        ColorName:"yellow"
    },
    {
        rgbCode:"(173,255,47)",
        ColorName:"green"
    },
    {
        rgbCode:"(0,255,255)",
        ColorName:"aqua"
    },
    {
        rgbCode:"(138,43,226)",
        ColorName:"blue violet"
    },
    {
        rgbCode:"(238,130,238)",
        ColorName:"violet"
    },
    {
        rgbCode:"(255,192,203)",
        ColorName:"pink"
    },
    {
        rgbCode:"(230,230,250)",
        ColorName:"lavender"
    },
    {
        rgbCode:"(211,211,211)",
        ColorName:"grey"
    },
    {
        rgbCode:"(143,188,143)",
        ColorName:"olive"
    },
    {
        rgbCode:"(255,215,0)",
        ColorName:"gold"
    },
    {
        rgbCode:"(216,191,216)",
        ColorName:"thistle"
    }
]

class ColorPopUp extends Component {
    constructor() {
        super();
        this.state={

        }
    }

    render (){
        var colorArray = colorCodeArray.map((option) => {
        return (
            <div>
                <Popover>
                    
                </Popover>
            </div>

        )
    });
}
}