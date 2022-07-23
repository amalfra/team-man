import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import AddScreen from '../screens/add';
import addAction from '../actions/add';

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
      return <Navigate to='/'/>;
    }

    return <AddScreen onSubmit={this.submitHandler} />;
  }
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAddAction: (member) => dispatch(addAction(member)),
});

export default connect(null, mapDispatchToProps)(AddComponent);
