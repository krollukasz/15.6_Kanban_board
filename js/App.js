// GLOBAL VARIABLES
var baseUrl = "https://kodilla.com/pl/bootcamp-api";
var myHeaders =  {
  "X-Client-Id": "3736",
  "X-Auth-Token": "4da4872c185a247662e7ea83375dcdc2"
};

// ASK SERVER ABOUT BOARD RESOURCE
fetch(baseUrl + "/board", { headers: myHeaders })
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

// CREATE NEW COLUMN
var todoColumn = new Column("To Do");
var doingColumn = new Column("Doing");
var doneColumn = new Column("Done");

// ADD COLUMNS TO THE BOARD
board.createColumn(todoColumn);
board.createColumn(doingColumn);
board.createColumn(doneColumn);

// CREATE NEW CARDS
var card1 = new Card("New task");
var card2 = new Card("Create Kanban board");

// ADD CARDS TO COLUMNS
todoColumn.createCard(card1);
doingColumn.createCard(card2);