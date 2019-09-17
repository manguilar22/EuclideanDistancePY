import React,{Component} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Nav from "./components/nav/Nav";
import Routes from "./components/nav/Routes";


import "./css/map.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <hr/>
                <Routes/>
            </BrowserRouter>
        );

    }
}

export default App;
