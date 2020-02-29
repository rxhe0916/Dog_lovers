import React, { Component } from "react";
import axios from "axios";

export default class DogsView extends Component {
    constructor(props){
        super(props);

        this.onNext = this.onNext.bind(this);
        this.onSave = this.onSave.bind(this);

        this.state = {
            imagelink: ''
        }
        
        axios.get("https://dog.ceo/api/breeds/image/random")
        // .then(res => console.log(res.data.message)
        .then(res => {
             this.setState({
                imagelink: res.data.message
            });
        })
    }

    onSave(){
        // e.preventDefault();
        const dog = {
            imagelink: this.state.imagelink
        }

        console.log(dog);

        axios.post("http://localhost:5000/images/add", dog)
        .then(res => console.log(res.data));

    }

    onNext() {
        axios.get("https://dog.ceo/api/breeds/image/random")
        // .then(res => console.log(res.data.message)
        .then(res => {
             this.setState({
                imagelink: res.data.message
            });
        })
    }

    render() {
        return (
            <div>
                <div class="d-flex justify-content-center">
                    <img src={this.state.imagelink} alt="Responsive image" />
                </div>
                <div class="d-flex justify-content-center mt-2 col-md-12">
                    <button type="button" class="btn btn-outline-primary mr-1"
                        onClick={this.onSave}>Save</button>
                    
                    <button type="button" class="btn btn-outline-info mr-1"
                        onClick={this.onNext}>Next</button>
                </div>
            </div>
        )
    }
}