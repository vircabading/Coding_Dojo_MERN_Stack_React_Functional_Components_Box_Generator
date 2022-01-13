import react, { useState } from "react";
import StyledBox from "./StyledBox";

////////////////////////////////////////////////////////////////
//  BOX DISPLAY COMPONENT
////////////////////////////////////////////////////////////////

const BoxDisplay = (props) => {
    return (
        <div>
            <h3>In Display Box Component</h3>
            

            <div className="row">
                {props.boxs.map((box,i) => 
                    <div className="col m-3"><StyledBox bgColor={box.color} height={box.height} width={box.width} /></div>
                )}
            </div>
            
        </div>
    );
}

export default BoxDisplay;