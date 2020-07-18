import React, {Component} from "react";
import axios from "axios";

import MapBox from "./MapBox";

class Home extends Component {

    state = {
        locations: []
    }

    componentDidMount() {

        axios.get("/home").then( (req) => {
            const d = req.data;
            console.log(d);
            this.setState({locations: d});
        });
    }


    createFigure = () => {
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
            <MapBox title={"El Paso"} data={this.createFigure()}/>
        </div>);
    }

}

export default Home;