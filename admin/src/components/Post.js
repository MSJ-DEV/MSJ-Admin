import axios from 'axios'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
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
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(
            { [e.target.name]: e.target.value }
        )
    }
    async handleClick() {
        const { imageselected, name, information, category, oldprice, newprice, type, quantity, quantityinstock, status, promotion } = this.state
        const formData = new FormData()
        formData.append("file", imageselected)
        formData.append('upload_preset', 'qczp9fgd')
        await axios.post('https://api.cloudinary.com/v1_1/dm1xlu8ce/image/upload', formData).then((res) => {
            console.log(res.data.url)
            axios.post('http://localhost:3333/api/poducts', {
                name: name,
                information: information,
                category: category,
                oldprice: oldprice,
                newprice: newprice,
                type: type,
                quantity: Number(quantity),
                image: res.data.url,
                quantityinstock: Number(quantityinstock),
                status: status,
                promotion: promotion,

            }).then(res => {
                console.log(res)
            })
        })
       
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
                                            <CCol md="8">
                                                <CLabel htmlFor="input"> expiration date</CLabel>
                                            </CCol>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput type="date" id="date-input" name="date-input" placeholder="date" onChange={(e) => this.handleChange(e)} name="information" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="input">Category</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput placeholder="category" onChange={(e) => this.handleChange(e)} name="category" />
                                            <br />
                                        </CCol>
                                    </CFormGroup>

                                    <CFormGroup row>
                                        <CCol md="8">
                                            <CLabel htmlFor="input">type</CLabel>
                                        </CCol>
                                        <CCol md="8">
                                            <CInput placeholder="type" onChange={(e) => this.handleChange(e)} name="type" />
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
                                            <CInput placeholder="Quantity Stock" onChange={(e) => this.handleChange(e)} name="quantityinstock" />
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
                    <CCol md='4'>
                        <CButton onClick={()=>this.handleClick()}> Save </CButton>
                    </CCol>

                </CRow>


            </div>
        )
    }
}