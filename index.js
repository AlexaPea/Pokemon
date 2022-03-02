
    const API4 = 'https://pokeapi.co/api/v2/pokemon/';

    $.getJSON(API4, function(result){
        console.log(result);
    });

    const API5 = 'https://pokeapi.co/api/v2';

    $.getJSON(API5, function(result){
        console.log(result);
    });