import './App.css';
import ColorForm from './components/ColorForm';
import BoxDisplay from './components/BoxDisplay';

//////////////////////////////////////////////////////////////////
//  ROOT APPLICATION
//////////////////////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      {/* //// COLOR FORM COMPONENT ////////////////////////////// */}
      <div className="bg-info rounded mb-3 p-2">
        <ColorForm />
      </div>

      {/* //// DISPLAY BOC COMPONENT ///////////////////////////// */}
      <div className="border rounded mb-3 p-2">
        <BoxDisplay />
      </div>
    </div>
  );
}

export default App;
