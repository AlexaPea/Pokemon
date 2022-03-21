import anxios from "axios";
import Squirtle from '../Images/Squirtle.jpg';
import logo from '../Images/Logo.svg';
import icon1 from '../Icons/dash.png'
import icon2 from '../Icons/chart.png'
import icon3 from '../Icons/timeline.png'


anxios.get('https://pokeapi.co/api/v2')
.then((response) => { 
    console.log(response);
})
.catch((err) =>{
    console.log(err);
});

const Navigation = () => {

    return(
        <>
            <div className="navContainer">
                <div className="logoContainer"><img className="logo" src={logo}/>
                    <h1>Pok&eacute;-Pal</h1>
                    <p>Gotta Catch 'Em All</p>
                </div>
                
                <ul>
                    <li><div className="icon icon1"><img src={icon1}/></div><a href="/">Dashboard</a></li>
                    <li><div className="icon icon2"><img src={icon2}/></div><a href="/Comparisons">Comparisons</a></li>
                    <li><div className="icon icon3"><img src={icon3}/></div><a href="/Timeline">Timeline</a></li>
                </ul>

                <img className="navImg" src={Squirtle}/>
                
            </div>
        </>

    );


}
export default Navigation