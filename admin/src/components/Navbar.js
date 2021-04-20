import React, { Component } from 'react'
// import * as mdb from 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css';
import Post from './Post'
export default class Navbar extends Component {
    render() {
        return (
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
                        <li className="breadcrumb-item"><a className="waves-effect" href="#!">Home</a></li>
                        <li className="breadcrumb-item"><a className="waves-effect" href="#!"
                            data-mdb-toggle="modal"
                            data-mdb-target="#exampleModal">Add product</a></li>
                        <li className="breadcrumb-item active"><a className="waves-effect" href="#!">E-commerce</a></li>
                    </ol>



                    <div className="collapse navbar-collapse" id="basicExampleNav1">


                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#!" className="nav-link navbar-link-2 waves-effect">
                                    <span className="badge badge-pill red">1</span>
                                    <i className="fas fa-shopping-cart pl-0"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="true">
                                    <i className="united kingdom flag m-0"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#!">Action</a>
                                    <a className="dropdown-item" href="#!">Another action</a>
                                    <a className="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link waves-effect">
                                    Shop
      </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link waves-effect">
                                    Contact
      </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link waves-effect">
                                    Sign in
      </a>
                            </li>
                            <li className="nav-item pl-2 mb-2 mb-md-0">
                                <a href="#!" type="button"
                                    className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
                            </li>
                        </ul>

                    </div>


                </nav>
                <Post />
            </div>
        )
    }
}
