import './App.css';
import ColorForm from './components/ColorForm';
import BoxDisplay from './components/BoxDisplay';
import { useState } from 'react';

//////////////////////////////////////////////////////////////////
//  ROOT APPLICATION
//////////////////////////////////////////////////////////////////

function App() {

  const [boxs, setBoxs] = useState([]);

  const setNewBox = (newColor, newHeight, newWidth) => {
    setBoxs( (boxs) => [...boxs, {
      color: newColor,
      height: newHeight+'px',
      width: newWidth+'px'
    }] );
  }

  return (
    <div className="App">
      {/* //// COLOR FORM COMPONENT ////////////////////////////// */}
      <div className="bg-info rounded mb-3 p-2">
        <ColorForm setNewBox={ setNewBox }/>
      </div>

      {/* //// DISPLAY BOC COMPONENT ///////////////////////////// */}
      <div className="border rounded mb-3 p-2">
        <BoxDisplay boxs= { boxs }/>

      </div>
    </div>
  );
}

export default App;
