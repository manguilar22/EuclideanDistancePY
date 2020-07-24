import React, {Component} from "react";
import axios from "axios";

import MapBox from "./MapBox";
import Projection from "./hoc/Projection";

class Home extends Component {

    state = {
        locations: []
    }

    componentDidMount() {

        axios.get("http://" + process.env.REACT_APP_HOSTNAME + "/home").then( async (req) => {
            const d = await req.data;
            console.log(d);
            this.setState({locations: d});
        });
    }

    createGeoScatterLinePlot =  () => {

        const {locations} = this.state;
        let data = [];
        locations.map(e => {
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

    createGeoScatterPlot = () => {
        let data = [];

        this.state.locations.map(e => {
            let schema = {
                type: "scattermapbox",
                name: e.start_name,
                lat: [e.start_lat.toString()],
                lon: [e.start_lon.toString()],
                mode: "markers",
                marker: {
                    size: 14,

                },
                text: [e.start_name]
            };
            data.push(schema);
        });
        return data;
    }

    render() {
        return (<div>
            <Projection title={"El Paso Lines"} data={this.createGeoScatterLinePlot()}/>
            <MapBox title={"El Paso"} data={this.createGeoScatterLinePlot()}/>
        </div>);
    }

}

export default Home;