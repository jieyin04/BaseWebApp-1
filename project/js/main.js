// P.getPokemonByName('eevee') // with Promise
//     .then(function(response) {
//       console.log(response);
//     });


 function refresh(){
	var pokemonA = Math.floor((Math.random() * 151) + 1);
	getPokemonA(pokemonA);
}

 $(document).ready(function (){
 	refresh();
})

function getPokemonA(pokemonA){

	P.getPokemonByName(pokemonA) // with Promise
    .then(function(response) {
      console.log(response);
      
      // $(".pokemon_ID").text("No."+response.id);
      // $(".pokemon_NAME").text(response.name);
      // $(".image").html("<img src='"+response.sprites.front_default+"'>")
      
      if (response.types.length === 1) {
      	$(".pokemon_SPECIES").text(response.types[0].type.name +" Pokémon");
      } 
      else {
      	$(".pokemon_SPECIES").text(response.types[0].type.name +" & "+response.types[1].type.name +" Pokémon");
      	}
      
	  $(".pokemon_HEIGHT").text(response.height*10 +" cm");
      $(".pokemon_WEIGHT").text(response.weight/10 + ' kg');
      $(".ability").text(response.abilities[0].ability.name);

      var moveset = Math.floor(Math.random() * response.moves.length);
      $(".moveset").text(response.moves[moveset].move.name);

    });

}

function checkGuess (pokemonA) {	
	console.log(pokemonA);
    };
