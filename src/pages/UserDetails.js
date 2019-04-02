import React, { Component } from 'react'
import UserData from "../data/users";



export class UserDetails extends Component {

    constructor(props) {
        super(props);
    }

    divStyle(){
        return {width: '18rem'};
    };

    render() {
        return (
            <div>
                {UserData.users.map(function(user) {
                    if(user.id === this.props.match.params.userId){
                        return (
                            <div className="card" style={this.divStyle()}>
                                <img className="card-img-top" src={user.profileImage} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">User {user.id}</h5>
                                    <p className="card-text">{user.firstName + ' ' + user.lastName }</p>
                                    <p className="card-text">{user.email}</p>
                                    <p className="card-text">{user.details}</p>
                                    <a href={"/"} className="btn btn-primary">Go back</a>
                                </div>
                            </div>
                        )
                    }

                }.bind(this))}
            </div>
        )
    }
}

export default UserDetails
