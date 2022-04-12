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

//   console.log(props.val);
// console.log(props.val2);


const data = {
  labels:props.labels,
  datasets: [ {
    label: ' ',
    minBarLength: 20,
    data: (props?.val2),
    borderColor:'rgb(236, 123, 82)',
    backgroundColor: 'rgb(236, 123, 82,0.2)',
    pointStyle: 'line',
    borderWidth: 1,
    // fillOpacity: 0.2, strokeWidth: 1,lineTension: 0.2
},{
      label: '  ',
      minBarLength: 20,
      data: props.val,
      borderColor:'rgb(42, 157, 143)',
      borderWidth: 1,
      backgroundColor: 'rgb(42, 157, 143,0.2)',
      pointStyle: 'line',
      // fillOpacity: 0.2, strokeWidth: 1, lineTension: 0.2
      
  },
 
  
  

],


}




    return(
        <>
        <div className="componentInteriorRadar">
              <h3>Lets Battle!</h3>
  
              <div className="Stats Comparison">

                
              <Radar className="radar" data={data}
              
              
              height={400} 
              width={600} 
              options={{maintainAspectRatio: true,
                plugins: {  // 'legend' now within object 'plugins {}'
                    legend: {
                      labels: {
                        boxWidth: 0,
                        border: 0,
                       display: false,
                       
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
