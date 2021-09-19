import { Link, Switch, Route, BrowserRouter as Router, NavLink} from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Shop from "./Shop";
import './../header.css'
import React, { useState } from "react";

function Global_Header(){


    return(

        <Router>
            <div id="navbar">
                <a href="#" className="logo"><img src="Assets/logov3.2.png" width="125px" height="auto"/></a>
                <ul>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><NavLink to="/Shop" activeClassName="active">Productos</NavLink></li>
                    <li><a href="./#social__orders">Redes</a></li>
                    <li><a href="./addToCart.html"><i className='bx bx-shopping-bag' ></i></a></li>
                </ul>
            </div>

            <Switch>
                <Route exact path="/"> <Home/> </Route>
                <Route path="/Shop"> <Shop/></Route>
            </Switch>
        </Router>
    )
}

export default Global_Header;