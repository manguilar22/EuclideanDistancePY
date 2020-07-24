import React,{Component} from "react";
import Home from "./Home";
import MapBox from "./MapBox";
import {routes} from "../config/routes";

class HomePage extends Component {

    state = {
        locations: []
    };

    componentDidMount() {
        routes.home.then(async (req) => {
            const d = await req.data;
            this.setState({locations:d});
        });
    }


    render() {
        const {locations} = this.state;
        return (
            <div>
                <p>{locations.length}</p>
            </div>
        );
    }


}

export default HomePage;