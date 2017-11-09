import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import AddScreen from '../screens/add';
import { add as addAction } from '../actions/add'

class AddComponent extends React.Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(values, dispatch) {
    this.props.dispatchAddAction(values);
    return this.props.push('/');
  }

  render() {
    return (
      <AddScreen onSubmit={this.submitHandler} />
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddAction: (member) => dispatch(addAction(member)),
    push: (path) => dispatch(push(path))
  }
};

export default connect(null, mapDispatchToProps)(AddComponent);
