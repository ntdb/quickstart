const React = require('react');

class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
}

module.exports = App;
