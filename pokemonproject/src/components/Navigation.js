import anxios from "axios";
import Squirtle from '../Images/Squirtle.jpg';
import logo from '../Images/Logo.svg';
import icon1 from '../Icons/dash.png';
import icon2 from '../Icons/chart.png';
import icon3 from '../Icons/timeline.png';
import{NavLink} from 'react-router-dom';


const Navigation = () => {

    return(
        <>
            <div className="navContainer">
                <div className="logoContainer"><img className="logo" src={logo}/>
                    <h1>Pok&eacute;-Pal</h1>
                    <p>Gotta Catch 'Em All</p>
                </div>
                
                <ul>
                    <li><NavLink exact activeClassName="active" to="/"><div className="icon icon1"><img src={icon1}/></div>Dashboard</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Comparisons"><div className="icon icon2"><img src={icon2}/></div>Comparisons</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Timeline"><div className="icon icon3"><img src={icon3}/></div>Timeline</NavLink></li>
                </ul>

                <img className="navImg" src={Squirtle}/>
                
            </div>
        </>

    );


}
export default Navigation