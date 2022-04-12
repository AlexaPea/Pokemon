import anxios from "axios";
import ChartFive from './ChartFive.js';
import Piplup from '../Images/piplup.jpg';
import {useState, useRef, useEffect} from 'react';
import axios from 'axios';


    // let experience = [];
    // let level = [];
    // let updateExperience= [];
    // let   updateLevel= [];

    // function changeTimeLine(value){

    //     console.log("run");
       
      
    //     axios.get('https://pokeapi.co/api/v2/growth-rate/'+value+'/') //growth rate
    //     .then((res)=>{
    
          
    //       let data=res.data;

    //       for(let i=0; i<data.levels.length;i++){

    //         experience.push(data.levels[i].experience);
    //         level.push(data.levels[i].level);


    //       };
         
          
    
    //     })

       
        
        
    // }

    // // useEffect(() => {},[])


const Timeline = () => {

    let experience = [];
    let level = [];


    const [updateExperience, setUpdateExperience] = useState([]);
    const [updateLevel, setUpdateLevel] = useState([]);
   

    function changeTimeLine(value){

        
       
      
        axios.get('https://pokeapi.co/api/v2/growth-rate/'+value+'/') //growth rate
        .then((res)=>{
    
          
          let data=res.data;

          for(let i=0; i<data.levels.length;i++){

            experience.push(data.levels[i].experience);
            level.push(data.levels[i].level);


          };

          setUpdateExperience(experience);
          setUpdateLevel(level);

         
    
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
                    <button className="OptionButton one" value="1" onClick={e => changeTimeLine(e.target.value)}>Slow</button>
                    <button className="OptionButton two" value="2" onClick={e => changeTimeLine(e.target.value)}>Medium</button>
                    <button className="OptionButton three" value="3" onClick={e => changeTimeLine(e.target.value)}>Fast</button>
                    <button className="OptionButton four" value="4" onClick={e => changeTimeLine(e.target.value)}>Medium-Slow</button>
                    <button className="OptionButton five" value="5" onClick={e => changeTimeLine(e.target.value)}>Slow-Very Fast</button>
                </div>

                <div class="timeline_graph">
                    <ChartFive val1={updateExperience} val2={updateLevel} />
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