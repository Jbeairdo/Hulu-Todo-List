import React from 'react';
import Monthly from './Monthly.jsx';
import Bi_Weekly from './Bi_Weekly.jsx';
import Misc from './Misc.jsx';
import Quality_Checks from './Quality_Checks.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="todo-header">
          <img className="hulu-logo" src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png"></img>
          <div className="log-in">Log In</div>
          <div className="sign-up">Sign Up</div>
        </div>
        <div className="todo-container">
          <div className="monthly-container">
            <Monthly />
          </div>
          <div className="bi_weekly-container">
            <Bi_Weekly />
          </div>
          <div className="misc-container">
            <Misc />
          </div>
          <div className="quality_checks-container">
            <Quality_Checks />
          </div>
        </div>
      </div>
    )
  }
}

export default App;