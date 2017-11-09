import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import EditScreen from '../screens/Edit';
import { remove as removeAction } from '../actions/remove';

class EditComponent extends React.Component {
  constructor(props) {
    super(props);

    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler() {
    this.props.dispatchRemoveAction(this.props.id);
    return this.props.push('/');
  }

  render() {
    return (
      <EditScreen members={this.props.members} handleDelete={this.deleteHandler} />
    );
  }
};

const mapStateToProps = (state, ownParams) => {
  return {
    members : state.members,
    id: ownParams.match.params.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRemoveAction: (id) => dispatch(removeAction(id)),
    push: (path) => dispatch(push(path))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
