import React, {Component} from "react";
import axios from "axios/index";
import Projection from "./hoc/Projection";

export default class ElPaso extends Component {

    state = {
        locations: [],
        loaded: 0,
    };

    componentDidMount() {
        axios.get("/home")
            .then(res => {
                const locations = res.data;
                this.setState({locations:locations,loaded:1});
            })
            .catch(err => console.log("Failed Fetch /locations"))
    };

    figure = () => {
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



    render(){
        return (
            <div className={"map"}>
                <h1> Lines on a Map </h1>
                <Projection title={"Euclidean Distance El Paso"} data={this.figure()}/>
            </div>
        );
    }
}

