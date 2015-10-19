import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NameList from '../components/nameList';
import * as NameActions from '../actions/nameActions';

class App extends Component {
  render() {
    const { names, actions } = this.props;
    return <NameList names={names} actions={actions} />;
  }
}

App.propTypes = {
  names: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    names: state.names,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
