
import 'chart.js/auto';
import React from "react";
import { Line } from 'react-chartjs-2';



const ChartFive = (props) =>{

  

  console.log(props.exValue);
  console.log(props.levelValue);



    return(
        <>
        <div className="componentInteriorLine">
              {/* <h3>Growth Rates</h3> */}
              
  
            
              <Line 

                
              
              data={{
                
                 colour:'white',
                  labels: (props.val2),
                  datasets: [{
                    label: 'Growth Rate',
                    fontColor: 'white',
                    data: (props.val1),
                    fill: false,
                    borderColor: 'white',
                    tension: 0.1
                      
                  },
                 
                  
                  
              
              ],
              
              
              
              }} 
              
              height={400} 
              width={600} 
             

              options={{ maintainAspectRatio: true,
                responsive: true,
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
  
  
  
  
  
          </>
    );

}

export default ChartFive