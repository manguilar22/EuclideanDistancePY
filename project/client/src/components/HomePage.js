import React,{Component} from "react";
import axios from "axios";
import Home from "./Home";
import MapBox from "./MapBox";
class HomePage extends Component {

    state = {
        locations: []
    };

    componentDidMount() {
        axios.get("/home").then(async (req) => {
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