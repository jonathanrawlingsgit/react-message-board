import React, { Component } from 'react';

import Button from '../components/utility/Button';

export default class TopicCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewTopic = this.addNewTopic.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  addNewTopic(e) {
    console.log(this.state.title);
    this.props.topicSubmit('POST', e, this.state.title);
    this.setState({
      title: '',
    });
  }

  render() {
    return (
      <form className='post-form' onSubmit={e => this.addNewTopic(e)}>
        <input
          className='input-style'
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleInputChange}
        />

        <Button text='Add Topic' color='default' />
      </form>
    );
  }
}
