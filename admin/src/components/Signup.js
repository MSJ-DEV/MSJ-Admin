import React, { Component } from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
export default class Signup extends Component {
    render() {
        return (
            <div className="container">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div><br />

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div><br />

                <button type="submit" className="btn btn-primary btn-block">REGISTER</button>
            </form>
            </div>
        )
    }
}
