import anxios from "axios";
import ChartFive from './ChartFive.js';
import Piplup from '../Images/piplup.jpg';



anxios.get('https://pokeapi.co/api/v2')
.then((response) => { 
    console.log(response);
})
.catch((err) =>{
    console.log(err);
});

const Timeline = () => {

    return(
        <>
           <div className="BodyBox time">
            <div className="TextContainers">
                <h1>Totodile Timeline</h1>
                <p>Here is a summary of the informations our website provides!We aim to give our fellow Pokemon trainers all the information they need to become a Pokemon master!</p>  
            </div>

            <div class="ContentContainer">
                <div className="OptionsRow">
                    <div className="OptionButton one">Option</div>
                    <div className="OptionButton two">Option</div>
                    <div className="OptionButton three">Option</div>
                    <div className="OptionButton four">Option</div>
                    <div className="OptionButton five">Option</div>
                </div>

                <div class="timeline_graph">
                    <ChartFive/>
                </div>

                <div className="UpdateInfo">
                    <h2>Information</h2>
                    <p>This is content.</p>
                </div>

                <div className="ExtraImage">
                    <img src={Piplup}/>
                </div>
            </div>
           
            
        </div>
        </>
    );


}
export default Timeline