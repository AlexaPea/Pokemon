import './App.css';
import{Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Comparisons from './components/Comparison';
import Timeline from './components/Timeline';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        
        <Route path='/' element = {<Dashboard/>}/>
        <Route path='/Comparisons' element = {<Comparisons/>}/>
        <Route path='/Timeline' element = {<Timeline/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
