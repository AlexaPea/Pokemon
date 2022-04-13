import ChartOne from './ChartOne.js';
import CompBarChart2 from './CompBarChart2.js';
import ChartTwo from './ChartTwo.js';
import CompareChart from './CompareChart.js';
import ChartFour from './ChartFour.js';
import {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import DoughnutOne from './DoughnutOne';
import DoughnutTwo from './DoughnutTwo';


const Comparisons = (props) => {
    

    const pokemonOne = useRef('charmander');
    const pokeNameVal = pokemonOne;
    const pokemonTwo = useRef('ditto');


    

    const[pokemonType, setPokemonType]= useState();
    const[pokemonId, setPokemonId]= useState();
    const[pokemonHeight, setPokemonHeight]= useState();
    const[pokemonWeight, setPokemonWeight]= useState();
    const[pokemonName, setPokemonName]= useState('charmander');
    const[pokemonHp, setPokemonHp]= useState();

    
    const[pokemonType2, setPokemonType2]= useState();
    const[pokemonId2, setPokemonId2]= useState();
    const[pokemonHeight2, setPokemonHeight2]= useState();
    const[pokemonWeight2, setPokemonWeight2]= useState();
    const[pokemonName2, setPokemonName2]= useState('ditto');
    const[pokemonHp2, setPokemonHp2]= useState();

    const[pokemonListed, setPokemonListed] = useState([]);
    const[pokemonOneData, setPokemonOneData] = useState();
    const[pokemonTwoData, setPokemonTwoData] = useState();
    const[dataLabels, setDataLabels] = useState();
    const[pokeOneTotal, setPokeOneTotal] = useState('22');
    const[pokeTwoTotal, setPokeTwoTotal] = useState('10');
    const[pokemonWinner, setPokemonWinner] = useState('charmander');
    
   

    function optionOneSelected(){
       
        console.log('selected');
        axios.get('https://pokeapi.co/api/v2/pokemon/'+ pokemonOne.current.value)
        .then((res)=>{
    
          let data=res.data;
          console.log(data);

          let type = data.types[0].type.name;
          let id = data.id;
          let height= data.height;
          let weight = data.weight;
          let name = data.forms[0].name;
          let hp = data.stats[0].base_stat;

          //console.log(type)

          setPokemonType(type);
          setPokemonId(id);
          setPokemonHeight(height);
          setPokemonWeight(weight);
          setPokemonName(name);
          setPokemonHp(hp);

            let sum=0;
            sum= data.stats[0].base_stat+ data.stats[1].base_stat+ data.stats[2].base_stat+ data.stats[3].base_stat+data.stats[4].base_stat+data.stats[5].base_stat;
            setPokeOneTotal(sum);


              let pokemonOneDataList = [
                data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat
              ];

              let labels = [
                  'hp', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'
              ];

              setPokemonOneData(pokemonOneDataList);
              setDataLabels(labels);
              selectedWinner();
              
          
    
    
        })


}
function optionTwoSelected(){
    
    console.log('selected2');
    axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonTwo.current.value)
    .then((res)=>{

      let data=res.data;
      console.log(data);

      let type2 = data.types[0].type.name;
      let id2 = data.id;
      let height2= data.height;
      let weight2 = data.weight;
      let name2 = data.forms[0].name;
      let hp2 = data.stats[0].base_stat;

   

      setPokemonType2(type2);
      setPokemonId2(id2);
      setPokemonHeight2(height2);
      setPokemonWeight2(weight2);
      setPokemonName2(name2);
      setPokemonHp2(hp2);


    let sum=0;
    sum= data.stats[0].base_stat+ data.stats[1].base_stat+ data.stats[2].base_stat+ data.stats[3].base_stat+data.stats[4].base_stat+data.stats[5].base_stat;
    setPokeTwoTotal(sum);
    
    let pokemonTwoDataList = [
        data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat
      ];

    setPokemonTwoData(pokemonTwoDataList);
    selectedWinner();
    

    })


   
 




    


}
function selectedWinner(){

    console.log(pokemonName+' '+pokeOneTotal);
    console.log(pokemonName2+' '+pokeTwoTotal);
    if(pokeOneTotal>pokeTwoTotal){
        setPokemonWinner(pokemonName);
    }else if(pokeOneTotal<pokeTwoTotal){
        setPokemonWinner(pokemonName2);
    }else{
        setPokemonWinner("Draw");
    }

}
    useEffect(() => {
        selectedWinner(pokeOneTotal,pokeTwoTotal);
        //Runs function immidiatly to put placeholder data
        optionOneSelected();
        optionTwoSelected();

        //gets all pokemon data
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1100')
        .then((res)=>{
    
          let data=res.data;
          console.log(data);

          const pokemonList = [];

          for(let i=0; i<1000; i++){
              pokemonList.push({
                  key: i,
                  name: data.results[i].name,
          })}

          setPokemonListed(pokemonList);
         
                   
          
    
        })
        
    let pokemon1Name = pokemonOne.current.value;
    console.log(pokemon1Name);
    let pokemon2Name = pokemonTwo.current.value;
    console.log(pokemon2Name);
    console.log(pokemonListed);


    
       

        console.log(pokemonOneData);
        
      
      }, [])

     
     
  
   let pokemonOptions = pokemonListed.map((item) =>  (<option key={item.key}  value={item.name}>{item.name}</option>));
   
 console.log((props.percentNum));


    return(
        <>
           <div className="BodyBox Comparisons">
            <div className="TextContainers">
                <h1>Cradily Comparisons</h1>
                <p>Select any Pokemon of your choosing and compare their abilities! Lets see who would win in battle - better be prepared for your next tournament!</p>  
            </div>

            <div className='contentContainer'>
                <div className='left-panel'>
                    <div className='selectOption'>
                        <select onChange={optionOneSelected} ref={pokemonOne} onLoad= {() => this.optionOneSelected()}>
                        <option selected="selected" value="charmander">
                            charmander
                            </option>
                            {pokemonOptions}
                        </select>
                    </div>
                    <div className='pokemonInfo'>
                      {/* <h3>Pokemon Information</h3> */}
                      <h5 className='idStyle'>#{pokemonId}</h5>
                      <h3  className='pokeName'>{pokemonName}</h3>
                      <hr/>
                      <small>HP {pokemonHp}/{pokemonHp}</small>

                    <table>
                        <tr class="rowOne">
                            <td><p>{pokemonType}</p><p className='title'>Type</p></td>
                            <td><p>{pokemonHeight}<p className='smalltxt'>Kg</p></p><p className='title'>Height</p></td>
                            <td className='last'><p>{pokemonWeight}<p className='smalltxt'>m</p></p><p className='title'>Weight</p></td>
                        </tr>
                    </table>

                    </div>
                    <div className='abilityGraph'>
                        <div className="BarGraph_Comp">
                            <ChartOne value1={pokemonOneData} labels={dataLabels}/>
                        </div>
                    </div>

                        <div className='abilityGraph'>
                        <div className="BarGraph_Comp Doughnut">
                        <h3>Catch Rate</h3>
                            <div className="Doughnut">   
                            <DoughnutOne nameForRate={pokemonName}/>
                            </div>
                            <h5 className="perc"> 25% </h5>
                            <hr class="underNum"/>
                            <br/>
                            <p>This pokemon is very difficult to catch!</p>
                        </div>
                        </div>


                  
                   


                </div>

                <div className='center-panel'>
                    <div className="RadarGraph_Comp">
                         <CompareChart val={pokemonOneData} val2={pokemonTwoData} labels={dataLabels}/>
                    </div>
                    <div className="RadarGraph_Comp winnerBlock">
                        <h3>{pokemonWinner}</h3>
                        <hr className='winnerLine'/>
                        <h5>winner</h5>
                    </div>
                    <div className="RadarGraph_Comp rem">
                        <h3>But Remember!</h3>
                        <p>If your Pokemon loses, they will just be sent to nurse Joy to get some rest for their next battle!</p>
                    </div>

                </div>

                <div className='right-panel'>
                    <div className='selectOption'>
                        <select onChange={optionTwoSelected}  ref={pokemonTwo}>
                        <option selected="selected" value="ditto">
                            ditto
                            </option>
                            {pokemonOptions}
                        </select>
                    </div>
                    <div className='pokemonInfo'>
                      {/* <h3>Pokemon Information</h3> */}
                      <h5 className='idStyle'>#{pokemonId2}</h5>
                      <h3  className='pokeName'>{pokemonName2}</h3>
                      <hr/>
                      <small>HP {pokemonHp2}/{pokemonHp2}</small>

                    <table>
                        <tr class="rowOne">
                            <td><p>{pokemonType2}</p><p className='title'>Type</p></td>
                            <td><p>{pokemonHeight2}<p className='smalltxt'>Kg</p></p><p className='title'>Height</p></td>
                            <td className='last'><p>{pokemonWeight2}<p className='smalltxt'>m</p></p><p className='title'>Weight</p></td>
                        </tr>
                    </table>

                    </div>
                    <div className='abilityGraph'>
                        <div className="BarGraph_Comp">
                            
                            <CompBarChart2 value={pokemonTwoData} labels={dataLabels}/>
                        </div>
                    </div>

                    <div className='abilityGraph'>
                        <div className="BarGraph_Comp Doughnut">
                        <h3>Catch Rate</h3>
                            <div className="Doughnut two">
                            <DoughnutTwo numValueTwo={pokemonName2}/>
                            </div>
                            <h5 className="perc"> {props.percentNum} % </h5>
                            <hr class="underNum"/>
                            <br/>
                            <p>{props.infoAdd}</p>
                        </div>
                        </div>
                  


                </div>
               
               

            
                {/* <div className="DoughnutGraph_Comp">
                    <ChartTwo/>
                </div>
                <div className="RadarGraph_Comp">
                    <ChartThree/>
                </div> */}
               





            </div>
           
            
        </div>
        </>
    );


}
export default Comparisons