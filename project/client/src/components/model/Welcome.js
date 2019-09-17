import React,{Component} from "react";

import LinkAlert from "./bootstrap/LinkAlert";
import Maps from "../plotly/hoc/Maps";

const Welcome = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <p>
                In this example we will use ploty.js. By using plotly.js we are able to visualize our data from
                our rest-api listening on port 5000. We will be using scattermapbox to give us a detailed plot of
                our cities. Mapbox helps detail the streets, rivers, and international borders. It requires a api
                token in order to plot. Below you can see the link to create your own mapbox account. The other type of
                plot we will be using is scattergeo. Scattergeo is supported and created by the plotly team. It is not
                as detailed as scatter mapbox, unless you specify the options. These options can be manipulated by using
                buttons, options, and inputs at disposal.
            </p>
            <h5>Get your mapbox api token <a onClick={e => alert("Good-Bye, see you later")} href={"https://studio.mapbox.com/"} >here</a></h5>
        </div>
    );
};

export default Welcome;