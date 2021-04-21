import React, { Component } from 'react'
import axios from 'axios'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
export default class Signin extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
        this.checkAdmin=this.checkAdmin.bind(this)
    }
    checkAdmin(){
        const {email,password}=this.state
        axios.post('http://192.168.22.213:3333/api/admin',{
            email:email,
            password:password
        }).then((res)=>{
           sessionStorage.setItem('checkAdmin','true')
           
        })
        
    }
    handleChange(e){ 
        this.setState({[e.target.name]:e.target.value})
        console.log(
          {[e.target.name]:e.target.value}
        );
      }
    render() {
        return (
            <div className="container">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e)=>this.handleChange(e)} />
                </div><br />

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={(e)=>this.handleChange(e)} />
                </div><br />

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div><br />

                <button type="button" className="btn btn-primary btn-block" onClick={(e)=>this.checkAdmin(e)}>LOGIN</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
        )
    }
}
