const React = require('react');
const NameList = require('./components/nameList');
require('../styles/main');

class App extends React.Component {
  render() {
    return <NameList />;
  }
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
}

React.render(<App />, document.getElementById('react-root'));
