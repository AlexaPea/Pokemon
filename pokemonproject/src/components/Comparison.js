import ChartOne from './ChartOne.js';
import ChartTwo from './ChartTwo.js';
import ChartThree from './ChartThree.js';
const Comparisons = () => {

    return(
        <>
           <div className="BodyBox">
            <div className="TextContainers">
                <h1>Cradily Comparisons</h1>
                <p>Here is a summary of the informations our website provides!We aim to give our fellow Pokemon trainers all the information they need to become a Pokemon master!</p>  
            </div>

            <div className='contentContainer'>

            <div className="BarGraph_Comp">
                    <ChartOne/>
                </div>
                <div className="DoughnutGraph_Comp">
                    <ChartTwo/>
                </div>
                <div className="RadarGraph_Comp">
                    <ChartThree/>
                </div>
               





            </div>
           
            
        </div>
        </>
    );


}
export default Comparisons