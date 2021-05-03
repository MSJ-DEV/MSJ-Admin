import React, { Component } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios"
import { Link } from 'react-router-dom'
import Thheaders from '../../../containers/TheHeader'
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageselected:[],
            Firstname:"" ,
            Lastname:"",
            email:"",
            Address:"",
            phone: "",
            password:"",
            country:"",
            Zip:"",
            image:"",
            Oldpassword:"",
            confirmpassword:"",
            mypassword:"",
            mycountry:"",
            errors:{}
        }
        
    }
  
    handleValidation(){
        let{Firstname,Lastname,email,password,confirmpassword,Oldpassword,mypassword,country}= this.state
        let errors = {};
        let formIsValid = true;
        //Name
        if(!Firstname){
         
           formIsValid = false;
           errors.Firstname = "Cannot be empty";
        }
    
        if(typeof Firstname !== "undefined"){
           if(!Firstname.match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors.Firstname = "  Firstname Containe Just Only letters UperCase, LowerCase";
           }        
        }
        if(!Lastname){
            formIsValid = false;
            errors.Lastname = "Cannot be empty";
         }
     
         if(typeof Lastname !== "undefined"){
            if(!Lastname.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors.Lastname = "  Lastname Containe Just Only letters UperCase, LowerCase";
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
     if(password!==mypassword && password!==confirmpassword){
            formIsValid=false
            errors.confirmpassword = "Repeat password shoold Containe the Same like password "
        }else if(password!==mypassword  && password===confirmpassword ){
            formIsValid = true;
        }
      if(country.length<0){
        errors.country = "Cannot be empty";
      }
    
    
       this.setState({errors: errors});
       return formIsValid;
    }
    async componentDidMount(){
        const {Firstname,Lastname,email,password,country,Zip,Address,phone,mypassword}= this.state
      await  axios.get('http://localhost:3333/api/admin/'+1).then((res)=>{
            if(Firstname.length===0||Lastname.length===0||email.length===0||password.length===0||country.length===0 ||Address.length===0||Zip.length===0||Address.length===0||phone==="undefinde" ){
                this.setState({
                    Firstname:res.data.Firstname,
                    Lastname:res.data.Lastname,
                    email:res.data.email,
                    password:res.data.password,
                    country:res.data.country,
                    Zip:res.data.Zip,
                    Address:res.data.Address,
                   numberPhone:res.data.numberPhone,
                   image:res.data.image,
                   mypassword:res.data.password
                })
            }
           
        })
    }
    async contactSubmit(e){
      const   id=1
        const {Firstname,Lastname,email,password,country,Zip,imageselected,Address,image,phone}= this.state
          e.preventDefault(e);
          if(this.handleValidation()){
            if(image.length!==0 && imageselected.length===0 ){
                axios.patch("http://localhost:3333/api/getall/"+id,{
                    Firstname:Firstname,
                    Lastname:Lastname,
                    email:email,
                    Address:Address,
                    numberPhone:phone,
                    password:password,
                    image:image,
                    country:country,
                    Zip:Zip
                  })
                  .then((res)=>{
                    console.log(res)
                  })
            }else if(imageselected){
            const formData = new FormData()
            formData.append("file", imageselected)
            formData.append('upload_preset', 'qczp9fgd')
           await axios.post('https://api.cloudinary.com/v1_1/dm1xlu8ce/image/upload', formData).then((res) => {
            axios.patch("http://localhost:3333/api/getall/"+id,{
              Firstname:Firstname,
              Lastname:Lastname,
              email:email,
              Address:Address,
              numberPhone:phone,
              password:password,
              image:res.data.url,
              country:country,
              Zip:Zip
            })
            
            .then((res)=>{
              
            })
            
          })
        }
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
        const {Firstname,Lastname,errors,email,mycountry,country,Zip,imageselected,numberPhone,Address,image,phone}= this.state
        return (
            <div>
                <Thheaders />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8 mx-auto">
                        <h2 className="h3 mb-4 page-title">Settings</h2>
                        <div className="my-4">
                            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">

                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" >Profile</a>
                                </li>
                            </ul>
                            <form>
                                <div className="row mt-5 align-items-center">
                                    <div className="col-md-3 text-center mb-5">
                                        <div className="avatar avatar-xl">
                                            <img src={image} alt="..." className="avatar-img rounded-circle" />

                                        </div>
                                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={(event) => this.setState({ imageselected: event.target.files[0] })} />
                                        <div className="label">
                                            <label className="image-upload" htmlFor="input">
                                                <i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row align-items-center">
                                            <div className="col-md-7">
                                                <h4 className="mb-1">{Firstname}, {Lastname}</h4>
                                              
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-md-7">
                                                <p className="text-muted">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at,
                                                    pretium blandit sapien.
                                            </p>
                                            </div>
                                            <div className="col">
                                            <p className="small mb-0 text-muted">{email}</p>
                                                <p className="small mb-0 text-muted">{mycountry}</p>
                                                <p className="small mb-0 text-muted">{Address}</p>
                                                <p className="small mb-0 text-muted">{numberPhone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="firstname">Firstname</label>
                                        <input type="text" name="Firstname" className="form-control" placeholder="Your Firstname" onChange={(e)=>this.handleChange(e)} />
                                        <span className="error">{errors["Firstname"]}</span>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Lastname">Lastname</label>
                                        <input type="text" name="Lastname" className="form-control" placeholder="Your Lastname" onChange={(e)=>this.handleChange(e)} />
                                        <span className="error">{errors["Lastname"]}</span>
                        </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder="ex brown@asher.me" onChange={(e)=>this.handleChange(e)}/>
                                    <span className="error">{errors["email"]}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress5">Address</label>
                                    <input type="text" className="form-control" name="Address" placeholder="ex P.O. Box 464, 5975 Eget Avenue" onChange={(e)=>this.handleChange(e)} />
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                <label htmlFor="inputState5">Phone Number</label>
                                    <PhoneInput
                                        country={'us'}
                                        value={phone }
                                      type="text"
                                        onChange={ phone  => this.setState({phone })}
                                    />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip5">Zip</label>
                                        <input type="text" className="form-control" name="Zip" placeholder="98232"  onChange={(e)=>this.handleChange(e)}/>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputPassword4">Old Password</label>
                                            <input type="password" className="form-control" name="Oldpassword" onChange={(e)=>this.handleChange(e)}/>
                                            <span className="error">{this.state.errors["Oldpassword"]}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword5">New Password</label>
                                            <input type="password" className="form-control" name="password" onChange={(e)=>this.handleChange(e)}/>
                                            <span className="error">{this.state.errors["password"]}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword6">Confirm Password</label>
                                            <input type="password" className="form-control" name="confirmpassword" onChange={(e)=>this.handleChange(e)} />
                                            <span className="error">{this.state.errors["confirmpassword"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="mb-2">Password requirements</p>
                                        <p className="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                                        <ul className="small text-muted pl-4 mb-0">
                                            <li>Minimum 8 character</li>
                                            <li>At least one special character</li>
                                            <li>At least one number</li>
                                            <li>Can’t be the same as a previous password</li>
                                        </ul>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={(e)=>this.contactSubmit(e)}>Save Change</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        )
    }
}
