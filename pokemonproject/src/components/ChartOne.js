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
const ChartOne = (props) =>{

  const [pokemonName, setPokemonName]= useState("");
 


    return(
        <>
      <div className="componentInteriorBar">
            <h3>Stats</h3>

            <div className="ComparsionGraph">
            <Bar 
            data={{
               
               
              labels: props.labels,
                datasets: [{
                    label: '  ',
                    
                    minBarLength: 20,
                    data: (props.value1),
                    backgroundColor: [
                        'rgb(42, 157, 143)',
                        'rgb(42, 157, 143)',
                        'rgb(42, 157, 143)',
                        'rgb(42, 157, 143)',
                        'rgb(42, 157, 143)',
                        'rgb(42, 157, 143)',
                      
                        
                    ],
                    borderColor: [
                      'rgb(42, 157, 143)',
                      'rgb(42, 157, 143)',
                      'rgb(42, 157, 143)',
                      'rgb(42, 157, 143)',
                      'rgb(42, 157, 143)',
                      'rgb(42, 157, 143)',
                    ],
                    borderWidth: 0,
                    borderRadius: 5,
                    hoverBorderColor: [
                        'rgb(236, 123, 82)',
                        'rgb(236, 123, 82)',
                        'rgb(236, 123, 82)',
                        'rgb(236, 123, 82)',
                        'rgb(236, 123, 82)',
                        'rgb(236, 123, 82)',
                    ],
                                       
                      
                      
                    
                },
                
                
            
            ],
            
            }
        
        
        } 
            
            height={400} 
            width={600} 
            options={{ maintainAspectRatio: true, 
              indexAxis: 'y',
        
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
                        grid: {
                            display:false
                        }
                    },
                    y: 
                        {
                          grid: {
                            display:false
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

export default ChartOne