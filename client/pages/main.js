const html = require("choo/html");
const tile = require("../components/tile");
const css = require("sheetify");

const overWrap = css`
    :host {
        padding-right: 20px;
        padding-left: 20px;
        padding-top: 5px;
        padding-bottom: 10px;
        background-color: Gainsboro;
        border: 1px solid darkgrey;
    }
`;

const buttonStyle = css`
    :host {
        box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        background-color: tomato;
        margin: 10px;
        padding: 10px;
        border: 1px solid navy;
        font-weight: bold;
    }
`;

module.exports = function (state, emit) {

  let search = function() {
      let query = document.getElementById("searchBox");
      emit("search", {
          "query": query.value
      });
  };

  return html`
  <div class="container-fluid ${overWrap}">
      <label for="searchBox">Search:</label>
      <input type="text" id="searchBox" />
      <button class="btn ${buttonStyle}" style="float:right" onclick=${search}>Search!</button>
      <h2>Search for bills!</h2>
      <div class="row">
          <h1>Results:</h1>
          <h1>${state.main.data}</h1>
          ${tile(state, emit)}
      </div>
  </div>
  `;
};
