import React, { Component } from 'react'
import axios from 'axios'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow
  } from '@coreui/react'
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
            <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
              <CRow className="justify-content-center">
                <CCol md="8">
                  <CCardGroup>
                    <CCard className="p-4">
                      <CCardBody>
                        <CForm>
                          <h1>Login</h1>
                          <p className="text-muted">Sign In to your account</p>
                          <CInputGroup className="mb-3">
                            <CInput type="text" placeholder="Enter email" autoComplete="email" name="email" onChange={(e)=>this.handleChange(e)} />
                          </CInputGroup>
                          <CInputGroup className="mb-4">
                            <CInput type="password" placeholder="Password" autoComplete="current-password"name="password" onChange={(e)=>this.handleChange(e)}  />
                          </CInputGroup>
                          <CRow>
                            <CCol xs="6">
                              <CButton color="primary" className="px-4" onClick={(e)=>this.checkAdmin(e)}>Login</CButton>
                            </CCol>
                            <CCol xs="6" className="text-right">
                              <CButton color="link" className="px-0">Forgot password?</CButton>
                            </CCol>
                          </CRow>
                        </CForm>
                      </CCardBody>
                    </CCard>
                  </CCardGroup>
                </CCol>
              </CRow>
            </CContainer>
            </div>
         
        )
    }
}
