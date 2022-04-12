import anxios from "axios";
import ChartFive from './ChartFive.js';
import Piplup from '../Images/piplup.jpg';
import {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import ToggleButton from 'react-bootstrap/ToggleButton'


const Timeline = () => {

    let experience = [];
    let level = [];
    let num=0;
    let nameR="";


    const [updateExperience, setUpdateExperience] = useState([]);
    const [updateLevel, setUpdateLevel] = useState([]);
    const [updateInfo, setUpdateInfo] = useState([]);

    const [activeButton, setActiveButton] = useState();
    const [ratePokeNum, setRatePokeNum] = useState();
    const [rateName, setRateName] = useState();
   
    let value=1;
    function changeTimeLine(value){
        setActiveButton(value) //update your current active button state 
    
        axios.get('https://pokeapi.co/api/v2/growth-rate/'+value+'/') //growth rate
        .then((res)=>{
          let data=res.data;
          for(let i=0; i<data.levels.length;i++){
            experience.push(data.levels[i].experience);
            level.push(data.levels[i].level);
            num = data.pokemon_species.length;
            nameR=data.name;


          };
          setUpdateExperience(experience);
          setUpdateLevel(level);
          setRatePokeNum(num);
          setRateName(nameR);

          if(value === '1'){
              let info="Here the slow growth rate is depicted through the graph. These Pokemon take longer than most to level up."
              setUpdateInfo(info);
            }
          else if(value === '2'){
            let info="Here the medium growth rate is depicted through the graph. These Pokemon level up at an average pace."
            setUpdateInfo(info);
        }
          else if(value === '3'){
            let info="Here the fast growth rate is depicted through the graph. These pokemon are the easiest to level up."
            setUpdateInfo(info);
        } else if(value === '4'){
            let info="Here the medium-slow growth rate is depicted through the graph. These pokemon level up relatively slowly."
            setUpdateInfo(info);
        }else if(value === '5'){
            let info="Here the slow-very fast growth rate is depicted through the graph. The leveling speed starts slow but then speeds up."
            setUpdateInfo(info);
        }
          


        })
    }

    

    console.log(updateExperience);
    console.log(updateLevel);

    return(
        <>
           <div className="BodyBox time">
            <div className="TextContainers">
                <h1>Totodile Timeline</h1>
                <p>Here we provide the timeline for the different growth rates of Pokemon!</p>  
            </div>

            <div class="ContentContainer">
            <div className="OptionsRow">
                        <button className={`OptionButton one ${activeButton === "1" && "activeOp"}`} value="1" onClick={e => changeTimeLine(e.target.value)}>Slow</button>
                        <button className={`OptionButton two ${activeButton  === "2" && "activeOp"}`} value="2" onClick={e => changeTimeLine(e.target.value)}>Medium</button>
                        <button className={`OptionButton three ${activeButton  === "3" && "activeOp"}`} value="3" onClick={e => changeTimeLine(e.target.value)}>Fast</button>
                        <button className={`OptionButton four ${activeButton  === "4" && "activeOp"}`} value="4" onClick={e => changeTimeLine(e.target.value)}>Medium-Slow</button>
                        <button className={`OptionButton five ${activeButton === "5" && "activeOp"}`} value="5" onClick={e => changeTimeLine(e.target.value)}>Slow-Very Fast</button>
                    </div>

                <div class="timeline_graph">
                    <ChartFive val1={updateExperience} val2={updateLevel} />
                </div>

                <div className="UpdateInfo">
                    <h2>Growth Rate</h2>
                    <hr/>
                    <h3>{rateName}</h3>
                    <p>The growth rate refers to the speed at which Pokemon gain experience. The faster experience is gained, the faster the pokemon can level up.</p>
                    <br/>
                     <p>{updateInfo}</p>
                     <div className="pokemonNum2">
                    <p>{ratePokeNum}</p>
                    <h3>Pokemon in this category</h3>
                </div>
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