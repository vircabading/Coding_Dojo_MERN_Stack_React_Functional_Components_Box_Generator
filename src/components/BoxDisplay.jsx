import react, { useState } from "react";

////////////////////////////////////////////////////////////////
//  BOX DISPLAY COMPONENT
////////////////////////////////////////////////////////////////

const BoxDisplay = (props) => {
    return (
        <div>
            <h1>In Display Box Component</h1>
            {props.colors.map((color, i) =>
                    )}
        </div>
    );
}

export default BoxDisplay;