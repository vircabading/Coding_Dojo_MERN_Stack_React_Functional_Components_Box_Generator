import './App.css';
import ColorForm from './components/ColorForm';
import BoxDisplay from './components/BoxDisplay';
import { useState } from 'react';

//////////////////////////////////////////////////////////////////
//  ROOT APPLICATION
//////////////////////////////////////////////////////////////////

function App() {

  const [colors, setColors] = useState([]);

  const setNewColor = (newColor) => {
    setColors( (colors) => [...colors, newColor] );
  }

  return (
    <div className="App">
      {/* //// COLOR FORM COMPONENT ////////////////////////////// */}
      <div className="bg-info rounded mb-3 p-2">
        <ColorForm setNewColor={ setNewColor }/>
      </div>

      {/* //// DISPLAY BOC COMPONENT ///////////////////////////// */}
      <div className="border rounded mb-3 p-2">
        <BoxDisplay colors={ colors }/>

      </div>
    </div>
  );
}

export default App;
