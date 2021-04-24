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
    CLabel,
    CRow,

} from '@coreui/react'
import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newprice: "",
            quantityinstock: "",
            status: "",
            promotion: "",
        }
        this.UpdateProduct = this.UpdateProduct.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(
            { [e.target.name]: e.target.value }
        )
    }
    UpdateProduct() {
        const { newprice, quantityinstock, status, promotion } = this.state
        const id = localStorage.getItem('id')
        axios.patch('http://localhost:3333/api/poducts/' + id, {
            newprice: newprice,
            quantityinstock: quantityinstock,
            status: status,
            promotion: promotion,

        }).then(res => {
            console.log(res)
        })

    }
    render() {
        return (
            <div className="container2">
                <CRow>
                    <CCol md="5">
                        <CCardHeader>

                            <small> Update PRODUCT</small>

                        </CCardHeader>
                    </CCol>
                    <CRow>
                        <CCol md="6">
                            <CCard>
                                <CCardBody>
                                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">

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
                    </CRow>
                    <CRow >
                        <CCol md='7'>
                            <CButton onClick={() => this.UpdateProduct()}> Save </CButton>
                        </CCol>
                    </CRow>

                </CRow>


            </div>
        )
    }
}