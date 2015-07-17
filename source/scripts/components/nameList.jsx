const React = require('react');
const NameStore = require('../stores/nameStore');
const NameActions = require('../actions/nameActions');

class App extends React.Component {
  componentDidMount() {
    NameStore.listen(this.onChange);
  }
  componentWillUnmount() {
    NameStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  render() {
    const names = this.state.names.map(name =>
      <p>{name} <a onClick={this.removeName.bind(this, name)}>(remove)</a></p>
    );
    return (
      <div>
        <h3>Names!</h3>
        {names}
        <a onClick={this.addName}>Add Name</a>
      </div>
    );
  }
  removeName(name) {
    NameActions.removeName(name);
  }
  addName() {
    const random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    NameActions.addName(random);
  }
  constructor(props) {
    super(props);
    this.displayName = 'App';
    this.state = NameStore.getState();
    this.onChange = this.onChange.bind(this);
  }
}

module.exports = App;
