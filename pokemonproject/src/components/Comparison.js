import ChartOne from './ChartOne.js';
import ChartTwo from './ChartTwo.js';
import ChartThree from './ChartThree.js';
import ChartFour from './ChartFour.js';
const Comparisons = () => {

    return(
        <>
           <div className="BodyBox Comparisons">
            <div className="TextContainers">
                <h1>Cradily Comparisons</h1>
                <p>Select any Pokemon of your choosing and compare their abilities! Lets see who would win in battle - better be prepared for your next tournament!</p>  
            </div>

            <div className='contentContainer'>
                <div className='left-panel'>
                    <div className='selectOption'>
                        <select>
                            <option>Choose Pokemon</option>
                        </select>
                    </div>
                    <div className='abilityGraph'>
                        <div className="BarGraph_Comp">
                            <ChartOne/>
                        </div>
                    </div>
                    <div className='pokemonInfo'>
                      <h3>Pokemon Information</h3>
                      <p><strong>Type:</strong></p>
                      <p><strong>Pokedex ID:</strong></p>
                      <p><strong>Height:</strong></p>
                      <p><strong>Weight:</strong></p>
                    </div>


                </div>

                <div className='center-panel'>
                    <div className="RadarGraph_Comp">
                         <ChartThree/>
                    </div>
                    <div className="RadarGraph_Comp">
                         <ChartFour/>
                    </div>

                </div>

                <div className='right-panel'>
                    <div className='selectOption'>
                        <select>
                            <option>Choose Pokemon</option>
                        </select>
                    </div>
                    <div className='abilityGraph'>
                        <div className="BarGraph_Comp">
                            <ChartOne/>
                        </div>
                    </div>
                    <div className='pokemonInfo'>
                      <h3>Pokemon Information</h3>
                      <p><strong>Type:</strong></p>
                      <p><strong>Pokedex ID:</strong></p>
                      <p><strong>Height:</strong></p>
                      <p><strong>Weight:</strong></p>
                    </div>


                </div>
               
               

            
                {/* <div className="DoughnutGraph_Comp">
                    <ChartTwo/>
                </div>
                <div className="RadarGraph_Comp">
                    <ChartThree/>
                </div> */}
               





            </div>
           
            
        </div>
        </>
    );


}
export default Comparisons