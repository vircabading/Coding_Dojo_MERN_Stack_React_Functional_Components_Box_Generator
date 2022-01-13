import './App.css';
import ColorForm from './components/ColorForm';
import BoxDisplay from './components/BoxDisplay';
import { useState } from 'react';

//////////////////////////////////////////////////////////////////
//  ROOT APPLICATION
//////////////////////////////////////////////////////////////////

function App() {
  // //// FIELDS /////////////////////////////////////////////////
  const [boxs, setBoxs] = useState([]);   // An Array of Box Objects
  // //// CALL BACK FUNCTION TO SET BOX VARIABLES IN COLOR FORM //
  //  Adds a New Box Object to the array of Box Objects
  const setNewBox = (newColor, newHeight, newWidth) => {
    setBoxs( (boxs) => [...boxs, {
      color: newColor,              // Box Color
      height: newHeight+'px',       // Box Height
      width: newWidth+'px'          // Box Width
    }] );
  }

  // //// OUTPUT /////////////////////////////////////////////////
  return (
    <div className="App">
      {/* //// COLOR FORM COMPONENT ////////////////////////////// */}
      <div className="bg-info rounded mb-3 p-2">
        <ColorForm setNewBox={ setNewBox }/>
      </div>

      {/* //// DISPLAY BOX COMPONENT ///////////////////////////// */}
      <div className="border rounded mb-3 p-2">
        <BoxDisplay boxs= { boxs }/>

      </div>
    </div>
  );
}

export default App;
