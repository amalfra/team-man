import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListScreen from '../screens/list';

const ListComponent = ({ members }) => (
  <ListScreen members={members} />
);

ListComponent.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

const mapStateToProps = ({ members }) => ({
  members,
});

export default connect(mapStateToProps)(ListComponent);
