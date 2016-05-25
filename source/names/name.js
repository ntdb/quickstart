import React, { Component, PropTypes } from 'react';

class Name extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context);
    this.displayName = 'Name';
  }
  removeName = () => {
    this.props.actions.deleteName(this.props.name);
  }
  render() {
    const { name } = this.props;
    return (
      <p>{name} <a onClick={this.removeName}>(remove)</a></p>
    );
  }
}

export default Name;
