import React, { Component } from 'react'
import axios from 'axios'
export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageselected: [],
            img: {}
        }
        this.uploadImage = this.uploadImage.bind(this)
    }
    uploadImage = () => {
        const { imageselected } = this.state
        const formData = new FormData()
        formData.append("file", imageselected)
        formData.append('upload_preset', 'qczp9fgd')
        axios.post('https://api.cloudinary.com/v1_1/dm1xlu8ce/image/upload', formData).then((res) => {
            this.setState({ img: res.data.url })
        })
        console.log(this.state.img)
    }
    render() {
        return (
             <div className='pop'>
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
                                
                                <input placeholder="name"/> 

                                <input placeholder="information"/>

                                <input placeholder="category"/>

                                <input placeholder="oldprice"/>

                                <input placeholder="newprice"/>

                                <input placeholder="tyepe"/>

                                <input placeholder="quantity"/>

                                <input placeholder="quantityinstock"/>
                                
                                <input placeholder="status"/>

                                <input placeholder="promotion"/>
                                <input type="file" onChange={(event) => this.setState({ imageselected: event.target.files[0] })}/>
                                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                    Close
        </button>
                                <button type="button" className="btn btn-primary" onClick={this.uploadImage}>Save changes</button>
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