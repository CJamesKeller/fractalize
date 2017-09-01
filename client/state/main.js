const request = require('axios');

let query = "privacy"

module.exports = function (state, emitter) {
  state.main = {
    data: null,
    busy: false
  };

  emitter.on('main:fetch', function () {
    if (state.main.busy) return;

    var url = `${query}`;


    // TEMPORARY:
    state.main.data = url;
    emitter.emit("render");

    // request.get(url)
    // .then(result => {
    //   state.main.data = result.data;
    //   state.main.busy = false;
    //   emitter.emit('render');
    // })
    // .catch(err => {
    //   console.error(err);
    //   state.main.busy = false;
    // });
  });
};
