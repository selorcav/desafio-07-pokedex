$(document).ready(tomarNumero);{
    function tomarNumero(){
        var  numeroConsulta = $('#numeroConsulta').val();
        console.log(numeroConsulta);

        var pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/' + numeroConsulta;

        $.getJSON(pokeapiUrl).done(function(data){
            console.log(data);
        });
        
    }
    
}
// https://pokeapi.co/api/v2/pokemon/1