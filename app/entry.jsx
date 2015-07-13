var React = require('react');
var App = require('./app.jsx');
require("./styles.sass");

var Root = React.createClass({
  render: function() {
    return <App />;
  }
});

React.render(<Root />, document.getElementById('react-root'));