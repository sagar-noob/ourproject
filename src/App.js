
import './App.css';
import Navbar from './mycomponent/Navbar';
import Textform from './mycomponent/Textform';
import About from './mycomponent/About';




function App() {
  return (
    <>
    
      <Navbar/>
      <div className="container my-3">
       <Textform heading="Enter the text here"/> 
      {/*<About/> */}
      </div>
      
      </>
    
    
  
  );
}

export default App;
