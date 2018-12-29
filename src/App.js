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
          <h3>
            Simple Chat bot using
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              color="#61dafb"
            >
              React
            </a>
            ,
            <a
              className="App-link"
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              node
            </a>
            ,
            <a
              className="App-link"
              href="https://socket.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              socket.io
            </a>
            ,
            <a
              className="App-link"
              href="https://dialogflow.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              api.ai
            </a>
          </h3>

          <ChatBot steps={this.state.steps} />

          <div className="App-footer">
            P.S find the server code
            <a
              className="App-link"
              href="https://github.com/mcsekar12/simple-node-socket-io"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
