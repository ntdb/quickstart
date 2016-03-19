import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NameList from '../../components/nameList/NameList';
import * as NameActions from '../../data/names';

import './App.scss';

const App = (props) => {
  const { names, actions } = props;
  return <NameList names={names} actions={actions} />;
};

App.propTypes = {
  names: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  (state) => ({
    names: state.names,
  }),
  (dispatch) => ({
    actions: bindActionCreators(NameActions, dispatch)
  })
)(App);
