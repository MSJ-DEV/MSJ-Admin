import React, { Component } from 'react'
import Post from './Post'
import Navbar from './Navbar'
export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Post />
            </div>
        )
    }
}
