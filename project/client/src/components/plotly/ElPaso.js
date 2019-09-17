import React, {Component} from "react";
import axios from "axios/index";
import Plot from 'react-plotly.js';
import MapBox from "./hoc/MapBox";

export default class ElPaso extends Component {

    state = {
        locations: [],
        loaded: 0
    };

    componentDidMount() {
        axios.get("/home")
            .then(res => {
                const {locations,loaded} = this.state;
                this.setState({locations:res.data.home,loaded:1});
            })
            .catch(err => console.log("Failed Fetch /locations"))
    }

    figure = () => {
        const {locations} = this.state;

        let data = [];

        locations.map(e => {
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
    };

    render(){
        const token = "pk.eyJ1IjoibWFuZ3VpbGFyMjIiLCJhIjoiY2p3MHZjbmh6MDBpYTRibzVldDdiZ2gyMSJ9.ZpELh1Ia4QEkZWExq9tI5Q";
        const config = {
            mapboxAccessToken: token
        };
        return (
            <div className={"map"}>
                <h1>Plotly.js</h1>

                <MapBox title={"City of El Paso"} data={this.figure()}/>

            </div>
        );
    }

}
