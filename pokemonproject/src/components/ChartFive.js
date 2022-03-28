
import 'chart.js/auto';
import React from "react";
import { Line } from 'react-chartjs-2';

const ChartFive = () =>{
    return(
        <>
        <div className="componentInteriorLine">
              <h3>Chart 5: Line Graph</h3>
              
  
              <div className="SRC Elections">
              <Line 

                
              
              data={{
                
                 colour:'white',
                  labels: ['Jessica', 'Ren', 'Tate', 'James', 'Olivia', 'Jarrett'],
                  datasets: [{
                    label: 'SRC Election Candidates',
                    fontColor: 'white',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'white',
                    tension: 0.1
                      
                  },
                 
                  
                  
              
              ],
              
              
              
              }} 
              
              height={400} 
              width={600} 
             

              options={{ maintainAspectRatio: true,
                plugins: {  // 'legend' now within object 'plugins {}'
                  legend: {
                    labels: {
                      boxWidth: 0,
                      color: "white",  // not 'fontColor:' anymore
                      // fontSize: 18  // not 'fontSize:' anymore
                      font: {
                        size: 18 // 'size' now within object 'font {}'
             
                        
                      }
                    }
                  }
                },
              
                animations: {
                  tension: {
                    duration: 3000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                  }
                },
                scales: {
                  y: { // defining min and max so hiding the dataset does not change scale range
                    min: 0,
                    max: 100
                  }
                },
                   
                backgroundColor:"white",
                
                  scales: {
      
                      x: {
                        
                      ticks: {
                        color: 'white'
                      },
                          grid: {
                              display:false,
                              borderColor: 'white'
                             
                          }
                          
                      },
                      y: 
                          {
                            ticks: {
                              color: 'white'
                            },
                            grid: {
                              display:false,
                              borderColor: 'white',
                              min:1,
                             max:100
                            }
                          }
                        ,
                        
                        
                  
                  
              
                      }
                     
                    
                    }}
              
              
              /> 
  
              </div>
  
  
  
  
  
          </div>
          </>
    );

}

export default ChartFive