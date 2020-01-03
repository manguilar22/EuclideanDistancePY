import React,{Component} from "react";
import axios from "axios";
import Plot from "react-plotly.js";

export default class College extends Component {

    state = {college:[],loaded:0};

    componentDidMount() {

        /**
         * {Address, City, Name, ProgramName, Web, Zip}
         */
        axios.get("/college")
            .then(res => {
                const college = res.data;
                console.log(college);
                this.setState({college:college,loaded:1});
             })
            .catch(err => console.log("No Data"));
    }

    render(){
        return (
            <div>
                <h1>Loaded: {this.state.loaded}</h1>
            </div>
        );
    }

}