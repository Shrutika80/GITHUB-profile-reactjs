
import React, { Component } from 'react'
import '../css/profile.css'

export default class profile extends Component {
    constructor(props){
        super(props)
    }
    render() {
        if(this.props.user.notFound === 'Not Found')
        return (
            <div className="not-found">
                <h2>Oops!</h2>
                <p>Can't find this user. Try again.</p>
            </div>
        )
        else{
            return(
                <div className="container">
                    <div className="shape">
                        <img src={this.props.user.avatar} alt="Profile image" className="image"/>
                    </div>
                    <h3><a href={this.props.user.html_url}>{this.props.user.name}</a></h3>
                    <h3 className="title">{this.props.user.bioo}</h3>
                        <div className="social-info">
                        <div className="info">
                            <h6>Followers</h6><p className="info-p">{this.props.user.followers}</p>
                        </div>  
                        <div className="info">
                            <h6>Following</h6><p className="info-p">{this.props.user.followings}</p>
                        </div>
                        <div className="info">
                            <h6>Repositories</h6><p className="info-p">{this.props.user.repos}</p>
                        </div>
                    </div>
                </div>    
            )
        }
    }
}
