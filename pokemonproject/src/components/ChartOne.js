import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import 'chart.js/auto';
import React from "react";
import { Bar } from 'react-chartjs-2';

const ChartOne = () =>{
    return(
        <>
      <div className="componentInteriorBar">
            <h3>Chart 1: Bar Graph</h3>

            <div className="SRC Elections">
            <Bar 
            data={{
               
                labels: ['Jessica', 'Ren', 'Tate', 'James', 'Olivia', 'Jarrett'],
                
                datasets: [{
                    label: 'Votes',
                    minBarLength: 20,
                    data: [12, 19, 3, 5, 2, 3],
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

export default ChartOne