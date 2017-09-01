var main = require('./main');

function state (state, emitter) {
  state.appname = 'Fractalize';
  main(state, emitter);
}

module.exports = state;
