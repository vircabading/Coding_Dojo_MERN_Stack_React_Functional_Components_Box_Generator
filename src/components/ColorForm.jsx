import react, { useState } from "react";

////////////////////////////////////////////////////////////////
//  COLOR FORM COMPONENT
////////////////////////////////////////////////////////////////

const ColorForm = (props) => {
    return (
        <div>
            <h1>In Color Form Component</h1>
        </div>
    );

    const handleColor = (e) => {
        e.preventDefault();
        props.setNewColor( e.target.value )
    }
}

export default ColorForm;