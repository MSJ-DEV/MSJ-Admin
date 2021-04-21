import React, { Component } from 'react'
import axios from 'axios'
export default class Post extends Component {
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
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Product</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-mdb-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">

                                <input placeholder="name" onChange={(e) => this.handleChange(e)} name="name" />

                                <input placeholder="information" onChange={(e) => this.handleChange(e)} name="information" />

                                <input placeholder="category" onChange={(e) => this.handleChange(e)} name="category" />

                                <input placeholder="oldprice" onChange={(e) => this.handleChange(e)} name="oldprice" />

                                <input placeholder="newprice" onChange={(e) => this.handleChange(e)} name="newprice" />

                                <input placeholder="type" onChange={(e) => this.handleChange(e)} name="type" />

                                <input placeholder="quantity" onChange={(e) => this.handleChange(e)} name="quantity" />

                                <input placeholder="quantityinstock" onChange={(e) => this.handleChange(e)} name="quantityinstock" />

                                <input placeholder="status" onChange={(e) => this.handleChange(e)} name="status" />

                                <input placeholder="promotion" onChange={(e) => this.handleChange(e)} name="promotion" />
                                <input type="file" onChange={(event) => this.setState({ imageselected: event.target.files[0] })} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                    Close
                                  </button>
                                <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
// onClick={this.uploadImage}
// onChange={(event) => this.setState({ imageselected: event.target.files[0] })}