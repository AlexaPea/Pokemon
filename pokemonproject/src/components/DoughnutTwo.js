import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import React from "react";
import {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import Comparisons from './Comparison.js'


const ChartTwo = (props) =>{

    const [captureRate, setCaptureRate] = useState([]);
    const [percentageRate, setPercentageRate] = useState();
    // const [lossRate, setLossRate] = useState();

    console.log("run");

    useEffect(() => {

        let capture=[];
        let notCapture=0;
        console.log((props.value1).current.value);
        axios.get('https://pokeapi.co/api/v2/pokemon-species/'+((props.value1).current.value)+'/')
        .then((res)=>{
    
          let data=res.data;

          capture[0] = data.capture_rate;
          capture[1] = 255 - (data.capture_rate);

          let percentage = Math.round(((data.capture_rate)/255)*100);

         
        //   console.log(data.capture_rate);
        //  console.log("run");
        //   notCapture = 255-(capture);

          setCaptureRate(capture);
          setPercentageRate(percentage);
          <Comparisons numVal={this.percentageRate}/>;
      
    
        })

        
        
        
      
      }, []);

      console.log(percentageRate);
     


    return(
        <>
        <div className="componentInteriorDoughnut">
              {/* <h3>Chart 2: Doughnut Chart</h3> */}
  
              <div className="CaptureRate">
              <Doughnut 
              data={{
                 
                  labels: ['Captured', 'Not Captured'],
                  datasets: [{
                      label: 'Capture Rate',
                      data: captureRate,
                      backgroundColor: [
                        'rgb(236, 123, 82)',
                        '#f1f1f1',
                       
                      ],
                    
                      borderWidth: 0,
                    //   borderRadius:10,
                      
                
                      
                      
                  },
                  
                  
              
              ],
              
              }} 
              
              height={400} 
              width={600} 
              options={{maintainAspectRatio: true,
                width:200,
                cutout: 60,
            
                plugins: {
                    legend: {
                      display:false,
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