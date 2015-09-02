const React = require('react');
const NameList = require('./components/nameList');
require('../styles/main');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    return <NameList />;
  }
}

React.render(<App />, document.getElementById('react-root'));
