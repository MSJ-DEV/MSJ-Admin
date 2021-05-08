
import axios from 'axios'
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
import Swal from 'sweetalert2'
import CIcon from '@coreui/icons-react'
import TheHeader from '../../../containers/TheHeader'
import React, { Component } from 'react'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
         email:"",
         password:"",
         alert:''
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  
}
checkadmin(e){
  const {password,email}=this.state
 axios.post('http://localhost:3333/api/login',{
   email:email,
   password:password
   
 },{withCredentials: true, headers:{"Access-Control-Allow-Origin":"*"
 }
 }).then(res=>{
   console.log(res)
   if(res.data[1]==="secsuss"){
     localStorage.setItem("id",res.data[2])
    Swal.fire({
      position: 'mid',
      icon: 'success',
      title: 'Your Login has been secced',
      showConfirmButton: false,
      timer: 1500
    })
    
   }else {
    Swal.fire({
      position: 'mid',
      icon: 'error',
      title: 'Something went wrong! Check your password or Email',
      showConfirmButton: false,
      timer: 1500
    })
   }
 }).catch(err=>{
   console.log(err)
 })
}
  render() {
    var alert = ''
    if(this.state.alert == 'success'){
        alert = <div className="alert alert-success" role="alert" >Sign In Successfully ...</div>
    }else if(this.state.alert == "fail"){
        alert = <div className="alert alert-danger" role="alert" > Wrong Password Or Username </div>
    }
    return (
      <div>
           <TheHeader />
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
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="email" placeholder="email" autoComplete="email" onChange={(e)=>this.handleChange(e)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={(e)=>this.handleChange(e)}/>
                    </CInputGroup>
                   
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={(e)=>this.checkadmin(e)}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                    {alert}
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
      </div>
    )
  }
}


