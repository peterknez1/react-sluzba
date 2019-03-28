import React, { Component } from 'react';
import logo from '../images/logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            TODO:

            <ol className="text-left">
              <li className="text-left">create component User which will display users's: profile image, first name, last name, email & details button (you can use Card view: https://getbootstrap.com/docs/4.0/components/card/)</li>
              <li className="text-left">retrieve data from data/users.json file and display User component for each user on this page</li>
              <li className="text-left">create new page: UserDetails</li>
              <li className="text-left">if visitor clicks on Details button inside User component, redirect him/her to #/user/:userId details page and display all the data for the selected user (update routes.js file also!)</li>
            </ol>


          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
