const $ = require('jquery')(window);
global.jQuery = require('jquery');
const bootstrap = require('bootstrap');
const choo = require("choo")
const app = choo()
const main = require("./pages/main")
const state = require('./state');
const layout = require('./pages/_layout');

app.use(state);

app.route('/', (view, state) => layout(main, view, state));
app.route('*', layout.bind(this, main));

app.mount('body');
