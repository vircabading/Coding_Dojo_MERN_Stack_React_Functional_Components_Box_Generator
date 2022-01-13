import react, { useState } from "react";
import StyledBox from "./StyledBox";

////////////////////////////////////////////////////////////////
//  BOX DISPLAY COMPONENT
////////////////////////////////////////////////////////////////

const BoxDisplay = (props) => {
    return (
        <div>
            <h1>In Display Box Component</h1>
            
            <div className="row">
                {props.colors.map((color, i) =>
                    <div className="col m-3"><StyledBox bgColor={color}/></div>)}
            </div>
            
        </div>
    );
}

export default BoxDisplay;