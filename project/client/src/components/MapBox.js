import React,{Component} from "react";
import Plot from "react-plotly.js";

export default class MapBox extends Component {
    layout = () => {

        let layout = {
            title: this.props.title,
            autosize: true,
            hovermode:'closest',
            mapbox: {
                bearing:0,
                center: {
                    lat: 38.03697222,
                    lon: -90.70916722
                },
                domain: {
                    x: [0, 1],
                    y: [0, 1]
                },
                style: 'dark',
                zoom: 1,
                margin: {
                    r: 20,
                    t: 40,
                    b: 20,
                    l: 20,
                    pad: 0
                },
                paper_bgcolor: '#191A1A',
                plot_bgcolor: '#191A1A',
                pitch:0,
            },
        };
        return layout;
    };

    render() {

        const token = "pk.eyJ1IjoibWFuZ3VpbGFyMjIiLCJhIjoiY2p3MHZjbmh6MDBpYTRibzVldDdiZ2gyMSJ9.ZpELh1Ia4QEkZWExq9tI5Q";
        const config = {
            mapboxAccessToken: token
        };

        return ( <Plot data={this.props.data} layout={this.layout()} config={config}/>);
    }

}