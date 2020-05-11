/**
 *Parte 1
 */
// var ctx = document.querySelector('#myChart');

// var chart = ctx.getContext('2d');

// chart.fillStyle = "red";
// chart.fillRect(0,0,100,200);

// chart.fillStyle = "blue";
// chart.fillRect(150,0,100,200);

/**
 * Parte 2
 */
// var teste = [12, 19, 3, 5, 2, 3]
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        
        
//         datasets: [{
//             label: '# of Votes',
//             data: teste,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]

//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

/**
 * Parte 3
 */
$('document').ready(function () {
      $.ajax({
        type: "POST",
        url: "chart.php",
        dataType: "json",
        success: function(data){
            var nomearray = [];
            var vendasarray = [];
            for(var i in data) {
                nomearray.push(data[i].nome);
                vendasarray.push(data[i].vendas);
            }
            grafico(nomearray, vendasarray);
        }
    });
})

function grafico (nomes, vendas) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        // type: 'doughnut',
        type: 'pie',
        // type: 'bar',
        data: {
            labels: nomes,
            
            
            datasets: [{
                label: 'Nº de vendas',
                data: vendas,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
    
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }); 
}
