const React = require('react');
const NameStore = require('../stores/nameStore');

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
    const names = [];
    for (const name of this.state.names) {
      names.push(<p>{name}</p>);
    }
    return (
      <div>
        <h3>Names!</h3>
        {names}
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.displayName = 'App';
    this.state = NameStore.getState();
  }
}

module.exports = App;
