import anxios from "axios";
import Squirtle from '../Images/Squirtle.jpg';

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
                <div className="logoContainer"></div>
                <h1>Pokemon</h1>
                <p>Gotta Catch 'Em All</p>
                
                <ul>
                    <li><div className="icon1"></div><a href="/">Dashboard</a></li>
                    <li><div className="icon2"></div><a href="/Comparisons">Comparisons</a></li>
                    <li><div className="icon3"></div><a href="/Timeline">Timeline</a></li>
                </ul>

                <img className="navImg" src={Squirtle}/>
                
            </div>
        </>

    );


}
export default Navigation