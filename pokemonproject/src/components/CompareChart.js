import 'chart.js/auto';
import React from "react";
import { Radar } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useState, useRef, useEffect} from 'react';
//const (pokemon,setPokeon) =useState([]);

const CompareChart = (props) =>{

  console.log(props.val);
console.log(props.val2);


    return(
        <>
        <div className="componentInteriorRadar">
              <h3>Lets Compare!</h3>
  
              <div className="Stats Comparison">

                {/* <h1>{props.val}</h1> */}
              <Radar 
              data={{
                  // labels:[Object.keys(props.val)],
                  datasets: [{
                      label: 'Pokemon 1',
                      minBarLength: 20,
                      // data: [Object.val(props.val)],
                      border: 'none',
                      backgroundColor: 'rgb(236, 123, 82, 0.3)',
                      pointStyle: 'line',
                      
                  },
                  {
                    label: 'Pokemon 2',
                    minBarLength: 20,
                    // data: (props?.val2),
                    backgroundColor: 'rgb(42, 157, 143, 0.3)',
                    pointStyle: 'line',
                    border: 'none'
                },
                  
                  
              
              ],
              
              }} 
              
              height={400} 
              width={600} 
              options={{maintainAspectRatio: true,
                plugins: {  // 'legend' now within object 'plugins {}'
                    legend: {
                      labels: {
                        boxWidth: 3,
                        border: 0,
                       
                        font: {
                          size: 12 // 'size' now within object 'font {}'
               
                          
                        }
                      }
                    }
                  },
                
                }}
              
              
              />
  
              </div>
  
  
  
  
  
          </div>
          </>
    );

}

export default CompareChart
