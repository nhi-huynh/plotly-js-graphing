function plotPeopleBarGraph(startDate){
    console.log('Receive start date as ' + startDate);

    startDate = new Date(startDate);

    console.log('Record start date as ' + startDate);

    var interval = 7;
    var endDate = startDate;
    var xValue = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    for (i = 0; i < interval; i++) {
        endDate.setDate(endDate.getDate() + 1)
        xValue[i] = endDate.toLocaleDateString();
    }
    
    var yValue = [20, 14, 23, 18, 25, 60, 57];

    var trace1 = {
        x: xValue,
        y: yValue,
        type: 'bar',
        text: yValue.map(String),
        textposition: 'outside',  
        textfont: {
            color: 'rgb(0,0,0)'
        },
        hoverinfo: 'none',
        opacity: 0.5,
        marker: {
            color: 'rgb(158,202,225)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Total people count from ' + xValue[0] +
        ' to ' + xValue[interval-1]
    };

    Plotly.newPlot('people-bar-graph', data, layout);

    var graphDiv = document.getElementById('people-bar-graph');

    console.log('Data of the people plot');
    console.log(graphDiv.data);

    console.log('Layout of the people plot');
    console.log(graphDiv.layout);


}
