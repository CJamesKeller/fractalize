const html = require('choo/html');
const css = require('sheetify');

const layout = (view, state, emit) => {
  return html`
  <body>
    <div class="container-fluid">
        ${view(state, emit)}
    </div>
  </body>
  `;
};

module.exports = layout;
