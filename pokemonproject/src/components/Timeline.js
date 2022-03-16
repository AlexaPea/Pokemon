import anxios from "axios";

anxios.get('https://pokeapi.co/api/v2')
.then((response) => { 
    console.log(response);
})
.catch((err) =>{
    console.log(err);
});

const Timeline = () => {

    return(
        <>
           <div className="BodyBox">
            <div className="TextContainers">
                <h1>Totodile Timeline</h1>
                <p>Here is a summary of the informations our website provides!We aim to give our fellow Pokemon trainers all the information they need to become a Pokemon master!</p>  
            </div>
           
            
        </div>
        </>
    );


}
export default Timeline