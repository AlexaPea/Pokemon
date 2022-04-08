import ChartOne from './ChartOne.js';
import CompBarChart2 from './CompBarChart2.js';
import ChartTwo from './ChartTwo.js';
import CompareChart from './CompareChart.js';
import ChartFour from './ChartFour.js';
import {useState, useRef, useEffect} from 'react';
import axios from 'axios';
const Comparisons = () => {

    const pokemonOne = useRef(null);
    const pokemonTwo = useRef(null);


    

    const[pokemonType, setPokemonType]= useState();
    const[pokemonId, setPokemonId]= useState();
    const[pokemonHeight, setPokemonHeight]= useState();
    const[pokemonWeight, setPokemonWeight]= useState();

    
    const[pokemonType2, setPokemonType2]= useState();
    const[pokemonId2, setPokemonId2]= useState();
    const[pokemonHeight2, setPokemonHeight2]= useState();
    const[pokemonWeight2, setPokemonWeight2]= useState();

    const[pokemonListed, setPokemonListed] = useState([]);
    const[pokemonOneData, setPokemonOneData] = useState();
    const[pokemonTwoData, setPokemonTwoData] = useState();
    const[dataLabels, setDataLabels] = useState();
    


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

          //console.log(type)

          setPokemonType(type);
          setPokemonId(id);
          setPokemonHeight(height);
          setPokemonWeight(weight);

         

          
            //   let pokemonOneDataList= ({
            //       hp: data.stats[0].base_stat,
            //       Attack: data.stats[1].base_stat,
            //       Defense: data.stats[2].base_stat,
            //       SpecialAttack: data.stats[3].base_stat,
            //       SpecialDefense: data.stats[4].base_stat,
            //       Speed: data.stats[5].base_stat,
            

            //   })

              let pokemonOneDataList = [
                data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat
              ];

              let labels = [
                  'hp', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'
              ];

              setPokemonOneData(pokemonOneDataList);
              setDataLabels(labels);
          

          
          
    
        })


}
function optionTwoSelected(){
    console.log('selected2');
    axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonTwo.current.value)
    .then((res)=>{

      let data=res.data;
      console.log(data);

      let type2 = data.types.type;
      let id2 = data.id;
      let height2= data.height;
      let weight2 = data.weight;

    //   console.log(type2)

      setPokemonType2(type2);
      setPokemonId2(id2);
      setPokemonHeight2(height2);
      setPokemonWeight2(weight2);


    //   let pokemonTwoDataList= ({
    //     hp: data.stats[0].base_stat,
    //     Attack: data.stats[1].base_stat,
    //     Defense: data.stats[2].base_stat,
    //     SpecialAttack: data.stats[3].base_stat,
    //     SpecialDefense: data.stats[4].base_stat,
    //     Speed: data.stats[5].base_stat,
  

    // })
    let pokemonTwoDataList = [
        data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat
      ];

    setPokemonTwoData(pokemonTwoDataList);
      
      

    })

}
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1100')
        .then((res)=>{
    
          let data=res.data;
          console.log(data);

          const pokemonList = [];

          for(let i=0; i<30; i++){
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


    
        // axios.get('https://pokeapi.co/api/v2/pokemon/'+ pokemonOne)
        // .then((res)=>{
    
        //   let data=res.data;
        //   console.log(data);

        //   let type = data.types[0].type.name;
        //   let id = data.id;
        //   let height= data.height;
        //   let weight = data.weight;

        //   //console.log(type)

        //   setPokemonType(type);
        //   setPokemonId(id);
        //   setPokemonHeight(height);
        //   setPokemonWeight(weight);

         

          
        //       let pokemonOneDataList= ({
        //           hp: data.stats[0].base_stat,
        //           Attack: data.stats[1].base_stat,
        //           Defense: data.stats[2].base_stat,
        //           SpecialAttack: data.stats[3].base_stat,
        //           SpecialDefense: data.stats[4].base_stat,
        //           Speed: data.stats[5].base_stat,
            

        //       })

        //       setPokemonOneData(pokemonOneDataList);
          

          
          
    
        // })

        console.log(pokemonOneData);
        
        // axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemonTwo)
        // .then((res)=>{
    
        //   let data=res.data;
        //   console.log(data);

        //   let type2 = data.types.type;
        //   let id2 = data.id;
        //   let height2= data.height;
        //   let weight2 = data.weight;

        // //   console.log(type2)

        //   setPokemonType2(type2);
        //   setPokemonId2(id2);
        //   setPokemonHeight2(height2);
        //   setPokemonWeight2(weight2);


        //   let pokemonTwoDataList= ({
        //     hp: data.stats[0].base_stat,
        //     Attack: data.stats[1].base_stat,
        //     Defense: data.stats[2].base_stat,
        //     SpecialAttack: data.stats[3].base_stat,
        //     SpecialDefense: data.stats[4].base_stat,
        //     Speed: data.stats[5].base_stat,
      
 
        // })

        // setPokemonTwoData(pokemonTwoDataList);
          
          
    
        // })
      }, [])

     

    // let pokemonNameOne = pokemonOne.current.value;
    // let pokemonNameTwo = pokemonTwo.current.value;

    

    // let Names = <select pokemonOneName={pokemonNameOne} pokemonTwoName={pokemonNameTwo}/>;
   let pokemonOptions = pokemonListed.map((item) =>  (<option key={item.key} value={item.name}>{item.name}</option>));
   

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
                        <select onChange={optionOneSelected} ref={pokemonOne}>
                            {pokemonOptions}
                        </select>
                    </div>
                    <div className='abilityGraph'>
                        <div className="BarGraph_Comp">
                            <ChartOne value1={pokemonOneData} labels={dataLabels}/>
                        </div>
                    </div>
                    <div className='pokemonInfo'>
                      <h3>Pokemon Information</h3>
                      <p><strong>Type:</strong>{pokemonType}</p>
                      <p><strong>Pokedex ID:</strong>{pokemonId}</p>
                      <p><strong>Height:</strong>{pokemonHeight}</p>
                      <p><strong>Weight:</strong>{pokemonWeight}</p>
                    </div>


                </div>

                <div className='center-panel'>
                    <div className="RadarGraph_Comp">
                         <CompareChart val={pokemonOneData} val2={pokemonTwoData} labels={dataLabels}/>
                    </div>
                    <div className="RadarGraph_Comp">
                         <ChartTwo/>
                    </div>

                </div>

                <div className='right-panel'>
                    <div className='selectOption'>
                        <select onChange={optionTwoSelected} ref={pokemonTwo}>
                            {pokemonOptions}
                        </select>
                    </div>
                    <div className='abilityGraph'>
                        <div className="BarGraph_Comp">
                            <CompBarChart2 value={pokemonTwoData} labels={dataLabels}/>
                        </div>
                    </div>
                    <div className='pokemonInfo'>
                      <h3>Pokemon Information</h3>
                      <p><strong>Type:</strong>{pokemonType2}</p>
                      <p><strong>Pokedex ID:</strong>{pokemonId2}</p>
                      <p><strong>Height:</strong>{pokemonHeight2}</p>
                      <p><strong>Weight:</strong>{pokemonWeight2}</p>
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