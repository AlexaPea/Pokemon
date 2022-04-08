import 'chart.js/auto';
import React from "react";
import { Bar, Radar } from 'react-chartjs-2';
import axios from 'axios';

import {useState, useRef, useEffect} from 'react';
//const (pokemon,setPokeon) =useState([]);
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const CompareChart = (props) =>{

  console.log(props.val);
console.log(props.val2);


const data = {
  labels:props.labels,
  datasets: [{
      label: 'Pokemon 1',
      minBarLength: 20,
      data: props.val,
      border: 'none',
      backgroundColor: 'rgb(42, 157, 143, 0.3)',
      pointStyle: 'line',
      
  },
  {
    label: 'Pokemon 2',
    minBarLength: 20,
    data: (props?.val2),
    backgroundColor: 'rgb(236, 123, 82, 0.3)',
    pointStyle: 'line',
    border: 'none'
},
  
  

],

}


    return(
        <>
        <div className="componentInteriorRadar">
              <h3>Lets Compare!</h3>
  
              <div className="Stats Comparison">

                
              <Radar data={data}
              
              
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
