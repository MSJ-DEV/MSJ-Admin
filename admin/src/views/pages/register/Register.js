
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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

export default class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      email:"",
      password:"",
      repeatepassword:"",
      country:"cif-"+"",
      errors: {}
    }
  }
  handleValidation(){
    let{username,email,password,repeatepassword}= this.state
    let errors = {};
    let formIsValid = true;
let pattern="[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?"
    //Name
    if(!username){
       formIsValid = false;
       errors.username = "Cannot be empty";
    }

    if(typeof username !== "undefined"){
       if(!username.match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors.username = "  UserName Containe Just Only letters UperCase, LowerCase";
       }        
    }

    //Email
    if(!email){
       formIsValid = false;
       errors.email = "Cannot be empty";
    }

    if(typeof email !== "undefined"){
       let lastAtPos = email.lastIndexOf('@');
       let lastDotPos = email.lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
          formIsValid = false;
          errors.email = "Email is not valid Your Email Shoold Write like example@gmail.com";
        }
   }  
//password
if(!password){
  formIsValid = false;
  errors.password = "Cannot be empty";
}

if(typeof password !== "undefined"){
  if(!password.match(/^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{8,}$/)){
     formIsValid = false;
     errors.password = "password shoold Containe letters UperCase, LowerCase, Number and Special Caracter ";
  }        
}
if(repeatepassword!==password){
  errors.repeatepassword = "Repeat password shoold Containe the Same like password "
}
  


   this.setState({errors: errors});
   return formIsValid;
}

contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
       alert("Form submitted");
    }else{
       alert("Form has errors.")
    }

}

handleChange(e) {
  this.setState({ [e.target.name]: e.target.value })
  console.log(
      this.state
  )
  
}
  render() {
    return (
      <div>
      <TheHeader />
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm >
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="username" type="text" placeholder="Username" autoComplete="username" onChange={(e)=>this.handleChange(e)} />
                    <span className="error">{this.state.errors["username"]}</span>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="email" type="text" placeholder="Email" autoComplete="email" onChange={(e)=>this.handleChange(e)} />
                    <span className="error">{this.state.errors["email"]}</span>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="password" type="password" placeholder="Password" autoComplete="password"onChange={(e)=>this.handleChange(e)} />
                    <span className="error">{this.state.errors["password"]}</span>
                  </CInputGroup>
                  
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="repeatepassword" type="password" placeholder="Repeat password" autoComplete="new-password"onChange={(e)=>this.handleChange(e)} />
                    <span className="error">{this.state.errors["repeatepassword"]}</span>
                  </CInputGroup>
                 <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name={this.state.country} />
                      </CInputGroupText>
                      {console.log(this.state)}
                    </CInputGroupPrepend>
                    <select className="selectsize"  id="cars" onChange={(e)=>this.setState({country:"cif-"+e.target.value})} name="country">
                            <option value="Select size">Select Country</option>
                                <option>Tn</option>
                                <option>dz</option>
                                <option>us</option>
                        </select>   
                  </CInputGroup>
                  <CButton color="success"  onClick= {(e)=>this.contactSubmit(e)} >Create Account</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </div>
    )
  }
}

