import React from 'react';
import { connect } from 'react-redux';

import EditScreen from '../screens/Edit';

const EditComponent = ({members}) => {
  return (
    <EditScreen members={members} />
  );
};

const mapStateToProps = (state) => {
  return {
    members : state.members
  };
};

export default connect(mapStateToProps)(EditComponent);
