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
import Products from './products'
import SignIn from './Signin'
import Post from './Post'
import Dashbord from './Dashbord'
import SignUp from './Signup'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
            togle: true
        }
        this.checkAdmin = this.checkAdmin.bind(this)
    }
    componentDidMount() {
        this.checkAdmin()
    }
    checkAdmin() {
        if (!!sessionStorage.getItem('checkAdmin')) {
            this.setState({ togle: false })
        } else {
            this.setState({ togle: true })
        }

    }
    render() {
        return (
            <Router>


                <CRow>
                    <CCol xs="2">
                        <img src="https://www.carrefourtunisie.com/medias/sliders/2020-04-08/s6desktop.jpg" height="70" alt="mdb logo" />
                    </CCol>
                    <CCol xs="6">
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
                                            <CDropdownItem><Link to="/products">All Products</Link></CDropdownItem>
                                            <CDropdownItem>Something else here</CDropdownItem>
                                            <CDropdownItem divider />
                                            <CDropdownItem>Separated link</CDropdownItem>
                                        </CDropdownMenu>
                                    </CDropdown>
                                    <CNavItem>
                                        <CNavLink>Link</CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink disabled>Disabled</CNavLink>
                                    </CNavItem>
                                </CNav>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol xs="4">
                        <CCard>

                            <CCardBody >
                                <CNav variant="pills">
                                    <CNavItem>
                                        <CNavLink active>Link</CNavLink>
                                    </CNavItem>
                                    <CDropdown inNav>
                                        <CDropdownToggle caret>
                                            Dropdown
                  </CDropdownToggle>
                                        <CDropdownMenu>
                                            <CDropdownItem>Action</CDropdownItem>
                                            <CDropdownItem>Another action</CDropdownItem>
                                            <CDropdownItem>Something else here</CDropdownItem>
                                            <CDropdownItem divider />
                                            <CDropdownItem>Separated link</CDropdownItem>
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
                </Switch>
            </Router>

        )
    }
}