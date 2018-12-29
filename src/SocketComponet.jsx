import React, { Component } from 'react';
import { askBot, getAnswer } from './socket.js';
import { Loading } from 'react-simple-chatbot';
export default class SocketComponet extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      result: '',
      trigger: false
    };
    this.triggetNext = this.triggetNext.bind(this);
  }
  componentDidMount() {
    const { steps } = this.props;
    const search = steps.search.value;
    askBot(search);
    getAnswer(this.triggetNext);
  }

  triggetNext(data) {
    console.log('got__msg');
    this.setState({ loading: false, result: data });
    this.props.triggerNextStep();
  }

  render() {
    const { loading, result } = this.state;
    return (
      <div className="dbpedia">
        {loading ? <Loading /> : result}
        {!loading && (
          <div
            style={{
              textAlign: 'center',
              marginTop: 20
            }}
          />
        )}
      </div>
    );
  }
}
