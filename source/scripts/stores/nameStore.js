const alt = require('../alt');
const NameActions = require('../actions/nameActions');

class NameStore {
  constructor() {
    this.names = [];
    this.bindListeners({
      handleAddName: NameActions.ADD_NAME,
      handleRemoveName: NameActions.REMOVE_NAME
    });
  }

  handleAddName(name) {
    this.names.push(name);
  }

  handleRemoveName(name) {
    const nameIndex = this.names.indexOf(name);
    this.names.splice(nameIndex, 1);
  }
}

module.exports = alt.createStore(NameStore, 'NameStore');
