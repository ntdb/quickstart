import React, { Component, PropTypes } from 'react';
import Name from './name';

import styles from './names.scss';

class NameList extends Component {
  static propTypes = {
    names: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context);
    this.displayName = 'NameList';
  }
  addName = () => {
    const random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    this.props.actions.addName(random);
  }
  render() {
    const { names, actions } = this.props;
    return (
      <div>
        <h3 className={styles.header}>Names!</h3>
        {names.map(name => <Name key={name} name={name} actions={actions} />)}
        <a onClick={this.addName}>Add Name</a>
      </div>
    );
  }
}

export default NameList;
