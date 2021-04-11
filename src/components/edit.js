import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import EditScreen from '../screens/edit';
import { remove as removeAction } from '../actions/remove';
import { edit as editAction } from '../actions/edit';

class EditComponent extends React.Component {
  state = {
    redirect: false,
  };

  deleteHandler = () => {
    this.props.dispatchRemoveAction(this.props.id);
    this.setState({ redirect: true });
  };

  submitHandler = (values) => {
    this.props.dispatchEditAction(this.props.id, values);
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/'/>;
    }

    return (
      <EditScreen member={this.props.member} handleDelete={this.deleteHandler} onSubmit={this.submitHandler} />
    );
  }
};

const mapStateToProps = (state, { match: { params: { id }}}) => ({
  member : state.members[id],
  id,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRemoveAction: (id) => dispatch(removeAction(id)),
  dispatchEditAction: (id, member) => dispatch(editAction(id, member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
