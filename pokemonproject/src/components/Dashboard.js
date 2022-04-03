import scroll from '../Images/scroll.gif';
import Charazard from '../Images/Char.png';
import DashBarChart from './DashBarChart';
import ChartTwo from './ChartTwo.js';
import ChartThree from './ChartThree';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useState, useRef, useEffect} from 'react';




// anxios.get('https://pokeapi.co/api/v2')
// .then((response) => { 
//     console.log(response);
// })
// .catch((err) =>{
//     console.log(err);
// });

const Dashboard = () => {

    const [pokemonAmount, setPokemonAmount] = useState();
    const [versionAmount, setVersionAmount] = useState();

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon/') //This is to get the Number of Pokemon
        .then((res)=>{
    
          let data=res.data;
        //   console.log(data);

          let numPokemon = data.count;
        
          setPokemonAmount(numPokemon);
          
    
        })

        axios.get('https://pokeapi.co/api/v2/version-group/') //This is to get the Number of Pokemon game versions
        .then((results)=>{
    
          let data=results.data;
        //   console.log(data);

          let numVersions = data.count;
        
          setVersionAmount(numVersions);
          
    
        })
      }, [])

    return(
        <>
        <div className="Header">
            <div className="HeaderText">
                <h2>WELCOME TO</h2>
                <h1>Pok&eacute;-Pal</h1>
                <p>Join us and lets discover more about our favourite Pokemon and the world they live in! Compare and analyze all the different pokemon and their strengths or take a look at the Poke-Timeline!</p>

                <div className="buttons">
                    <div className="Button1">Comparisons</div>
                    <div className="Button2">Timeline</div>
                </div>
           </div>
           <img className="scroll" src ={scroll}/>
            <div className="charazardImg"><img src={Charazard}/></div>
            
        </div>

        <div className="BodyBox two">
            <div className="TextContainers">
                <h1>Pok&eacute; Centre</h1>
                <p>Here is a summary of the informations our website provides!We aim to give our fellow Pokemon trainers all the information they need to become a Pokemon master!</p>  
                
                <div className="ContentRow">

                    <div className="Row-Block one">
                        <h3>Become a Trainer!</h3>
                        <p>Battle alongside your pokemon partners to become the best there is!</p>
                    </div>

                    <div className="Row-Block two">
                        <h3>Pokemon?</h3>
                        <p>Pokemon is short for "Pocket Monsters". These little guys all have unique abilities that aid them in battle.</p>
                    </div>

                    <div className="Row-Block three">
                        <h3>Evolve</h3>
                        <p>Evolving your pokemon increases their abilities and allows them to get stronger!</p>
                    </div>

                </div>

                <div className="ContentContainer">

                <div className="pokemonNum">
                    <h3>Number of Pokemon</h3>
                    <p>{pokemonAmount}</p>
                </div>
                <div className="pokemonNum">
                    <h3>Game Versions</h3>
                    <p>{versionAmount}</p>
                </div>
               
                </div>

</div>
                
                <div className="BarGraph_Dash">
                    <DashBarChart/>
                </div>
                <div className="DoughnutGraph_Dash">
                <div className='pokemonExplained'>
                        <h3>About</h3>
                        <br/>
                        <p>Pokémon is a series of video games developed by Game Freak and published by Nintendo and The Pokémon Company under the Pokémon media franchise.</p>
                       <br/>
                        <p>The game that has molded childhoods,ignited our creativity and brought magic to life is back once more! With new pokemon, trainers and challenges to experience!</p>
                  <br/>
                  <p>Let the adventure begin ...</p>
                  
                    </div>
                </div>
                <div className="RadarGraph_Dash">
                    <div className='learnMore'>
                        <h3>Learn More</h3>
                        <p>Interested in learning more about Pokemon? Go to the comparisons page now!</p>
                        <div className='Button1'>Compare</div>
                    </div>
                </div>
               
                
      
            </div>
           
            
    
        </>
    );


}
export default Dashboard