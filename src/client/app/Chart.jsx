import React from 'react';

const feedbackPoints = [
    { id: 1, date : new Date(2018,5,23,15,7,41), user_id: 1206275246, feedback: 4},
    { id: 2, date : new Date(2018,5,23,15,7,46), user_id: 1206275246, feedback: 5},
    { id: 3, date : new Date(2018,5,23,15,9,33), user_id: 1206275246, feedback: 2},
];
const dataPoints = [
    {x: new Date(2018,5,1),  y: 5,   amount: 1},
    {x: new Date(2018,5,2),  y: 4,   amount: 1},
    {x: new Date(2018,5,3),  y: 2,   amount: 1},
    {x: new Date(2018,5,4),  y: 1.7, amount: 1},
    {x: new Date(2018,5,5),  y: 3.5, amount: 1},
    {x: new Date(2018,5,6),  y: 2.3, amount: 1},
    {x: new Date(2018,5,7),  y: 4.7, amount: 1},
    {x: new Date(2018,5,8),  y: 4.3, amount: 1},
    {x: new Date(2018,5,9),  y: 3.5, amount: 1},
    {x: new Date(2018,5,10), y: 5,   amount: 1},
    {x: new Date(2018,5,11), y: 4.9, amount: 1},
    {x: new Date(2018,5,12), y: 5,   amount: 1},
    {x: new Date(2018,5,13), y: 4.9, amount: 1},
    {x: new Date(2018,5,14), y: 4.7, amount: 1},
    {x: new Date(2018,5,15), y: 0.5, amount: 1},
    {x: new Date(2018,5,16), y: 1,   amount: 1},
    {x: new Date(2018,5,17), y: 2,   amount: 1},
    {x: new Date(2018,5,18), y: 2.4, amount: 1},
];
const timeGap = 7;

function getAmountFromData(data) {
    console.log(data);
    const amountDataPoints = data.map((el) => {

    }
}

function getMeanFromData(data){
    console.log(data);
    const AverageDataPoint = data.map((el, i, arr) => {
        const array = arr.slice(i>timeGap-1 ? i-timeGap+1 : 0,i+1);
        const sum = array.reduce((acc, val) => acc + val.y * val.amount, 0);
        const count = array.reduce((acc, val) => acc + val.amount, 0);
        // const mean = sum/(i > timeGap-1 ? timeGap : i+1);
        const mean = sum/count;
        console.log(`items from ${i>timeGap-1 ? i-timeGap+1 : 0} to ${i}`);
        console.log(`sum : ${sum}`);
        console.log(`mean : ${mean}`);
        return {
            x: el.x,
            y: mean,
        };
    });
    console.log(AverageDataPoint);
    return AverageDataPoint;
}

class Chart extends React.Component {

    componentDidMount() {
        const data = getMeanFromData(dataPoints);
        const amount = dataPoints.map((point) => {
            return {x: point.x, y: point.amount}
        });
        let chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Average Feedback"
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
                title: 'Feedback Score',
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
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
                    name: "Average Feedback/day",
                    showInLegend: true,
                    markerSize: 0,
                    dataPoints: dataPoints,
                },
                {
                    type: "spline",
                    name: `Average Feedback/${timeGap} days`,
                    showInLegend: true,
                    markerSize: 0,
                    dataPoints: data,
                },
                {
                    type: "line",
                    name: "Number of feedbacks",
                    showInLegend: true,
                    markerSize: 0,
                    dataPoints: amount,
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

export default Chart;