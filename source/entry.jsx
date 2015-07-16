var React = require('react');
var App = require('./scripts/app.jsx');
require("./styles/main.sass");

var Root = React.createClass({
  render: function() {
    return <App />;
  }
});

React.render(<Root />, document.getElementById('react-root'));