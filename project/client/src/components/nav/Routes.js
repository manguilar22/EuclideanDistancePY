import React from "react";

import {Route,Switch} from "react-router";

import Welcome from "../model/Welcome";
import College from "../model/College";
import ElPaso from "../plotly/ElPaso";
import BigHospital from "../plotly/BigHospital";
import ElPasoLines from "../plotly/ElPasoLines";


const Routes = () => {
  return (
      <Switch>
          <Route exact path={"/"} component={Welcome}/>
          <Route path={"/college"} component={College}/>
          <Route path={"/city"} component={ElPaso}/>
          <Route path={"/lines"} component={ElPasoLines}/>
          <Route path={"/world"} component={BigHospital}/>
          <Route path={"*"} component={null}/>          # 404 - Not Found
      </Switch>
  );
};

export default Routes;