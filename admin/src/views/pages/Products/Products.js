import React, { Component } from 'react'
import axios from 'axios'
import TheHeader from '../../../containers/TheHeader'
import Update from './update'
export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            i:11
        }
    }
    componentDidMount() {
        console.log("***********************************************")
        axios.get('http://192.168.1.15:3333/api/poducts').then((res) => {
            this.setState({ data: res.data })
            console.log(res.data);
        })
    }
    render() {
        const { data,i } = this.state
        return (
            <div>

                <div>
                    <TheHeader />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                        <thead className="thead-light">
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Orgin Price</th>
                                <th>New Price</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Quantity In Stock</th>
                                <th>Status</th>
                                <th>Promotion</th>
                                <th>Delet</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(0,i).map((e, i) =>

                                <tr key={i}>
                                    <td className="clearfix">
                                        <div className="c-avatar">
                                            <img src={e.image} className="c-avatar-img" alt="..."/>
                                            {/* <span className="c-avatar-status bg-success"></span> */}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>{e.name}</strong>
                                    </td>
                                    <td className="clearfix">
                                        <strong>{e.date}</strong>
                                    </td>
                                    <td>
                                        <div className="clearfix">

                                            <strong>{e.category}</strong>
                                        </div>

                                    </td>
                                    <td className="clearfix">
                                        <strong>{e.oldprice}</strong>
                                    </td>
                                    <td className="clearfix">
                                        <strong>{e.newprice}</strong>
                                    </td>
                                    <td className="clearfix">
                                        <strong>{e.type}</strong>
                                    </td>
                                    <td className="clearfix">
                                        <strong>{e.quantity}</strong>
                                    </td>
                                    <td className="clearfix">
                                        <strong>{e.quantityinstock}</strong>
                                    </td>
                                    <td className="clearfix">
                                        <strong>{e.status}</strong>
                                    </td>
                                    <td className="clearfix">
                                        <strong>{e.promotion}</strong>
                                    </td>
                                    <td className="clearfix">
                                        <input
                                            className="starx"
                                            type="checkbox"
                                        />

                                    </td>
                                    <td>  <input
                                        data-toggle="modal" data-target="#exampleModal"
                                        className="stary"
                                        type="checkbox"
                                           onClick={()=>localStorage.setItem("id",e.id)}
                                    /></td>
                                </tr>
                            )}
                        </tbody>
                        
                    </table>
                    
                    <div className="showmore"  ><button id="displaymore" onClick={()=>this.setState({i:i+5})}>Show more...</button></div>
                    
                </div>
                <Update />
            </div>

        )
    }
}
// const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: 'btn btn-success',
//       cancelButton: 'btn btn-danger'
//     },
//     buttonsStyling: false
//   })
  
//   swalWithBootstrapButtons.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, delete it!',
//     cancelButtonText: 'No, cancel!',
//     reverseButtons: true
//   }).then((result) => {
//     if (result.isConfirmed) {
//       swalWithBootstrapButtons.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     } else if (
//       /* Read more about handling dismissals below */
//       result.dismiss === Swal.DismissReason.cancel
//     ) {
//       swalWithBootstrapButtons.fire(
//         'Cancelled',
//         'Your imaginary file is safe :)',
//         'error'
//       )
//     }
//   })