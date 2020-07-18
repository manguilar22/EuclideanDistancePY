import React,{Component} from "react";

import {Alert} from "react-bootstrap";

export default class LinkAlert extends Component {
    render() {
        return (
            <Alert variant={"secondary"}>{this.props.message}</Alert>
        );
    }
}