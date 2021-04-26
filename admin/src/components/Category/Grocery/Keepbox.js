import React, { PureComponent } from "react";
import axios from 'axios'
import Update from '../../Update'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
data:[]

    }
  }
  componentDidMount(){
    var array=[]
      this.props.data.filter((e,i)=>{
        if(e.category==="Keep box"){
                 array.push(e)
        }
        this.setState({data:array})
      })
  }
  delete(id) {
    axios.delete("http://localhost:3333/api/poducts/" + id)
      .then((res) => {
    
 window.location.reload()
      })
  }

  render() {
const {data}=this.state
console.log(this.props.data)
    return (

      <div className='col-8' >

          <div className="product">
        {data.map((element, index) =>

          <div className="card-product" key={index}>
            <img className="card-image" src={element.image} />
            <div>
              <div>
                <input
                  className="starx"
                  type="checkbox"
                  onClick={(event) => {
                    this.delete(element.id,event);
                  }}
                />
               <Link to="/Update"><input
                  className="stary"
                  type="checkbox"
                  onClick={() => {
                    localStorage.setItem('id', element.id);
                    
                  }}
                /></Link> 
              </div>

              <div className="card-title">
         Nmae : {element.name}
                <span className="card-price">
                  <br />
          OldPrice : {element.oldprice} TND

           <br />
          NewPrice : {element.newprice} TND
         </span>

              </div>
              <div className="card-category">
                Type : <a> {element.type}</a>
              </div>
              <div className="card-category">
                Category : <a> {element.category}</a>
              </div>
              <div className="card-category">
                Expiration date : <a>D' EX {element.information}</a>
              </div>
              <div className="card-category">
                Status : <a> {element.status}</a>
              </div>
              <div className="card-category">
                Quantity : <a>{element.quantityinstock} Pices</a>
              </div>
            </div>
          </div>


        )}
       </div>
      </div>
  

      
    

    );
  }
}

export default App;