$(document).ready(tomarNumero);{
    function tomarNumero(){
        var  numeroConsulta = $('#numeroConsulta').val();
        console.log(numeroConsulta);

        var pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/' + numeroConsulta;

        $.getJSON(pokeapiUrl).done(function(data){
            console.log(data);
            var array = []
            for(let i=0; i<data.stats.length; i++){
                array[i] = {y:data.stats[i].base_stat, label: data.stats[i].stat.name}
            }
            $('#img').attr('src', data.sprites.front_default);
            $('#info-name').text(data.species.name);
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                theme: "light1", // "light1", "light2", "dark1", "dark2"
                title:{
                    text: "Stats Base"
                },
                axisY: {
                    title: "Value"
                },
                data: [{        
                    type: "column",  
                    showInLegend: true, 
                    legendMarkerColor: "grey",
                    legendText: "Stats",
                    dataPoints: array
                }]
            });
            chart.render();
        });
        
    }
    
}