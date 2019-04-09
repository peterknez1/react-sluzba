import React from 'react'
import Data from '../data/users.json'
import User from '../components/User'

export class Users extends React.Component {

    constructor(){
        super()
        this.state = {
            users: Data.users,
            selected: ""
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.userSelectHandler = this.userSelectHandler.bind(this);
        this.detailsChangeHandler = this.detailsChangeHandler.bind(this);
    }

    detailsChangeHandler(userId, newDetails) {

        this.setState({
            users: this.state.users.map(function (user) {

                if (user.id === userId) {

                    user.details = newDetails;
                }
                return user;
            })
        });

    }






    nameChangeHandler(id) {

        this.setState(prevState => {
            const updatedUsers = prevState.users.map(user =>{
                if(user.id === id) {
                    user.firstName = "Peter"
                }
                return user
            })
            return {
                users: updatedUsers,
                selected: prevState.selected
            }
        })
    }

    userSelectHandler(firstname) {
        this.setState(prevState =>{
            return {
                users: prevState.users,
                selected: firstname
            }
        })
    }

    componentWillMount(){
        console.log("mounting users");
        console.log(this.props);

        if(this.props.location.state != null) {
            this.detailsChangeHandler(this.props.location.state.id, this.props.location.state.details);
        }
        console.log("finished mounting");
    }

    render() {
        const allUsers = this.state.users.map(user => <User key={user.id} user={user}
        nameChangeHandler = {this.nameChangeHandler} userSelectHandler = {this.userSelectHandler} detailsChangeHandler = {this.detailsChangeHandler}
        />);
        console.log("users");
        console.log(this.props.location.state);
        return (
            <div>
                <h3>Users:</h3>

                <p>Selected user: {this.state.selected}</p>

                <div className="users-list">
                    {allUsers}

                </div>
            </div>
        )
    }
}

export default Users
