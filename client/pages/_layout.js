const html = require('choo/html');
const css = require('sheetify');

const navLinks = {
  'Home': {route: ''},
};

const layout = (view, state, emit) => {
  return html`
  <body>
  <nav class="container-fluid">
    <div class="navbar navbar-default navbar-inverse">
          <div class="navbar-header" style="width: 100%">
            <a class="navbar-brand" href="#">${state.appname}</a>
            <ul class="nav navbar-nav">
              ${Object.keys(navLinks).map(key => renderNavLink(state.route, key))}
            </ul>
        </div>
      </nav>
    </div>

    <div class="container-fluid">
        ${view(state, emit)}
    </div>
  </body>
  `;
};

function renderNavLink (route, key) {
  var matchRoute = route;
  if (route === '*') matchRoute = '/';

  var active = '/' + navLinks[key].route === matchRoute ? 'active' : '';
  return html`<li class="${active}"><a href="#${navLinks[key].route}">${key}</a></li>`;
}

module.exports = layout;
