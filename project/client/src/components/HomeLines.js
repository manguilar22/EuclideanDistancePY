
import React, {Component} from "react";
import axios from "axios";
import MapBox from "./MapBox";

export default class HomeLines extends Component {

    state = {
        locations: []
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


    render() {
        return (
            <div>
                <MapBox title={"World Hospitals"} data={this.createFigure()}/>
            </div>
        );
    }


}