import React from 'react'
import {Link} from "react-router-dom"
export class User extends React.Component {

    constructor(){
        super()
        this.objectToCsv = this.objectToCsv.bind();
        this.export = this.export.bind();
    }

    divStyle(){
        return {width: '18rem'};
    };

    objectToCsv(user) {

        let headers = Object.keys(user);
        let values = Object.values(user);
        values = values.map(value => value.replace(/<\/?[^>]+(>|$)/g, "").replace(/"/g, '""'));
        const csvRows = [];
        csvRows.push('"' + headers.join('","') + '"');
        csvRows.push('"' + values.join('","') + '"');
        return "sep=,\n"  + csvRows.join("\n");

    }

    export(data, firstName){

        const blob = new Blob([data], { type: 'text/csv; charset=UTF-8' , encoding: 'UTF-8'} );
        const url = window.URL.createObjectURL(blob);
        const newField = document.createElement('newField');
        newField.setAttribute('download', firstName + ".csv");
        newField.setAttribute('hidden' , '');
        newField.setAttribute('href' , url);
        document.body.appendChild(newField);
        newField.click();
        document.body.removeChild(newField);

    }

    exportCsv(user) {

        const csvData = this.objectToCsv(user);
        this.export(csvData, user.firstName);
    }

    render() {
        let details = this.props.user.details;
        details = details.substring(0, 200);
        return (
            <div className = "card" style = {this.divStyle()}>
                <img className = "card-img-top" src = {this.props.user.profileImage} alt = "Card cap" />
                <div className = "card-body">
                    <h5 className = "card-title">User {this.props.user.id}</h5>
                    <p className = "card-text">{this.props.user.firstName + ' ' + this.props.user.lastName }</p>
                    <p className = "card-text">{this.props.user.email}</p>
                    <p className = "card-text">{details}</p>
                    <Link type="button" className="btn btn-primary text-white"  to={
                        {
                            pathname: '/userDetails',
                            state: {
                                user: this.props.user
                            }
                        }
                    }>User details</Link>
                    <button onClick={() => this.props.nameChangeHandler(this.props.user.id)} className="btn btn-primary text-white">Change name</button>
                    <button onClick={() => this.props.userSelectHandler(this.props.user.firstName)} className="btn btn-primary text-white">Select</button>
                    <button onClick={() => (this.exportCsv(this.props.user))} className="btn btn-primary text-white">Export as CSV</button>

                </div>
            </div>
        )
    }
}

export default User
