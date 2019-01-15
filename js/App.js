// GLOBAL VARIABLES
var prefix = "https://cors-anywhere.herokuapp.com/";
var baseUrl = prefix + "https://kodilla.com/pl/bootcamp-api";
var myHeaders =  {
  "X-Client-Id": "3736",
  "X-Auth-Token": "4da4872c185a247662e7ea83375dcdc2"
};

// ASK SERVER ABOUT BOARD RESOURCE
fetch(prefix + baseUrl + "/board", {
  headers: myHeaders,
  cache: "no-cache",
})
  .then(function(resp) {
    return resp.json();
  })
  .then(function(resp) {
    setupColumns(resp.columns);
  });

// FUNCTION TO CREATE COLUMNS
function setupColumns(columns) {
  columns.forEach(function(column) {
    var col = new Column(column.id, column.name);
    board.addColumn(col);
  });
}

// FUNCTION TO CREATE CARDS
function setupCards(col, cards) {
  cards.forEach(function(card) {
    var cardObj = new Card(card.id, card.name);
    col.addCard(cardObj);
  });
}

// FUNCION TO GENERATE TEMPLATE WITH MUSTACHE
function generateTemplate(name, data, basicElement) {
  var template = document.getElementById(name).innerHTML;
  var element = document.createElement(basicElement || "div");

  Mustache.parse(template);
  element.innerHTML = Mustache.render(template, data);

  return element;
}
