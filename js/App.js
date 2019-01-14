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

// GENERAL FUNCION
function randomString() {
	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
	var str = '', i;
	for (i = 0; i < 10; i++) {
	  str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
}

function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}

// CREATE NEW COLUMN
var todoColumn = new Column('To Do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// ADD COLUMNS TO THE BOARD
board.createColumn(todoColumn);
board.createColumn(doingColumn);
board.createColumn(doneColumn);

// CREATE NEW CARDS
var card1 = new Card('New task');
var card2 = new Card('Create Kanban board');

// ADD CARDS TO COLUMNS
todoColumn.createCard(card1);
doingColumn.createCard(card2);