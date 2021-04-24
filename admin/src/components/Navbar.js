// import React, { Component } from 'react'
// import axios from 'axios'
// import Products from './products'
// import SignIn from './Signin'
// import Post from './Post'
// import SignUp from './Signup'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// export default class Navbar extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//          togle:true
//         }
//         this.checkAdmin=this.checkAdmin.bind(this)
//     }
//     componentDidMount(){
//         this.checkAdmin()
//     }
//     checkAdmin(){
//       if(!!sessionStorage.getItem('checkAdmin')){
//           this.setState({togle:false})
//       }else{
//         this.setState({togle:true})
//       }

//     }
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <nav className="navbar navbar-expand-md navbar-light">

//                         <a className="navbar-brand" href="#!">
//                             <img src="https://www.carrefourtunisie.com/medias/sliders/2020-04-08/s6desktop.jpg" height="70" alt="mdb logo" />
//                         </a>

//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
//                             aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>


//                         <ol className="breadcrumb">
//                         <li ><a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"><Link to="/products">Home</Link></a></li>
//                             <li ><a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"
//                                 data-mdb-toggle="modal"
//                                 data-mdb-target="#exampleModal">Add product</a></li>
//                             <li ><a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"><Link to="/products">All Products</Link></a></li>
//                         </ol>



//                         <div className="collapse navbar-collapse" id="basicExampleNav1">


//                             <ul className="navbar-nav ml-auto">



//                                 <li className="nav-item">
//                                     <a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">
//                                         Contact
//       </a>
//                                 </li>
//                               {this.state.togle&&  <li className="nav-item pl-2 mb-2 mb-md-0">
//                                     <a type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">
//                                         <Link to="/Signin">Sign in</Link>
//                                     </a>
//                                 </li>}
//                                 <li className="nav-item pl-2 mb-2 mb-md-0">
//                                     <a type="button"
//                                         className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"><Link to="/Signup">Sign Up</Link></a>
//                                 </li>
//                             </ul>

//                         </div>


//                     </nav>
//                     <Post />
//                 </div>
//                 <Switch>
//                     <Route path="/products">
//                         <Products />
//                     </Route>
//                     <Route path="/Signin">
//                         <SignIn />
//                     </Route>
//                     <Route path="/Signup">
//                         <SignUp />
//                     </Route>
//                 </Switch>
//             </Router>
//         )
//     }
// }

import React, { Component } from 'react'
import axios from 'axios'
import SignIn from './Signin'
import Post from './Post'
import Dashbord from './Dashbord'
import SignUp from './Signup'
import Drink from '../components/Category/Grocery/Drink'
import Pasta from '../components/Category/Grocery/Pasta'
import Keepbox from '../components/Category/Grocery/Keepbox'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Update from './Update'

