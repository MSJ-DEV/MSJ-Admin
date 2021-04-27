import React, { Component } from 'react'
import axios from 'axios'
import TheHeader from '../../../containers/TheHeader'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CRow,
    CInputGroupText
  } from '@coreui/react'
 class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageselected: [],
            name: "",
            information: "",
            category: "",
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


            axios.post('http://192.168.22.213:3333/api/poducts', {
                name: name,
                information: information,
                category: category,
                oldprice: oldprice,
                newprice: newprice,
                type: type,
                quantity: quantity,
                image: res.data.url,
                quantityinstock: quantityinstock,
                status: status,
                promotion: promotion,

            }).then(res => {
                console.log(res)
            })
        })
    }

    render() {
        return (
            <div>
                <TheHeader />
<div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Post</h1>
                  <p className="text-muted">Create New Product</p>
                  <CInputGroup className="mb-3">
                    <CInput placeholder="name" onChange={(e) => this.handleChange(e)} name="name"  />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput  placeholder="information" onChange={(e) => this.handleChange(e)} name="information"  />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput placeholder="category" onChange={(e) => this.handleChange(e)} name="category" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput placeholder="oldprice" onChange={(e) => this.handleChange(e)} name="oldprice" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput placeholder="newprice" onChange={(e) => this.handleChange(e)} name="newprice"  />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput  placeholder="type" onChange={(e) => this.handleChange(e)} name="type"   />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput placeholder="quantity" onChange={(e) => this.handleChange(e)} name="quantity"  />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput  placeholder="quantityinstock" onChange={(e) => this.handleChange(e)} name="quantityinstock"  />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput placeholder="status" onChange={(e) => this.handleChange(e)} name="status"   />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput placeholder="promotion" onChange={(e) => this.handleChange(e)} name="promotion" />
                  </CInputGroup>
                      
                    <input type="file"  accept="image/*" onChange={(event) => this.setState({ imageselected: event.target.files[0] })} />
                

                  <CButton color="success" block type="submit" className="btn btn-primary" onClick={this.handleClick}>ADD Product</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
            </div>
        )
    }
}
export default Post