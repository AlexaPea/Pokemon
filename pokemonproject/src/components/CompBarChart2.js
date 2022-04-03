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
const CompBarChart2 = (props) =>{

  const [pokemonName, setPokemonName]= useState("");

  useEffect(() => {

    axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then((res)=>{

      let data=res.data;
      console.log(data);

      
     


    })
  }, [])


    return(
        <>
      <div className="componentInteriorBar">
            <h3>Stats</h3>

            <div className="Base Stats">
            <Bar 
            data={{
               
              
                
              datasets: [{
                  label: 'Base Stats',
                  // labels: ['HP', 'Attack', 'Defense', 'Speed', 'Special Attack', 'Special Defense'],
                  minBarLength: 20,
                  data: props.value,
                  backgroundColor: [
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                      
                  ],
                  borderColor: [
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                      'rgb(236, 123, 82)',
                  ],
                  borderWidth: 2,
                  borderRadius: 10,
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

export default CompBarChart2