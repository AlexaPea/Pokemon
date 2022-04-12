import './App.css';
import{Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Comparisons from './components/Comparison';
import Timeline from './components/Timeline';
import ChartOne from './components/ChartOne';
import ChartTwo from './components/ChartTwo';
import CompareChart from './components/CompareChart';
import ChartFour from './components/ChartFour';
import ChartFive from './components/ChartFive';
import DashBarChart from './components/DashBarChart';
import ChartThree from './components/ChartThree';
import DoughnutOne from './components/DoughnutOne';



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
