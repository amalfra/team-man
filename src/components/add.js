import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import AddScreen from '../screens/add';
import { add as addAction } from '../actions/add'

class AddComponent extends React.Component {
  state = {
    redirect: false,
  };

  submitHandler = (values) => {
    this.props.dispatchAddAction(values);
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/'/>;
    }

    return <AddScreen onSubmit={this.submitHandler} />;
  }
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAddAction: (member) => dispatch(addAction(member)),
});

export default connect(null, mapDispatchToProps)(AddComponent);
