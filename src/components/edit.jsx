import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import EditScreen from '../screens/edit';
import removeAction from '../actions/remove';
import editAction from '../actions/edit';

const EditComponent = ({ members, dispatchRemoveAction, dispatchEditAction }) => {
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  const deleteHandler = () => {
    dispatchRemoveAction(id);
    setRedirect(true);
  };

  const submitHandler = (values) => {
    dispatchEditAction(id, values);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to='/'/>;
  }

  return (
    <EditScreen member={members[id]} handleDelete={deleteHandler} onSubmit={submitHandler} />
  );
};

const mapStateToProps = (state) => ({
  members: state.members,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRemoveAction: (id) => dispatch(removeAction(id)),
  dispatchEditAction: (id, member) => dispatch(editAction(id, member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
