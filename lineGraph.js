function getData() {
    return Math.random();
}  


function plotLineChart(){
    Plotly.plot('line-chart',[{
        y:[getData()],
        type:'line'
    }]);
    
    var count = 0;
    setInterval(function(){
        Plotly.extendTraces('line-chart',{ y:[[getData()]]}, [0]);
        count++;
        if(count > 500) {
            Plotly.relayout('line-chart',{
                xaxis: {
                    range: [count-500,count]
                }
            });
        }
    },15);
}
