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

  useEffect(() => {

    let types = [];
    for (let i = 1; i <= 887; i++) {
      
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
      <div className="componentInteriorBar">
            <h3>Pokemon Types</h3>

            <div className="ComparsionGraph">
            <Bar 
           
            data={{
               
                labels:labels,
                
                datasets: [{
                  // barPercentage: 2,
                  // barThickness: 8,
                 
                    label: ' ',
                    minBarLength: 20,
                    data: amounts,
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
             

        
                plugins: {  // 'legend' now within object 'plugins {}'
                    legend: {
                      labels: {
                        boxWidth: 0,
                       
                        font: {
                          size: 18 // 'size' now within object 'font {}'
               
                          
                        }
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