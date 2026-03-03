import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddScreen from '../screens/add';
import addAction from '../actions/add';

const AddComponent = ({ dispatchAddAction }) => {
  const [redirect, setRedirect] = useState(false);

  const submitHandler = (values) => {
    dispatchAddAction(values);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to='/'/>;
  }
  return <AddScreen onSubmit={submitHandler} />;
};

AddComponent.propTypes = {
  dispatchAddAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAddAction: (member) => dispatch(addAction(member)),
});

export default connect(null, mapDispatchToProps)(AddComponent);
