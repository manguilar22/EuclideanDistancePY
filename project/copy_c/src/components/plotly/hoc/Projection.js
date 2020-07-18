import React,{Component} from "react";
import Plot from 'react-plotly.js';


export default class Projection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scope: [
                "world","usa","europe","asia","africa","north america","south america"
            ],
            projection: [
                "equirectangular","mercator","orthographic",
                "natural earth","kavrayskiy7" ,"miller" , "robinson" , "eckert4" , "azimuthal equal area" ,
                "azimuthal equidistant" , "conic equal area" , "conic conformal" , "conic equidistant" , "gnomonic" ,
                "stereographic" , "mollweide" , "hammer" , "transverse mercator" , "albers usa" , "winkel tripel" ,
                "aitoff" , "sinusoidal"
            ],
            colors: [
                "red","blue","yellow","orange","purple"
            ],
            getScope:"",
            getProjection:"",
            getMarkerColor:"",
            getLineColor:"",
        }
    }


    layout = () => {
        const {title} = this.props;
        const {getScope,getProjection} = this.state;
        var layout = {
            title: title,
            hovermode: "closest",
            showlegend: false,
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
            geo:{
                scope: getScope,
                projection: {
                    type: getProjection,
                },
                showland: true,
                //landcolor: 'rgb(243,243,243)',
                //countrycolor: 'rgb(204,204,204)',
                // rivercolor: "yellow",
            }
        };
        return layout;
    };

    render(){
        const {scope,projection,colors} = this.state;
        const {data} = this.props;
        const token = "pk.eyJ1IjoibWFuZ3VpbGFyMjIiLCJhIjoiY2p3MHZjbmh6MDBpYTRibzVldDdiZ2gyMSJ9.ZpELh1Ia4QEkZWExq9tI5Q";
        const config = {
            mapboxAccessToken: token
        };
        return (
            <div>
                <form>
                    <label>Change Scope</label>
                    <select onChange={event => this.setState({getScope: event.target.value})}>
                        {scope.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                    <label>Change Map Projection</label>
                    <select onChange={event => this.setState({getProjection:event.target.value})}>
                        {projection.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                </form>
                <Plot data={data} layout={this.layout()} config={config}/>
            </div>
        );
    }
}
