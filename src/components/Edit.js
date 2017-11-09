import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import EditScreen from '../screens/Edit';
import { remove as removeAction } from '../actions/remove';
import { edit as editAction } from '../actions/edit';

class EditComponent extends React.Component {
  constructor(props) {
    super(props);

    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler() {
    this.props.dispatchRemoveAction(this.props.id);
    return this.props.push('/');
  }

  submitHandler(values, dispatch) {
    dispatch(editAction(this.props.id, values));
    return dispatch(push('/'));
  }

  render() {
    return (
      <EditScreen member={this.props.member} handleDelete={this.deleteHandler} onSubmit={this.submitHandler} />
    );
  }
};

const mapStateToProps = (state, ownParams) => {
  let memId = ownParams.match.params.id;
  return {
    member : state.members[memId],
    id: memId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRemoveAction: (id) => dispatch(removeAction(id)),
    dispatchEditAction: (id) => dispatch(editAction(id, member)),
    push: (path) => dispatch(push(path))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
