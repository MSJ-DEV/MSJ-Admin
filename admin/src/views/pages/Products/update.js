import axios from 'axios';
import React, { Component } from 'react'
import Swal from 'sweetalert2'
export default class update extends Component {
    constructor(props){
        super(props)
        this.state={
            date:"",
            newprice:"",
            quantityinstock:"",
            promotion:"",
            error:{}
        } 
    }
   
    handleValidation(){
        let{newprice,quantityinstock,date,promotion,error}= this.state
        let formIsValid = true;
        if(!date){
           formIsValid = false;
           error.date = "Cannot be empty";
        }
    
        if(!newprice){
            formIsValid = false;
            error.newprice = "Cannot be empty";
         }
         if(!quantityinstock){
            formIsValid = false;
            error.quantityinstock = "Cannot be empty";
         }
         if(!promotion){
            formIsValid = false;
            error.promotion = "Cannot be empty";
         }
        
        this.setState({error: error});
        if(formIsValid=true){
            this.updateProduct()
        }
   return formIsValid
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(
            this.state
        )
        
      }
      updateProduct(){
          const {newprice,quantityinstock,date,promotion}=this.state
        const id=  localStorage.getItem('id')
        axios.patch('http://localhost:3333/api/poducts/'+id,{
            date:date,
            newprice:newprice,
            quantityinstock:quantityinstock,
            promotion:promotion

        }).then((res)=>{
            console.log(res.status)
            if(res.status===201){
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your Change has been saved',
                showConfirmButton: false,
                timer: 2000
              })
               
             setTimeout(()=>{window.location.reload()},2100)
                
            }

        }).catch((err)=>{
            console.log(err)
        })
       
          
      }
    render() {
        return (

  <div>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Product</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-row">
    <div className="col">
    <label>Date expertion</label>
      <input name="date" type="Date" className="form-control" placeholder="Date" onChange={(e)=>this.handleChange(e)}/>
      <span className="error">{this.state.error["date"]}</span>
    </div>
    <div className="col">
    <label>Promotion Price</label>
      <input name="newprice" type="text" className="form-control" placeholder="New price" onChange={(e)=>this.handleChange(e)}/>
      <span className="error">{this.state.error["newprice"]}</span>
    </div>
    </div>
    <div className="form-row">
    <div className="col">
    <label>Quantity</label>
      <input name="quantityinstock" type="text" className="form-control" placeholder="Quantity" onChange={(e)=>this.handleChange(e)}/>
      <span className="error">{this.state.error["quantityinstock"]}</span>
    </div>
    <div className="col">
        <label>Status</label>
      <input name="promotion" type="text" className="form-control" placeholder="Status" onChange={(e)=>this.handleChange(e)}/>
      <span className="error">{this.state.error["promotion"]}</span>
    </div>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={()=>this.handleValidation()}>Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
        )
    }
}
