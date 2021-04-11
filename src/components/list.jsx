import React from 'react';
import { connect } from 'react-redux';

import ListScreen from '../screens/list';

const ListComponent = ({ members }) => (
  <ListScreen members={members} />
);

const mapStateToProps = ({ members }) => ({
  members,
});

export default connect(mapStateToProps)(ListComponent);
