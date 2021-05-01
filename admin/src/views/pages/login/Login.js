
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
import CIcon from '@coreui/icons-react'
import TheHeader from '../../../containers/TheHeader'
import React, { Component } from 'react'
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
         email:"",
         password:""
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(
        this.state
    )
}
checkadmin(e){
  const {password,email}=this.state
 axios.post('http://localhost:3333/api/admin',{
   email:email,
   password:password
   
 }).then(res=>{
   console.log(res)
 }).catch(err=>{
   console.log(err)
 })
}
  render() {
 
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


