import React, { PureComponent } from "react";
import axios from 'axios'
import StarsRating from 'stars-rating';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Update from './Update'
class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: [],

    }
    this.getData = this.getData.bind(this)
    this.delete = this.delete.bind(this)
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    axios.get("http://localhost:3333/api/poducts")
      .then((res) => {
        console.log(res.data)
        this.setState({ data: res.data })
      }).catch((err) => {
        console.log(err)
      })

  }
  delete(id) {
    axios.delete("http://localhost:3333/api/poducts/" + id)
      .then((res) => {
    
        this.getData()
      })
  }

  render() {
    const { data } = this.state

    return (
      <div>
        {data.map((element, index) =>

          <div className="card-product" key={index}>
            <img className="card-image" src={element.image} />
            <div>
              <div>
                <input
                  className="starx"
                  type="checkbox"
                  onClick={() => {
                    this.delete(element.id);
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
                <span>
                  <StarsRating
                    rating={5}
                    starRatedColor="orange"
                    starDimension="20px"
                    starSpacing="1px"
                    numberOfStars={5}
                    name="rating"
                  />
                </span>
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

    );
  }
}

export default App;