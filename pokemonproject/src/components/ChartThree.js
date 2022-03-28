import 'chart.js/auto';
import React from "react";
import { Radar } from 'react-chartjs-2';

const ChartThree = () =>{
    return(
        <>
        <div className="componentInteriorRadar">
              <h3>Chart 3: Radar Chart</h3>
  
              <div className="SRC Elections">
              <Radar 
              data={{
                 
                  labels: ['Jessica', 'Ren', 'Tate', 'James', 'Olivia', 'Jarrett'],
                  datasets: [{
                      label: 'Title',
                      minBarLength: 20,
                      data: [12, 19, 10, 15, 11, 13],
                     
                      borderColor: [
                        '#264653',
                        '#2A9D8F',
                        '#E9C46A', 
                        '#F4A261',
                        '#E76F51',
                        '#BC412B',
                      ],
                      borderWidth: 1,
                      borderRadius: 20,
                      hoverBorderColor: [
                        '#264653',
                        '#2A9D8F',
                        '#E9C46A', 
                        '#F4A261',
                        '#E76F51',
                        '#BC412B',
                      ],
                      pointStyle: 'circle',
                      
                  },
                  
                  
              
              ],
              
              }} 
              
              height={400} 
              width={600} 
              options={{maintainAspectRatio: true,
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
                
                }}
              
              
              />
  
              </div>
  
  
  
  
  
          </div>
          </>
    );

}

export default ChartThree
