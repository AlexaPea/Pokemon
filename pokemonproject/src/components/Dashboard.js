import anxios from "axios";
import scroll from '../Images/scroll.gif';
import Charazard from '../Images/Charazard.jpg';
import ChartOne from './ChartOne.js';
import ChartTwo from './ChartTwo.js';
import ChartThree from './ChartThree.js';




anxios.get('https://pokeapi.co/api/v2')
.then((response) => { 
    console.log(response);
})
.catch((err) =>{
    console.log(err);
});

const Dashboard = () => {

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
                        <h3>Content</h3>
                        <p>blah blah blah</p>
                    </div>

                    <div className="Row-Block two">
                        <h3>Content</h3>
                        <p>blah blah blah</p>
                    </div>

                    <div className="Row-Block three">
                        <h3>Content</h3>
                        <p>blah blah blah</p>
                    </div>

                </div>

                <div className="ContentContainer">

                <div className="pokemonNum">
                    <h3>Number of Pokemon</h3>
                    <p>200</p>
                </div>
                <div className="pokemonNum">
                    <h3>Number of Something</h3>
                    <p>200</p>
                </div>
               
                </div>

</div>
                
                <div className="BarGraph_Dash">
                    <ChartOne/>
                </div>
                <div className="DoughnutGraph_Dash">
                    <ChartTwo/>
                </div>
                <div className="RadarGraph_Dash">
                    <ChartThree/>
                </div>
               
                
      
            </div>
           
            
    
        </>
    );


}
export default Dashboard