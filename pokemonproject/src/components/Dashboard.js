import anxios from "axios";

anxios.get('https://pokeapi.co/api/v2')
.then((response) => { 
    console.log(response);
})
.catch((err) =>{
    console.log(err);
});

const Dashboard = () => {

    return(
        <>
        </>
    );


}
export default Dashboard