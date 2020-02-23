// P.getPokemonByName('eevee') // with Promise
//     .then(function(response) {
//       console.log(response);
//     });

var pokemonA;

 $(document).ready(function (){
 	refresh();
})


 function refresh(){
	var pokemonA = Math.floor((Math.random() * 151) + 1);
	getPokemonA(pokemonA);
	$(".answer").hide();
	$(".newhint").hide();
	$(".unknown").show();
	$("#playerGuess").val("");
	$("#buttonA").attr("disabled", false);
	$("#buttonB").attr("disabled", false);
	$(".results").text("Who's that Pokémon?");
}

function getPokemonA(pokemonA){

	P.getPokemonByName(pokemonA) // with Promise
    .then(function(response) {
      console.log(response);
      console.log(response.name);
      
      $(".pokemon_ID").text("No."+response.id);
      $(".pokemon_NAME").text(response.name);
      $(".pokemon_IMAGE").html("<img src='"+response.sprites.front_default+"'>")
      
      if (response.types.length === 1) {
      	$(".pokemon_SPECIES").text(response.types[0].type.name +" Pokémon");
      } 
      else {
      	$(".pokemon_SPECIES").text(response.types[0].type.name +" & "+response.types[1].type.name +" Pokémon");
      	}
      
	  $(".pokemon_HEIGHT").text(response.height*10 +" cm");
      $(".pokemon_WEIGHT").text(response.weight/10 + ' kg');

      var ability = Math.floor(Math.random() * response.abilities.length);
      $(".ability").text(response.abilities[ability].ability.name);

      var moveset = Math.floor(Math.random() * response.moves.length);
      $(".moveset").text(response.moves[moveset].move.name);

      var moveset_two = Math.floor(Math.random() * response.moves.length);
      if (moveset_two === moveset) {
      	moveset_two = Math.floor(Math.random() * response.moves.length);
      }
      $(".moveset_2").text(response.moves[moveset_two].move.name);

    });

}

function reveal() {
	$(".unknown").hide();
	$(".answer").show();
	$(".results").text("better luck next time");
	$("#buttonA").attr("disabled", true);
	$("#buttonB").attr("disabled", true);
}

function checkGuess () {
	var playerGuess = $("#playerGuess").val();	
	var lcGuess = playerGuess.toLowerCase();
	console.log(lcGuess);
	console.log($(".pokemon_NAME").text());

	if (lcGuess === $(".pokemon_NAME").text()){
		$(".unknown").hide();
		$(".answer").show();
		$("#playerGuess").val("");
		$(".results").text("that's right!");
		$("#buttonA").attr("disabled", true);
		$("#buttonB").attr("disabled", true);
	} else {
		$("#playerGuess").val("");
		$(".newhint").show();
		$(".results").text("please try again");
	}
 }




