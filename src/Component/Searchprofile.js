import React, { Component } from 'react'
import '../css/searchbox.css'

export default class SearchProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ""
          }
          this.handleForm = this.handleForm.bind(this);
          this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleForm (e) {
        e.preventDefault();
        let username = this.state.username
        this.props.fetchProfile(username)
        this.setState({
            username: ""
        })
    }

    render() {
        return(
            <div className="search-box"> 
                <form onSubmit={this.handleForm}>
                    <input type= "text" placeholder="SEARCH..." value= {this.state.username} onChange={this.handleInput} className="input-field" />
                </form>
            </div>
        );
    }
        
}
