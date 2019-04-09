import React, { Component } from 'react'
import UserData from "../data/users";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {Link} from "react-router-dom";





export class UserDetails extends Component {

    constructor(props) {
        super()
        this.state = {
            details: "yo",
            id: -1,
            hidden1: false,
            hidden2: true,
            view: false,
        };
        this.changeDetailsHandler = this.changeDetailsHandler.bind(this);
        this.changeViewHandler = this.changeViewHandler.bind(this);
    }


    changeViewHandler(){
        if(this.state.view == false){
            this.setState(prevState => {
                return {
                    view: true
                }
            })
        }
        else{
            this.setState(prevState => {
                return {
                    view: false,
                }
            })
        }
    }

    changeDetailsHandler(data, id) {
        if(data != "") {
            this.setState(prevState => {
                return {
                    details: data,
                    id: id,
                    hidden1: true,
                    hidden2: false
                }
            })
        }
    }




    divStyle(){
        return {width: '18rem'};
    };

    render() {
        let data = this.props.location.state;
        let userId = data.user.id;
        let details = "";
        return (
            <div>
                {UserData.users.map(function(user) {
                    if(user.id === userId){
                        console.log("UserDetails");
                        console.log(this.props);
                        return (
                            <div className="card" style={this.divStyle()}>
                                <img className="card-img-top" src={user.profileImage} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">User {user.id}</h5>
                                    <p className="card-text">{user.firstName + ' ' + user.lastName }</p>
                                    <p className="card-text">{user.email}</p>
                                    <p className="card-text" hidden={this.state.hidden1}>{user.details}</p>
                                    <p className="card-text" hidden={this.state.hidden2}>{this.state.details}</p>
                                    <Link to={
                                        {
                                            pathname: '/',
                                            state: {
                                                details: this.state.details,
                                                id: this.state.id
                                            }
                                        }
                                    }>
                                        Go back
                                        </Link>
                                    {this.state.view ?
                                    < CKEditor
                                        editor={ClassicEditor}
                                        data="<p>Input text here</p>"
                                        onInit={editor => {
                                        // You can store the "editor" and use when it is needed.
                                    }}
                                        onChange={( event, editor ) => {
                                        details = editor.getData();
                                        details = details.replace(/<\/?[^>]+>/ig, " ");
                                        console.log(details);
                                        //console.log(this.state.details);
                                    }}
                                        />
                                        : null
                                    }
                                    <button onClick={() => this.changeDetailsHandler(details, userId)} hidden={!this.state.view} className="btn btn-primary">Select</button>
                                    <p><button onClick={() => this.changeViewHandler()} hidden={this.state.view} className="btn btn-primary">Edit</button></p>
                                    <p><button onClick={() => this.changeViewHandler()} hidden={!this.state.view} className="btn btn-primary">View</button></p>

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
