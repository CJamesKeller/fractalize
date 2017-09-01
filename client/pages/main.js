const html = require("choo/html")

module.exports = function (state, emit) {
  // if (!state.main.data) refresh();
  //
  // function refresh () {
  //   emit('main:fetch');
  // }
  //
  // THIS GOES ON THE BUTTON:
  // onclick=${refresh}

  return html`
  <div class="container-fluid">
    <button class="btn" style="float:right">Refresh</button>
    <h2>Platform Summary</h2>
    <div class="row">
        <h1>TITLE</h1>
        <h1>${state.main.data}</h1>
    </div>
  </div>
  `;
};
