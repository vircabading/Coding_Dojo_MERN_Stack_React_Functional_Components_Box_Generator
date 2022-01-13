import react, { useState } from "react";

////////////////////////////////////////////////////////////////
//  COLOR FORM COMPONENT
////////////////////////////////////////////////////////////////

const ColorForm = (props) => {
    const [color, setColor] = useState("Grey");
    
        const handleColor = (e) => {
            setColor(e.target.value);
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("in Handle Submit: e:", color );
            props.setNewColor( color )
        };

    return (
        <div>
            <h1>In Color Form Component</h1>
            <form className="col" onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label>Box Color: </label>
                    <input id="color" className="form-control" type="text" onChange={(e) => handleColor(e)} value={ color }/>
                </div>
                <input className="btn btn-sm bg-success"type="submit" value="Add Box" />
            </form>
            <h2>color: { color }</h2>
        </div>
    );
}

export default ColorForm;