import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import React from "react";


const ChartTwo = () =>{
    return(
        <>
        <div className="componentInteriorDoughnut">
              <h3>Chart 2: Doughnut Chart</h3>
  
              <div className="SRC Elections">
              <Doughnut 
              data={{
                 
                  labels: ['Jessica', 'Ren', 'Tate', 'James', 'Olivia', 'Jarrett'],
                  datasets: [{
                      label: '# of Votes',
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                        '#264653',
                        '#2A9D8F',
                        '#E9C46A', 
                        '#F4A261',
                        '#E76F51',
                        '#BC412B',
                      ],
                      borderColor: [
                        '#264653',
                        '#2A9D8F',
                        '#E9C46A', 
                        '#F4A261',
                        '#E76F51',
                        '#BC412B',
                      ],
                      borderWidth: 1,
                      
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
              options={{maintainAspectRatio: true,
            
                plugins: {
                    legend: {
                      position: 'left',
                      align: 'center'
                    }
                  }}
            }
              
              
              />
  
              </div>
  
  
  
  
  
          </div>
          </>
    );

}

export default ChartTwo