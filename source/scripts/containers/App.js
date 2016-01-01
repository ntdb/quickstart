import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NameList from '../components/nameList';
import * as NameActions from '../data/names';

class App extends Component {
  static propTypes = {
    names: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  render() {
    const { names, actions } = this.props;
    return <NameList names={names} actions={actions} />;
  }
}

export default connect(
  (state) => ({
    names: state.names,
  }),
  (dispatch) => ({
    actions: bindActionCreators(NameActions, dispatch)
  })
)(App);
