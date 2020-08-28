$(document).ready(tomarNumero);{
    function tomarNumero(){
        var  numeroConsulta = $('#numeroConsulta').val();
        console.log(numeroConsulta);

        var pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/' + numeroConsulta;

        $.getJSON(pokeapiUrl).done(function(data){
            console.log(data);
            $('#img').attr('src', data.sprites.front_default);
            $('#info').text(data.species.name);
        });
    }
    
}
// https://pokeapi.co/api/v2/pokemon/1