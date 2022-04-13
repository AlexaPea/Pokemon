import { Doughnut, Bar } from "react-chartjs-2";
import 'chart.js/auto';
import React from "react";
import {useState, useRef, useEffect} from 'react';
import axios from 'axios';


const ChartTwo = (props) =>{


  const [captureRate, setCaptureRate] = useState([]);
  const [percentageRate, setPercentageRate] = useState();
  const [moreInfoAdd, setMoreInfoAdd] = useState();

    console.log("run");

   
    
    let capture=[];
    let notCapture=0;
    
    let percentage =0;

        useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon-species/'+(props.nameForRate)+'/')
        .then((res)=>{
    
          let data=res.data;

          capture[0] = data.capture_rate;
          capture[1] = 255 - (data.capture_rate);

       
        
         
           
          setCaptureRate(capture);

          percentage = Math.round(((data.capture_rate)/255)*100);
          console.log(percentage);
          setPercentageRate(percentage);
          let moreinfo='';


          if(percentageRate <= 20){
            moreinfo = "This Pokemon is very difficult to catch!";
            setMoreInfoAdd(moreinfo);
          }else if(percentageRate <= 50){
            moreinfo = "This is not the easiest Pokemon to catch!";
            setMoreInfoAdd(moreinfo);
          }else if(percentageRate <= 70){
            moreinfo = "This is Pokemon is easier to catch!";
            setMoreInfoAdd(moreinfo);
          }
          else if(percentageRate <= 80){
            moreinfo = "This is Pokemon is easy to catch!";
            setMoreInfoAdd(moreinfo);
          }else if(percentageRate <= 100){
            moreinfo = "This Pokemon is impossible to miss!";
            setMoreInfoAdd(moreinfo);
          }

      
         
    
        });

        
        
        
       }, [props.nameForRate]);




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
                        'rgb(42, 157, 143)',
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
                responsive: true,
             
                cutout: 60,
            
                plugins: {
                    legend: {
                      display:false,
                    }
                  }}
            }
              
              
              />
               <div className="dynaText">
                 <h5 className="perc"> {percentageRate} % </h5>
                            <hr class="underNum"/>
                            <br/>
                            <p>{moreInfoAdd}</p>
                            </div>
  
           
  
  
  
              </div>
  
  
  
  
  
          </div>
          </>
    );

}

export default ChartTwo