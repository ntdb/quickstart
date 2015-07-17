const alt = require('../alt');

class NameActions {
  addName(name) {
    this.dispatch(name);
  }
  removeName(name) {
    this.dispatch(name);
  }
}

module.exports = alt.createActions(NameActions);
