import React, { Component } from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const TheLayout = React.lazy(() => import('./containers/TheLayout'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Post = React.lazy(() => import('./views/pages/Post/Post'));
const Products = React.lazy(() => import('./views/pages/Products/Products'));
const Profile = React.lazy(() => import('./views/pages/Account/Profile'));
class App extends Component {
  constructor(props){
    super(props)
      this.state={
      toggle:false
      
    }
  }
  componentDidMount(){
    if(localStorage.getItem('id')){
      this.setState({toggle:true})
    }else{
      this.setState({toggle:false})
 
    }
  }

  render() {
    const {toggle}=this.state
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
            {toggle && <Route exact path="/Post" name="Post Page" render={props => <Post {...props}/>} />}
             {toggle && <Route exact path="/Products" name="Products Page" render={props => <Products {...props}/>} />}
             {toggle && <Route exact path="/Profile" name="Profile Page" render={props => <Profile {...props}/>} />}
              {toggle &&<Route path="/" name="Home" render={props => <TheLayout {...props}/>} />}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
