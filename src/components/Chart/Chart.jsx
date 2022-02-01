import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"

function Chart(props){
    const valuesArr = props.datapoints.map((datapoint)=>{ return datapoint.value});
    let totalMaxValue = Math.max(...valuesArr);
    
    return (
        <div className="chart">
            {props.datapoints.map((datapoint)=>{
                return <ChartBar 
                            key={datapoint.label}
                            value={datapoint.value}
                            maxValue={totalMaxValue}
                            label={datapoint.label}
                        />
            })}
        </div>
    )
}

export default Chart;