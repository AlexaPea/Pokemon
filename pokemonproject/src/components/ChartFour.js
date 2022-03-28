import 'chart.js/auto';
import React from "react";
import { PolarArea } from 'react-chartjs-2';

const ChartFour = () =>{
    return(
        <>
        <div className="componentInteriorPolar">
              <h3>Chart 4: Polar Area Chart</h3>
  
              <div className="SRC Elections">
              <PolarArea 
              data={{
                 
                  labels: ['Jessica', 'Ren', 'Tate', 'James', 'Olivia', 'Jarrett'],
                  datasets: [{
                      label: '# of Votes',
                      minBarLength: 20,
                      data: [12, 19, 3, 5, 2, 3],
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
                  position: 'left',
                  align: 'center'
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
                    stepSize: 5,

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