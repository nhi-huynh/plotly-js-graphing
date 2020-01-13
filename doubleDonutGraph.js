function plotDoubleDonutGraph(){

    var data = [{
        values: [55, 25, 10, 5, 5],
        labels: ['Adults', 'Children', 'Bikes', 'Pets', 'Other'],
        text: '2019',
        textposition: 'inside',
        domain: {column: 0},
        name: '% of all visits',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie'
      },{
        values: [50, 20, 15, 10, 5],
        labels: ['Adults', 'Children', 'Bikes', 'Pets', 'Other'],
        text: '2020',
        textposition: 'inside',
        domain: {column: 1},
        name: '% of all visits',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie'
      }];
      
    var layout = {
        title: 'Visitors in 2019 vs 2020',
        annotations: [
            {
            font: {
                size: 20
            },
            showarrow: false,
            text: '2019',
            x: 0.17,
            y: 0.5
            },
            {
            font: {
                size: 20
            },
            showarrow: false,
            text: '2020',
            x: 0.82,
            y: 0.5
            }
        ],
        height: 400,
        width: 600,
        showlegend: false,
        grid: {rows: 1, columns: 2}
    };
    
    Plotly.plot('double-donut-graph', data, layout, {responsive: true});
}
