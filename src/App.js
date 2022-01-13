import './App.css';
import ColorForm from './components/ColorForm';

//////////////////////////////////////////////////////////////////
//  ROOT APPLICATION
//////////////////////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      {/* //// COLOR FORM COMPONENT ////////////////////////////// */}
      <div className="bg-info rounded mb-3 p-2">
        <h1>Form Component</h1>
        <ColorForm />
      </div>

      {/* //// DISPLAY BOC COMPONENT ///////////////////////////// */}
      <div className="border rounded mb-3 p-2">
        <h1>Display Box Component</h1>
      </div>
    </div>
  );
}

export default App;
