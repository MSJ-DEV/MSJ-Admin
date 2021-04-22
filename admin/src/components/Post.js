// import React, { Component } from 'react'
// import axios from 'axios'
// export default class Post extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             imageselected: [],
//             name: "",
//             information: "",
//             catdegory: "",
//             oldprice: "",
//             newprice: "",
//             type: "",
//             quantity: "",
//             quantityinstock: "",
//             status: "",
//             promotion: "",

//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleChange(e) {
//         this.setState({ [e.target.name]: e.target.value })
//         console.log(
//             { [e.target.name]: e.target.value }
//         )
//     }


//     async handleClick() {
//         const { imageselected, name, information, category, oldprice, newprice, type, quantity, quantityinstock, status, promotion } = this.state
//         const formData = new FormData()
//         formData.append("file", imageselected)
//         formData.append('upload_preset', 'qczp9fgd')
//         await axios.post('https://api.cloudinary.com/v1_1/dm1xlu8ce/image/upload', formData).then((res) => {


//             axios.post('http://192.168.22.213:3333/api/poducts', {
//                 name: name,
//                 information: information,
//                 category: category,
//                 oldprice: oldprice,
//                 newprice: newprice,
//                 type: type,
//                 quantity: quantity,
//                 image: res.data.url,
//                 quantityinstock: quantityinstock,
//                 status: status,
//                 promotion: promotion,

//             }).then(res => {
//                 console.log(res)
//             })
//         })
//     }

//     render() {
//         return (
//             <div>

//                             <div className="modal-body">

//                                 <input placeholder="name" onChange={(e) => this.handleChange(e)} name="name" />

//                                 <input placeholder="information" onChange={(e) => this.handleChange(e)} name="information" />

//                                 <input placeholder="category" onChange={(e) => this.handleChange(e)} name="category" />

//                                 <input placeholder="oldprice" onChange={(e) => this.handleChange(e)} name="oldprice" />

//                                 <input placeholder="newprice" onChange={(e) => this.handleChange(e)} name="newprice" />

//                                 <input placeholder="type" onChange={(e) => this.handleChange(e)} name="type" />

//                                 <input placeholder="quantity" onChange={(e) => this.handleChange(e)} name="quantity" />

//                                 <input placeholder="quantityinstock" onChange={(e) => this.handleChange(e)} name="quantityinstock" />

//                                 <input placeholder="status" onChange={(e) => this.handleChange(e)} name="status" />

//                                 <input placeholder="promotion" onChange={(e) => this.handleChange(e)} name="promotion" />
//                                 <CInputFile onChange={(event) => this.setState({ imageselected: event.target.files[0] })} />
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Save changes</button>
//                             </div>
//                         </div>


//         )
//     }
// }
// onClick={this.uploadImage}
// onChange={(event) => this.setState({ imageselected: event.target.files[0] })}
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CTextarea,
    CInput,
    CInputFile,
    CLabel,
    CRow,

} from '@coreui/react'
import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageselected: [],
            name: "",
            information: "",
            catdegory: "",
            oldprice: "",
            newprice: "",
            type: "",
            quantity: "",
            quantityinstock: "",
            status: "",
            promotion: "",
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(
            { [e.target.name]: e.target.value }
        )
    }
    render() {
        return (
            <div className="container1">
                <CRow>
                    <CCardHeader>

                        <small> NEW PRODUCT</small>
                    </CCardHeader>

                    <CCol md="6">
                        <CCard>

                            <CCardBody>
                                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="text-input" >Name</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput id="text-input" placeholder="name" onChange={(e) => this.handleChange(e)} name="name" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="email-input">   expiration date</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput type="email" id="email-input" placeholder="expiration date" onChange={(e) => this.handleChange(e)} name="information" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="password-input">Category</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput placeholder="category" onChange={(e) => this.handleChange(e)} name="category" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CCol md="8">
                                                <CLabel htmlFor="email-input">Email Input</CLabel>
                                            </CCol>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="email-input">Orgin Price</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput placeholder="oldprice" onChange={(e) => this.handleChange(e)} name="oldprice" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>

                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="Image">Chose your Image</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInputFile onChange={(event) => this.setState({ imageselected: event.target.files[0] })} />
                                        </CCol>
                                    </CFormGroup>

                                </CForm>

                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol md="6">
                        <CCard>
                            <CCardBody>
                                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="text-input">Quantity</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput placeholder="quantity" onChange={(e) => this.handleChange(e)} name="quantity" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="email-input">Quantity Stock</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput  placeholder="Quantity Stock" onChange={(e) => this.handleChange(e)} name="Quantity Stock" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="password-input">Status</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput placeholder="status" onChange={(e) => this.handleChange(e)} name="status" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="email-input">Promotion</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput placeholder="promotion" onChange={(e) => this.handleChange(e)} name="Promotion" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="email-input">Promotion Price</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput placeholder="newprice" onChange={(e) => this.handleChange(e)} name="newprice" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                </CForm>

                            </CCardBody>
                        </CCard>
                    </CCol>

                </CRow>


            </div>
        )
    }
}