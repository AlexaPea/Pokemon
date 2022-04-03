import 'chart.js/auto';
import React from "react";
import { Bar, Bubble, Doughnut, Pie, PolarArea, Scatter } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useState, useRef, useEffect} from 'react';


const ChartTwo = () =>{

  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonTypeAmounts, setPokemonTypeAmounts] = useState([]);

  useEffect(() => {

    let types = [];
    for (let i = 1; i <= 250; i++) {
      
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      fetch(url)
        .then(res => res.json())
        .then(pokemon => {
        
          types[i]=pokemon.types[0].type.name;

   
        });
    }

    setPokemonTypes(types);

    
    let counts = {};
    pokemonTypes.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });


    setPokemonTypeAmounts(counts);
    
    
  }, [])
  // console.log(pokemonTypeAmounts);
  console.log(pokemonTypeAmounts);
  console.log(pokemonTypeAmounts);
let labels =Object.keys(pokemonTypeAmounts);
let amounts = Object.values(pokemonTypeAmounts);

    return(
        <>
        <div className="componentInteriorDoughnut">
              <h3>Pokemon Types</h3>
  
              <div className="types">
              <Bar 
              data={{
                 
                 labels: Object.keys(pokemonTypeAmounts),
                  datasets: [{
                      // label: 'Types',
                      data: amounts,
                      backgroundColor: [
                        '#264653',
                        '#2A9D8F',
                        '#E9C46A', 
                        '#F4A261',
                        '#E76F51',
                        '#BC412B',
                      ],
                      // borderColor: [
                      //   '#264653',
                      //   '#2A9D8F',
                      //   '#E9C46A', 
                      //   '#F4A261',
                      //   '#E76F51',
                      //   '#BC412B',
                      // ],
                     
                      
                      // hoverBorderColor: [
                      //   '#264653',
                      //   '#2A9D8F',
                      //   '#E9C46A', 
                      //   '#F4A261',
                      //   '#E76F51',
                      //   '#BC412B',
                      // ],
                      
                      
                  },
                  
                  
              
              ],
              
              }} 
              
              height={400} 
              width={600} 
              options={{maintainAspectRatio: true,
            
                plugins: {
                    legend: {
                      position: 'left',
                      align: 'center'
                    }
                  }}
            }
              
              
              />
  
              </div>
  
  
  
  
  
          </div>
          </>
    );

}

export default ChartTwo