const request = require('axios');
const API_KEY = require("../../config.json");

module.exports = function (state, emitter) {
  state.main = {
    data: [],
    busy: false
  };

  emitter.on("search", ( query ) => {
      if (state.main.busy) return;

      request.get(`https://api.propublica.org/congress/v1/bills/search.json?query=${query.query}`, {
          headers: {
              "X-API-KEY": API_KEY.key
          }
      })
      .then(result => {
          state.main.data = result.data.results[0].bills
          state.main.busy = false;
          emitter.emit("render")
      })
      .catch(err => {
        console.error(err);
        state.main.busy = false;
      });
  });

};
