import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import 'chart.js/auto';
import React from "react";
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useState, useRef, useEffect} from 'react';
//const (pokemon,setPokeon) =useState([]);
// labels: {pokemon},
 // https://pokeapi.co/api/v2/pokemon/1/
const DashBarChart = () =>{

  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonTypeAmounts, setPokemonTypeAmounts] = useState([]);
  const [pokeTypeNames, setPokeTypeNames] =useState([]);

  useEffect(() => {

   //get type names
    axios.get('https://pokeapi.co/api/v2/type/') //This is to get the Number of tpes
    .then((res)=>{

      let data=res.data;
      let typeNames = [];

      for(let i=0; i<((data.count)-2);i++){
        typeNames.push(data.results[i].name);
      }

      setPokeTypeNames(typeNames);

    })

       //get type amounts

    let typeAmounts = [];
      for(let i=0; i<(19);i++){
        axios.get('https://pokeapi.co/api/v2/type/'+i+"/") //This is to get the Number of tpes
        .then((res)=>{
          let data=res.data;
          typeAmounts.push(data.pokemon.length);

          
        })
      }

      setPokemonTypeAmounts(typeAmounts);


   

    
  
    
    
  }, [])


  // console.log(pokemonTypeAmounts);

let labels =pokeTypeNames;




    return(
        <>
      <div className="componentInteriorBar">
            <h3>Pokemon Types</h3>

            <div className="ComparsionGraph">
            <Bar 
           
            data={{
              
               
                labels:pokeTypeNames,
                
                datasets: [{
                  // barPercentage: 2,
                  // barThickness: 8,
                 
                    label: ' ',
                    minBarLength: 20,
                    data: pokemonTypeAmounts,
                    backgroundColor: [
                        '#E9C46A',
                                              
                    ],
                   
                   
                   
                    borderRadius: 2,
                    hoverBorderColor: [
                        '#E9C46A',
                        
                    ],
                                       
                      
                      
                    
                },
                
                
            
            ],
            
            }
        
        
        } 
            
            height={400} 
            width={600} 
            options={{ maintainAspectRatio: true, 
              // indexAxis: 'y',
             
    
                plugins: {
                  legend: false,
                  outlabels: {
                    //  text: '%l %p',
                     color: '#2b2b2b',
                     stretch: 45,
                     font: {
                         resizable: true,
                         minSize: 12,
                         maxSize: 18
                     }
                  }
               },
                scales: {
    
                    x: {
                      ticks: {
                        autoSkip: false,
                        beginAtZero: true,
                       
                       
                        
                      },
                        grid: {
                            display:false
                        }
                    },
                    y:         
                        {
                          stacked: true,
                          ticks: {
                            autoSkip: false,
                          
                           
                          },
                          grid: {
                            display:false,
                          }
                        }
                      ,
                
            }}}
            
            
            />

            </div>





        </div>
        </>
    );

}

export default DashBarChart