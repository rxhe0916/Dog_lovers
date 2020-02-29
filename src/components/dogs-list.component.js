import React, { Component } from "react";
import axios from "axios";

const Dogs = props => (
    <div>
        <div class="d-flex justify-content-center mt-2 col-md-12">
            <img src={props.dog.imagelink} alt="Responsive image" />
        </div>
        <div class="d-flex justify-content-center mt-2 col-md-12">
            <button type="button" class="btn btn-outline-danger"
                onClick={() => { props.deleteDog(props.dog._id) }}>
                Delete
            </button>
        </div>
    </div>
)

export default class DogsList extends Component {
    constructor(props){
        super(props);

        this.deleteDog = this.deleteDog.bind(this);

        this.state = {dogs: []}
    }

    componentDidMount() {
        axios.get("http://localhost:5000/images/list")
        .then(response => {
            this.setState({ dogs: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteDog(id) {
        axios.delete("http://localhost:5000/images/"+id)
        .then(res => console.log(res.data));

        this.setState({
            dogs: this.state.dogs.filter(el => el._id !== id)
        })
    }

    dogslist(){
        return this.state.dogs.map(currentdog => {
            // return <img src={currentdog.imagelink} alt="text" />
            return (
                <Dogs dog={currentdog} deleteDog={this.deleteDog} key={currentdog._id}></Dogs>
            )
        })
    }

    render() {
        return (
            <div>
                { this.dogslist() }
            </div>
        )
    }
}