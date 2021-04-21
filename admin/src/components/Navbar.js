import React, { Component } from 'react'
// import * as mdb from 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css';
import Products from './products'
import SignIn from './Signin'
import Post from './Post'
import SignUp from './Signup'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-md navbar-light">

                        <a className="navbar-brand" href="#!">
                            <img src="https://www.carrefourtunisie.com/medias/sliders/2020-04-08/s6desktop.jpg" height="70" alt="mdb logo" />
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
                            aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <ol className="breadcrumb">
                        <li ><a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"><Link to="/products">Home</Link></a></li>
                            <li ><a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"
                                data-mdb-toggle="modal"
                                data-mdb-target="#exampleModal">Add product</a></li>
                            <li ><a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"><Link to="/products">All Products</Link></a></li>
                        </ol>



                        <div className="collapse navbar-collapse" id="basicExampleNav1">


                            <ul className="navbar-nav ml-auto">



                                <li className="nav-item">
                                    <a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">
                                        Contact
      </a>
                                </li>
                                <li className="nav-item pl-2 mb-2 mb-md-0">
                                    <a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">
                                        <Link to="/Signin">Sign in</Link>
                                    </a>
                                </li>
                                <li className="nav-item pl-2 mb-2 mb-md-0">
                                    <a type="button"
                                        className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"><Link to="/Signup">Sign Up</Link></a>
                                </li>
                            </ul>

                        </div>


                    </nav>
                    <Post />
                </div>
                <Switch>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/Signin">
                        <SignIn />
                    </Route>
                    <Route path="/Signup">
                        <SignUp />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
