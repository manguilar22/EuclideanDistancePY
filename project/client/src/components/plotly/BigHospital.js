import React, {Component} from "react";
import axios from "axios"
import {Button} from "react-bootstrap";
import Slider from 'react-rangeslider'
import MapBox from "./hoc/MapBox";
import Projection from "./hoc/Projection";
import Chart from "./hoc/Chart";

export default class BigHospital extends Component {


    state = {
        loaded: 0,
        locations: [],
        index: [],
        num: 10,
    };

    componentDidMount() {
        axios.get("/hospital")
            .then(res => {
                let {hospitals} = res.data;
                this.setState({locations: hospitals, loaded: 1});
            })
            .catch(err => this.setState({loaded: 0}))
    }

    handleNumChange = (value) => this.setState({num: value});

    figure3 = () => {
        const {locations, num} = this.state;
        let set = new Set();
        let limit = 80;
        while (set.size !== limit) {
            set.add(Math.round(Math.random() * locations.length) - 1)
        }
        const index = [...set];
        set.clear();
        const newData = index.map(e => locations[e]);
        const data = [];
        for (let i = 0; i < num; i++) {
            const name = newData[i].name;
            const end_name = newData[i].end_name;
            const start_lat = newData[i].start_lat;
            const end_lat = newData[i].end_lat;
            const start_lon = newData[i].start_lon;
            const end_lon = newData[i].end_lon;
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
        }
        return data;
    };

    figureGeo = () => {
        const {locations, num} = this.state;
        let set = new Set();
        let limit = 5000;
        while (set.size !== limit) {
            set.add(Math.round(Math.random() * locations.length) - 1)
        }
        const index = [...set];
        set.clear();
        const newData = index.map(e => locations[e]);
        const data = [];
        for (let i = 0; i < num; i++) {
            const name = newData[i].name;
            const end_name = newData[i].end_name;
            const start_lat = newData[i].start_lat;
            const end_lat = newData[i].end_lat;
            const start_lon = newData[i].start_lon;
            const end_lon = newData[i].end_lon;
            let schema = {
                type: "scattergeo",
                name: name,
                lat: [start_lat, end_lat],
                lon: [start_lon, end_lon],
                mode: "lines+markers",
                line: {
                    width: .5,
                    color: "red",
                    shape: "spline",
                    dash: "dot",
                },
                opacity: Math.random(),
                marker: {
                    size: 8,
                    color: "blue",
                    symbol: "circle-open",
                },
                text: [name, end_name],
            };
            data.push(schema);
        }
        return data;
    };

    render() {
        const {loaded, num} = this.state;
        const token = "pk.eyJ1IjoibWFuZ3VpbGFyMjIiLCJhIjoiY2p3MHZjbmh6MDBpYTRibzVldDdiZ2gyMSJ9.ZpELh1Ia4QEkZWExq9tI5Q";
        // Debug Statement
        console.log("LOADED:\t", this.state.loaded);
        console.log("DATA:\n", this.state.locations);
        console.log("Index:\n",this.state.index);
        //////////////////////////////////////////
        switch (loaded) {
            case 0:
                return (
                    <div className={"map"}>
                        <h1>No data present</h1>
                    </div>
                );
            case 1:
                return (
                    <div className={"map"}>
                        <h1>Plotting <i className={"message"}>{num}</i> coordinate points.</h1>
                        <MapBox data={this.figure3()} title={"Euclidean Distance on World Hospitals"}/>
                        <div className={"slider"}>
                            <Slider onChange={this.handleNumChange} value={num}
                                    orientation={"horizontal"}
                                    labels={{
                                        10: "Low",
                                        20: "Low",
                                        33: "Medium",
                                        60: "Caution",
                                        70: "Danger",
                                        77: "Will Not Render"
                                    }}
                                    tooltip={false}
                                    min={10} max={80} step={1}/>
                        </div>
                        <Button variant={"outline-secondary"}
                                onClick={e => this.setState({loaded: 2})}>GeoScatter</Button>
                    </div>
                );
            case 2:
                return (
                    <div className={"map"}>
                        <h1>ScatterGeo</h1>
                        <h1>Plotting <i className={"message"}>{num}</i> coordinate points.</h1>
                        <Projection data={this.figureGeo()} title={"Euclidean World Hospital"}/>
                        <div className={"slider"}>
                            <Slider onChange={this.handleNumChange} value={num}
                                    orientation={"horizontal"}
                                    tooltip={false}
                                    min={10} max={5000} step={1}/>
                        </div>
                        <Button variant={"outline-primary"}
                                onClick={e => this.setState({loaded: 1,num:10})}>ScatterMapBox</Button>
                    </div>
                );
            default:
                return (
                    <div>
                        <h1>Error</h1>
                    </div>
                );
        }
    };
}