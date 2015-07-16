const React = require('react');
const App = require('./scripts/app');
require('./styles/main');

class Root extends React.Component {
  render() {
    return <App />;
  }
  constructor(props) {
    super(props);
    this.displayName = 'Root';
  }
}

React.render(<Root />, document.getElementById('react-root'));
