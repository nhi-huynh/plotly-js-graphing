function plotDoubleBarGraph(){
    var trace1 = {
        // Define the dates
        x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        
        // Define the values
        y: [219, 146, 112, 127, 124, 180, 236, 207, 236, 263, 350, 430, 474, 526, 488, 537, 500, 439],
        
        // Name of the first bar chart
        name: 'Temperature',
    
        // Color of the first bar chart
        marker: {color: 'rgb(55, 83, 109)'},
    
        // Type of the chart
        type: 'bar'
      };
      
    var trace2 = {
        // Define the dates
        x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        
        // Define the values
        y: [16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270, 299, 340, 403, 549, 499],
        
        // Name of the second bar chart
        name: 'Rainfall',
    
        // Color of the second bar chart
        marker: {color: 'rgb(26, 118, 255)'},
    
        // Type of the chart
        type: 'bar'
    };
    
    var data = [trace1, trace2];
    
    var layout = {
        title: 'Weather at Yarra Bend Park',
        
        // Define the layout for the x axis
        xaxis: {tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
            }},
    
        // Define the layout for the y axis
        yaxis: {
            title: 'USD (millions)',
            titlefont: {
            size: 16,
            color: 'rgb(107, 107, 107)'
            },
            tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
            }
        },
    
        // Define the layout for the legend
        legend: {
            x: 0,
            y: 1.0,
            bgcolor: 'rgba(255, 255, 255, 0)',
            bordercolor: 'rgba(255, 255, 255, 0)'
        },
    
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1
    };
    
    Plotly.plot('double-bar-graph', data, layout);
}
