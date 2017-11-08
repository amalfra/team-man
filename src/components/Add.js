import React from 'react';
import { connect } from 'react-redux';

import AddScreen from '../screens/Add';
import { increase, decrease } from '../actions/add'

class AddComponent extends React.Component {
  componentDidMount() {
    this.props.increase()
  }

  render() {
    return (
      <AddScreen members={this.props.members} />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    members : state.members
  };
};

const mapDispatchToProps = {
  increase,
  decrease
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
