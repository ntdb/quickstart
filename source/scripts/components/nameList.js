import React, { Component, PropTypes } from 'react';

class NameList extends Component {
  static propTypes = {
    names: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context);
    this.displayName = 'NameList';
  }
  removeName(name) {
    this.props.actions.deleteName(name);
  }
  addName() {
    const random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    this.props.actions.addName(random);
  }
  render() {
    const { names } = this.props;
    return (
      <div>
        <h3>Names!</h3>
        {names.map(name =>
          <p key={name}>{name} <a onClick={this.removeName.bind(this, name)}>(remove)</a></p>
        )}
        <a onClick={this.addName.bind(this)}>Add Name</a>
      </div>
    );
  }
}

export default NameList;
