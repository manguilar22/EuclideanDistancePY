import React, {Component} from "react";
import Chart from "./Chart";

export default class Maps extends Component {

    state = {index:[]};

    makeRandomNum = () => {
        const {value} = this.props;
        let set = new Set();
        let limit = 1000;
        while(set.size !== limit) {
          let item = Math.round(Math.random()*value.length) - 1;
          set.add(item);
          console.log("STUCK!")
        }
        this.setState({index:[...set]});
    };

    render(){
        const {index} = this.state;
        this.makeRandomNum();
        console.log("Length:\n",index.length);
        return (
            <div>
                <Chart bar={index}/>
            </div>
        );
    }

}