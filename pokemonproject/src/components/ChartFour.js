import 'chart.js/auto';
import React from "react";

import { Bar, Bubble, Doughnut, Pie, PolarArea, Scatter } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useState, useRef, useEffect} from 'react';

const ChartFour = () =>{


  const [habitatAmount, setHabitatAmounts] = useState([]);
  const [habitat, setHabitat] =useState([]);

  useEffect(() => {

   //get type names
    axios.get('https://pokeapi.co/api/v2/pokemon-habitat/') //This is to get the Number of tpes
    .then((res)=>{

      let data=res.data;
      let habitatNames = [];

      for(let i=0; i<((data.count)-2);i++){
        habitatNames.push(data.results[i].name);
      }

      setHabitat(habitatNames);

    })

       //get type amounts

    let habitatAmounts = [];
      for(let i=0; i<(19);i++){
        axios.get('https://pokeapi.co/api/v2/pokemon-habitat/'+i+"/") //This is to get the Number of tpes
        .then((res)=>{
          let data=res.data;
          habitatAmounts.push(data.pokemon_species.length);

          
        })
      }

      setHabitatAmounts(habitatAmounts);


   

    
  
    
    
  }, [])

    return(
        <>
        <div className="componentInteriorPolar">
              <h3>Pokemon Habitats</h3>
  
              <div className="PolarChart">
              <PolarArea
              data={{
                 
                  labels: habitat,
                  datasets: [{
                      
                      minBarLength: 20,
                      data: habitatAmount,
                      backgroundColor: [
                        '#264653',
                        '#2A9D8F',
                        '#E9C46A', 
                        '#F4A261',
                        '#E76F51',
                        '#BC412B',
                      ],
                     
                      borderWidth: 2 ,
                                    
                      hoverBorderColor: [
                        '#264653',
                        '#2A9D8F',
                        '#E9C46A', 
                        '#F4A261',
                        '#E76F51',
                        '#BC412B',
                      ],
                 
                      
                  },
                  
                  
              
              ],
              
              }} 
              
              height={400} 
              width={600} 
              options={{maintainAspectRatio: false,

                animation: {
                    animateScale:false
                },
               
                
                plugins: {
                legend: {
                  display: false
                }
              } ,
              scales: {
                r: {
                    startAngle: 0,
                    ticks: {        
                      display: false,
                      max: 10,
                    beginAtZero: true,
                    min: 1,
                    stepSize: 20,

                    },
                    pointLabels: {
                      display: true
                    }},
                  
                    
                    
              }}
              
            }
            
              
              
              />
  
              </div>
  
  
  
  
  
          </div>
          </>
    );

}

export default ChartFour