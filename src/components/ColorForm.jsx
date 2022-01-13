import react, { useState } from "react";

////////////////////////////////////////////////////////////////
//  COLOR FORM COMPONENT
////////////////////////////////////////////////////////////////

const ColorForm = (props) => {
    const [color, setColor] = useState("dodgerblue");
    const [width, setWidth] = useState('100');
    const [height, setHeight] = useState('100');
    
        const handleColor = (e) => {
            setColor(e.target.value);
        }

        const handleWidth = (e) => {
            setWidth(e.target.value)
        }

        const handleHeight = (e) => {
            setHeight(e.target.value)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            props.setNewBox( color, height, width );
        };

    return (
        <div>
            <h3>In Color Form Component</h3>
            <form className="col" onSubmit={ handleSubmit }>
                <div className="form-group mb-2">
                    <label>Box Color: </label>
                    <input id="color" className="form-control" type="text" onChange={(e) => handleColor(e)} value={ color }/>
                </div>
                <div className="form-group mb-2">
                    <label>Height: </label>
                    <input id="height" className="form-control" type="text" onChange={(e) => handleHeight(e)} value={ height }/>
                </div>
                <div className="form-group mb-2">
                    <label>Width: </label>
                    <input id="width" className="form-control" type="text" onChange={(e) => handleWidth(e)} value={ width }/>
                </div>
                <input className="btn btn-sm bg-success"type="submit" value="Add Box" />
            </form>
        </div>
    );
}

export default ColorForm;