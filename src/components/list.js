import React from 'react';
import { connect } from 'react-redux';

import ListScreen from '../screens/list';

const ListComponent = ({members}) => {
  return (
    <ListScreen members={members} />
  );
};

const mapStateToProps = (state) => {
  return {
    members : state.members
  };
};

export default connect(mapStateToProps)(ListComponent);
