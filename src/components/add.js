import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import AddScreen from '../screens/add';
import { add as addAction } from '../actions/add'

class AddComponent extends React.Component {
  submitHandler(values, dispatch) {
    dispatch(addAction(values));
    return dispatch(push('/'));
  }

  render() {
    return (
      <AddScreen members={this.props.members} onSubmit={this.submitHandler} />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    members : state.members
  };
};

const mapDispatchToProps = {
  addAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
