
import React, {Component} from "react";
import axios from "axios";
import MapBox from "./MapBox";
import Projection from "./hoc/Projection";

export default class Hospital extends Component {

    state = {
        locations: [],
        button: true,
    }

    componentDidMount() {
        axios.get("/hospitals").then( async (req) => {
            const d = await req.data;
            console.log(d);
            this.setState({locations: d});
        }).then(() => "Failed fetching /hospitals");
    }


    createFigure() {
        let data = [];
        this.state.locations.slice(1,10).map( e => {
        const {name,start_lat,start_lon,end_name,end_lon,end_lat} = e;
        let schema = {
            type: "scattermapbox",
            name: name,
            lat: [start_lat, end_lat],
            lon: [start_lon, end_lon],
            mode: "lines+markers",
            line: {
                width: 2,
                color: "red",
                shape: "spline",
                dash: "dot",
            },
            opacity: Math.random(),
            marker: {
                size: 8,
                color: "blue",
            },
            text: [name, end_name],
        };
        data.push(schema);
    });
    return data;
    }


    createGeoScatterLinePlot =  () => {

        const {locations} = this.state;
        let data = [];
        locations.slice(1,100).map(e => {
            var result = {
                type: 'scattergeo',
                locationmode: 'USA-states',
                name: "",
                lon: [e.start_lon, e.end_lon],
                lat: [e.start_lat, e.end_lat],
                mode: 'markers+lines',
                line: {
                    width: 1,
                    color: 'blue',
                    shape: "spline",
                    dash: "dot",
                },
                text: [e.start_name, e.end_name],
                opacity: Math.random() * locations.length,
            };
            data.push(result);
        });
        return data;
    };

    toggle = (e) => {

    }

    render() {
        if(this.state.button) {
            return (
                <div>
                    <MapBox title={"World Hospitals"} data={this.createFigure()}/>
                    <Projection title={"World Hospital Lines"} data={this.createGeoScatterLinePlot()}/>
                </div>
            );
        }

    }


}