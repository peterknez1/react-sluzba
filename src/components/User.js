import React from 'react'

export class User extends React.Component {

    divStyle(){
        return {width: '18rem'};
    };


    render() {
        return (
            <div className = "card" style = {this.divStyle()}>
                <img className = "card-img-top" src = {this.props.user.profileImage} alt = "Card cap" />
                <div className = "card-body">
                    <h5 className = "card-title">User {this.props.user.id}</h5>
                    <p className = "card-text">{this.props.user.firstName + ' ' + this.props.user.lastName }</p>
                    <p className = "card-text">{this.props.user.email}</p>
                    <a href = {"/#user/" + this.props.user.id} className = "btn btn-primary">Details</a>
                    <button onClick={() => this.props.nameChangeHandler(this.props.user.id)}>Change name</button>
                    <button onClick={() => this.props.userSelectHandler(this.props.user.firstName)}>Select</button>
                </div>
            </div>
        )
    }
}

export default User
