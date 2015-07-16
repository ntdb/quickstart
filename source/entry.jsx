var React = require("react");
var App = require("./scripts/app");
require("./styles/main");

var Root = React.createClass({
  displayName: "Root",
  render: function() {
    return <App />;
  }
});

React.render(<Root />, document.getElementById("react-root"));
