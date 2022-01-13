import react, { useState } from "react";

////////////////////////////////////////////////////////////////
//  COLOR FORM COMPONENT
////////////////////////////////////////////////////////////////

const ColorForm = (props) => {
    // //// FIELDS /////////////////////////////////////////////
    const [color, setColor] = useState("dodgerblue");
    const [width, setWidth] = useState('100');
    const [height, setHeight] = useState('100');
    
    // //// UTILITIES TO HANDLE CHANGE IN INPUT ////////////////
    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleWidth = (e) => {
        setWidth(e.target.value)
    }

    const handleHeight = (e) => {
        setHeight(e.target.value)
    }

    // //// UTILITIES TO HANDLE INPUT //////////////////////////
    const handleSubmit = (e) => {
        e.preventDefault();
        // //// 
        props.setNewBox( color, height, width );
        setColor("dodgerblue");
        setHeight("100");
        setWidth("100");
    };

    // //// OUTPUT TO RENDER FORM //////////////////////////////
    return (
        <div>
            {/* **** Form ************************************** */}
            <form className="col" onSubmit={ handleSubmit }>
                {/* **** Box Color ***************************** */}
                <div className="form-group mb-2">
                    <label>Box Color: </label>
                    <input id="color" className="form-control" type="text" onChange={(e) => handleColor(e)} value={ color }/>
                </div>
                {/* **** Box Height **************************** */}
                <div className="form-group mb-2">
                    <label>Height: </label>
                    <input id="height" className="form-control" type="text" onChange={(e) => handleHeight(e)} value={ height }/>
                </div>
                {/* **** Box Width ***************************** */}
                <div className="form-group mb-2">
                    <label>Width: </label>
                    <input id="width" className="form-control" type="text" onChange={(e) => handleWidth(e)} value={ width }/>
                </div>
                {/* **** Submit Button ************************* */}
                <input className="btn btn-sm bg-success"type="submit" value="Add Box" />
            </form>
        </div>
    );
}

export default ColorForm;