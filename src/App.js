import React, { Component } from 'react';
import './App.css';
import ChatBot from './lib/index';
import SocketComponent from './SocketComponet';
import { connect } from './socket.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        {
          id: '1',
          message: 'hai',
          trigger: 'search'
        },
        {
          id: 'search',
          user: true,
          trigger: '3'
        },
        {
          id: '3',
          component: <SocketComponent />,
          waitAction: true,
          asMessage: true,
          replace: false,
          trigger: 'search'
        }
      ]
    };
  }

  componentWillMount() {
    connect(
      'chan',
      res => {
        console.log(res);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChatBot steps={this.state.steps} />
        </header>
      </div>
    );
  }
}

export default App;
