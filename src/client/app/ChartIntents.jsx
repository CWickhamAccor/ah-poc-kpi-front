import React from 'react';

class ChartIntents extends React.Component {

    componentDidMount() {
        let chart = new CanvasJS.Chart("chartContainer", {
            zoomEnabled: true,
            title: {
                text: "Message/Intents"
            },
            axisX: {
                title: 'date',
                valueFormatString: "DD MMM YYYY",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                title: 'Number of Message',
                crosshair: {
                    enabled: true,
                }
            },
            toolTip: {
                shared: true,
            },
            animationEnabled: true,
            legend: {
                cursor: "pointer",
                verticalAlign: "top",
                horizontalAlign: "center",
                dockInsidePlotArea: true,
            },
            data: [
                {
                    type: "spline",
                    name: "Selection",
                    showInLegend: true,
                    markerType: "square",
                    markerSize: 1,
                    color: "#F08080",
                    dataPoints: [
                        {x: new Date(2018,5,1), y: 5},
                        {x: new Date(2018,5,2), y: 8},
                        {x: new Date(2018,5,3), y: 12},
                        {x: new Date(2018,5,4), y: 6},
                        {x: new Date(2018,5,5), y: 8},
                        {x: new Date(2018,5,6), y: 1},
                        {x: new Date(2018,5,7), y: 12},
                        {x: new Date(2018,5,8), y: 4},
                        {x: new Date(2018,5,9), y: 3},
                        {x: new Date(2018,5,10), y: 5},
                        {x: new Date(2018,5,11), y: 8},
                        {x: new Date(2018,5,12), y: 12},
                        {x: new Date(2018,5,13), y: 6},
                        {x: new Date(2018,5,14), y: 8},
                        {x: new Date(2018,5,15), y: 1},
                        {x: new Date(2018,5,16), y: 12},
                        {x: new Date(2018,5,17), y: 4},
                        {x: new Date(2018,5,18), y: 3},
                    ]
                },
                {
                    type: "spline",
                    name: "Smalltalk",
                    showInLegend: true,
                    markerType: "square",
                    markerSize: 1,
                    color: "#C0C080",
                    dataPoints: [
                        {x: new Date(2018,5,1), y: 5},
                        {x: new Date(2018,5,2), y: 9},
                        {x: new Date(2018,5,3), y: 4},
                        {x: new Date(2018,5,4), y: 6},
                        {x: new Date(2018,5,5), y: 12},
                        {x: new Date(2018,5,6), y: 11},
                        {x: new Date(2018,5,7), y: 6},
                        {x: new Date(2018,5,8), y: 2},
                        {x: new Date(2018,5,9), y: 6},
                        {x: new Date(2018,5,10), y: 15},
                        {x: new Date(2018,5,11), y: 3},
                        {x: new Date(2018,5,12), y: 8},
                        {x: new Date(2018,5,13), y: 3},
                        {x: new Date(2018,5,14), y: 4},
                        {x: new Date(2018,5,15), y: 6},
                        {x: new Date(2018,5,16), y: 8},
                        {x: new Date(2018,5,17), y: 6},
                        {x: new Date(2018,5,18), y: 4},
                    ]
                }

            ]
        });
        chart.render();
    }


    render() {
        return (
            <div id="chartContainer" style={{height: 450 + "px", width: 100 + "%"}}>
            </div>
        );
    }

}

export default ChartIntents;