import React, { Component } from 'react';
import SearchProfile from './Component/Searchprofile'
import Profile from './Component/Profile'
import './css/app.css'

const URL = `https://api.github.com/users`;

export default class App extends Component {
    
    constructor(){
        super()
        this.state = {
            username: "Shrutika80",
            name: "",
            avatar:"",
            html_url:"",
            repos:"",
            bioo:"",
            followers:"",
            followings:"",
            notFound: ""
        }
    }

    fetchProfile(username) {
        fetch(`${URL}/${username}`)
        .then(response => {
            return response.json()
        })
        .then(user => {
            this.setState({
                username: user.login,
                name: user.name,
                avatar: user.avatar_url,
                html_url: user.html_url,
                repos: user.public_repos,
                bioo: user.bio,
                followers: user.followers,
                followings: user.following,
                notFound: user.message

            })
        })
        .catch(err => console.log("opps!! an error ocurred"))
    }

    componentWillMount() {
        this.fetchProfile(this.state.username)
    }

    render() {
        return (
            <div className="app">
                <div className="app-search"><SearchProfile fetchProfile={this.fetchProfile.bind(this)}></SearchProfile></div>
                <div className="app-profile"><Profile user={this.state} /></div>
            </div>
        )
    }
}



