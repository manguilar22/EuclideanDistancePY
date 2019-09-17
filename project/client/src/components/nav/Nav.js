import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Nav extends Component {


    render(){
        return (
          <div>
              <ol>
                  <li><NavLink to={"/"}>Home</NavLink></li>
                  <li><NavLink to={"/college"}>College</NavLink></li>
                  <li><NavLink to={"/city"}>City of El Paso</NavLink></li>
                  <li><NavLink to={"/lines"}>Get LayLines</NavLink></li>
                  <li><NavLink to={"/world"}>The World</NavLink></li>
              </ol>
          </div>
        );
    }
}