import {
    CRow,
    CCol,
    CCard,
    CCardBody,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CNav,
    CNavItem,
    CNavLink
} from '@coreui/react'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            togle: true,
            data:[],
            data1:[]
        }

    }
    


    sendinfo() {
        if (!!sessionStorage.getItem('checkAdmin')) {
            this.setState({ togle: false })
        } else {
            this.setState({ togle: true })
        }
    }
   async componentDidMount() {
        await axios.get("http://localhost:3333/api/poducts")
          .then((res) => {
         res.data.filter(e => {
             var array=[]
             var array1=[]
             if(e.category==="Keep box"){
                 array.push(e)
                  
             }
            
            this.setState({ data:array,data1:res.data})
             
         })
            
          }).catch((err) => {
            console.log(err)
          })
        
        
      }
    render() {
        const {data,data1}=this.state
      
        return (
            <Router>


                <CRow>
                    <CCol xs="2">
                        <img src="https://www.carrefourtunisie.com/medias/sliders/2020-04-08/s6desktop.jpg" height="70" alt="mdb logo" />
                    </CCol>
                    <CCol xs="5">
                        <CCard>
                            <CCardBody>

                                <CNav variant="tabs">
                                    <CNavItem>
                                        <CNavLink ><Link to="/Dashbord">Home</Link></CNavLink>
                                    </CNavItem>
                                    <CDropdown inNav>
                                        <CDropdownToggle caret>
                                            Dropdown
                  </CDropdownToggle>
                                        <CDropdownMenu>
                                            <CDropdownItem><Link to="/Post">Add Products</Link></CDropdownItem>
                                            <CDropdownItem>ll Products</CDropdownItem>
                                            <CDropdownItem>Something else here</CDropdownItem>
                                            <CDropdownItem>Separated link</CDropdownItem>
                                        </CDropdownMenu>
                                    </CDropdown>
                                    {/* <CNavItem>
                                        <CNavLink>Link</CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink disabled>Disabled</CNavLink>
                                    </CNavItem> */}
                                </CNav>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol xs="5">
                        <CCard>

                            <CCardBody >
                                <CNav variant="tabs">
          
                                                     <CDropdown inNav>
                                        <CDropdownToggle caret>
                                            Category
                                            
                                         </CDropdownToggle>
                                        
                                        <CDropdownMenu>
                                        
                                        <CDropdown inNav>
                                      
                                        <CDropdownToggle caret>
                                        Grocery
                                            
                                         </CDropdownToggle>
                                         <CDropdownMenu>
                                        <CDropdown inNav>
                                        <CDropdownToggle caret>
                                        Meat
                                         </CDropdownToggle>
                                                <CDropdownMenu>
                                                    <CDropdownItem>Beef</CDropdownItem>
                                                    <CDropdownItem>Lamb</CDropdownItem>
                                                    <CDropdownItem>Pork</CDropdownItem>
                                                </CDropdownMenu>
                                               </CDropdown>
                                               <CDropdown inNav>
                                        <CDropdownToggle caret>
                                        <Link to="/Pasta" >Pasta</Link> 
                                         </CDropdownToggle>
                                                <CDropdownMenu>
                                                    <CDropdownItem>Beef</CDropdownItem>
                                                    <CDropdownItem>Lamb</CDropdownItem>
                                                    <CDropdownItem>Pork</CDropdownItem>
                                                </CDropdownMenu>
                                               </CDropdown>
                                               <CDropdown inNav>
                                        <CDropdownToggle caret>
                                       <Link to="/Drink" >Drinks</Link> 
                                         </CDropdownToggle>
                                                <CDropdownMenu>
                                                    <CDropdownItem>Drink</CDropdownItem>
                                                    <CDropdownItem>Eau</CDropdownItem>
                                                    <CDropdownItem>Jus</CDropdownItem>
                                                </CDropdownMenu>
                                               </CDropdown>
                                               <CDropdown inNav>
                                        <CDropdownToggle caret>
                                        Snaks
                                         </CDropdownToggle>
                                                <CDropdownMenu>
                                                    <CDropdownItem>Beef</CDropdownItem>
                                                    <CDropdownItem>Lamb</CDropdownItem>
                                                    <CDropdownItem>Pork</CDropdownItem>
                                                </CDropdownMenu>
                                               </CDropdown>
                                               <CDropdown inNav>
                                        <CDropdownToggle caret>
                                       <Link to="/Keepbox" > keep box </Link>
                                         </CDropdownToggle>
                                                <CDropdownMenu>
                                                    <CDropdownItem>Beef</CDropdownItem>
                                                    <CDropdownItem>Lamb</CDropdownItem>
                                                    <CDropdownItem>Pork</CDropdownItem>
                                                </CDropdownMenu>
                                               </CDropdown>
                                        </CDropdownMenu> 
                                            </CDropdown>
                                            <CDropdown inNav>
                                      <CDropdownToggle caret>
                                      electronic 
                                       </CDropdownToggle>
                                       <CDropdownMenu>
                                      <CDropdown inNav>
                                      <CDropdownToggle caret>
                                                 Computer and device terms
                                       </CDropdownToggle>
                                              <CDropdownMenu>
                                              <CDropdownItem>Laptop</CDropdownItem>
                                                    <CDropdownItem>TV</CDropdownItem>
                                                    <CDropdownItem>Phone</CDropdownItem>
                                                    <CDropdown inNav>
                                                        <CDropdownToggle caret>
                                                            Accessory
                                         </CDropdownToggle>
                                                        <CDropdownMenu>
                                                            <CDropdownItem>Mause</CDropdownItem>
                                                            <CDropdownItem>Keyboard</CDropdownItem>
                                                            <CDropdownItem>Headphones</CDropdownItem>
                                                            <CDropdownItem>Cable</CDropdownItem>
                                                        </CDropdownMenu>
                                                    </CDropdown>
                                              </CDropdownMenu>
                                             </CDropdown>
                                      </CDropdownMenu> 
                                          </CDropdown>
                                          <CDropdown inNav>                                   
                                      <CDropdownToggle caret>
                                      Clothes                                         
                                       </CDropdownToggle>
                                       <CDropdownMenu>
                                      <CDropdown inNav>
                                      <CDropdownToggle caret>
                                                Man
                                       </CDropdownToggle>
                                              <CDropdownMenu>
                                              <CDropdownItem>Laptop</CDropdownItem>
                                                    <CDropdownItem>TV</CDropdownItem>
                                                    <CDropdownItem>Phone</CDropdownItem>
                                              </CDropdownMenu>
                                             </CDropdown>
                                             <CDropdown inNav>
                                      <CDropdownToggle caret>
                                      Women
                                       </CDropdownToggle>
                                              <CDropdownMenu>
                                              <CDropdownItem>Laptop</CDropdownItem>
                                                    <CDropdownItem>TV</CDropdownItem>
                                                    <CDropdownItem>Phone</CDropdownItem>
                                              </CDropdownMenu>
                                             </CDropdown>
                                      </CDropdownMenu> 
                                          </CDropdown>
                                          <CDropdown inNav>                                      
                                      <CDropdownToggle caret>
                                      makeup
                                       </CDropdownToggle>
                                              <CDropdownMenu>
                                              <CDropdownItem>Laptop</CDropdownItem>
                                                    <CDropdownItem>TV</CDropdownItem>
                                                    <CDropdownItem>Phone</CDropdownItem>
                                              </CDropdownMenu>      
                                          </CDropdown>
                                          <CDropdown inNav>
                                      
                                      <CDropdownToggle caret>
                                      Parfums
                                       </CDropdownToggle>
                                       <CDropdownMenu>
                                      <CDropdown inNav>
                                      <CDropdownToggle caret>
                                                Man
                                       </CDropdownToggle>
                                              <CDropdownMenu>
                                              <CDropdownItem>Laptop</CDropdownItem>
                                                    <CDropdownItem>TV</CDropdownItem>
                                                    <CDropdownItem>Phone</CDropdownItem>
                                              </CDropdownMenu>
                                             </CDropdown>
                                             <CDropdown inNav>
                                      <CDropdownToggle caret>
                                      Women
                                       </CDropdownToggle>
                                              <CDropdownMenu>
                                              <CDropdownItem>Laptop</CDropdownItem>
                                                    <CDropdownItem>TV</CDropdownItem>
                                                    <CDropdownItem>Phone</CDropdownItem>
                                              </CDropdownMenu>
                                             </CDropdown>
                                      </CDropdownMenu> 
                                          </CDropdown>
                                          <CDropdown inNav>
                                      
                                      <CDropdownToggle caret>
                                      Fuits and Vegitables
                                       </CDropdownToggle>
                                       <CDropdownMenu>
                                      <CDropdown inNav>
                                      <CDropdownToggle caret>
                                      Fuits
                                       </CDropdownToggle>
                                              <CDropdownMenu>
                                              <CDropdownItem>Laptop</CDropdownItem>
                                                    <CDropdownItem>TV</CDropdownItem>
                                                    <CDropdownItem>Phone</CDropdownItem>
                                              </CDropdownMenu>
                                             </CDropdown>
                                             <CDropdown inNav>
                                      <CDropdownToggle caret>
                                      Vegitables
                                       </CDropdownToggle>
                                              <CDropdownMenu>
                                              <CDropdownItem>Laptop</CDropdownItem>
                                                    <CDropdownItem>TV</CDropdownItem>
                                                    <CDropdownItem>Phone</CDropdownItem>
                                              </CDropdownMenu>
                                             </CDropdown>
                                      </CDropdownMenu> 
                                          </CDropdown>
                                        </CDropdownMenu> 
                                        

                                    </CDropdown>
                                    <CNavItem>
                                        <CNavLink> <Link to="/Signin">Sign in</Link></CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink ><Link to="/Signup">Sign Up</Link></CNavLink>
                                    </CNavItem>

                                </CNav>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>

                <Switch>
                    <Route path="/Post">
                        <Post />
                    </Route>
                    <Route path="/Dashbord">
                        <Dashbord />
                    </Route>
                    <Route path="/Signin">
                        <SignIn />
                    </Route>
                    <Route path="/Signup">
                        <SignUp />
                    </Route>
                    <Route path="/Update">
                        <Update />
                    </Route>
                    <Route path="/Drink">
                        <Drink />
                    </Route>
                    <Route path="/Keepbox">
                    <Keepbox data={data} />
                    </Route>
                    <Route path="/Pasta">
                    <Pasta data={data1} />
                   { console.log(data1,'rrrrrr')}
                    </Route>
                </Switch>
            </Router>

        )
    }
}