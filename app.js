$(document).ready(tomarNumero);{
    function tomarNumero(){
        var  numeroConsulta = $('#numeroConsulta').val();
        console.log(numeroConsulta);

        var pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/' + numeroConsulta;

        $.getJSON(pokeapiUrl).done(function(data){
            console.log(data);
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
                    dataPoints: [    
                        { y: (data.stats[0].base_stat), label: (data.stats[0].stat.name) },
                        { y: (data.stats[1].base_stat), label: (data.stats[1].stat.name) },
                        { y: (data.stats[2].base_stat), label: (data.stats[2].stat.name) },
                        { y: (data.stats[3].base_stat), label: (data.stats[3].stat.name) },
                        { y: (data.stats[4].base_stat), label: (data.stats[4].stat.name) },
                        { y: (data.stats[5].base_stat), label: (data.stats[5].stat.name) },
                    ]
                }]


            });
            chart.render();
        });



        
        

        
    }
    
}
// https://pokeapi.co/api/v2/pokemon/1