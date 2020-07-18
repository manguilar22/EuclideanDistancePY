import React, {Component} from "react";
import Plot from "react-plotly.js";
import Maps from "./Maps";

export default class Chart extends  Component {
    trace = (value) => {
        let data = [];
        var schema = {
            x : value,                // Array []
            type: "histogram"
        };
        data.push(schema);
        return data;
    };

    layout = () => {
        const layout = {
            title: "Distribution Pattern",
            barmode:"stack",
        };
        return layout;
    };

    render() {
        const {bar} = this.props;
        return (
            <div className={"bar"}>
                <Plot data={this.trace(bar)} layout={this.layout()}/>
            </div>
        );
    }
}