// COLUM CLASS
function Column(id, name) {
  var self = this;

  this.id = id;
  this.name = name || "No name given";
  this.element = generateTemplate("column-template", { name: this.name, id: this.id });

  this.element.querySelector(".column").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-delete")) {
        self.removeColumn();
    }

    // if add card button is event target
    if (event.target.classList.contains("add-card")) {

      // show prompt to define card name
      var cardName = prompt("Enter the name of the card");
      event.preventDefault();

      // create FormData with key/value
      var data = new FormData();
      data.append("name", cardName);
      data.append("bootcamp_kanban_column_id", self.id);

      // Fetch to API
      fetch(baseUrl + "/card", {
        method: "POST",
        headers: myHeaders,
        body: data,
      })
      .then(function(res) {
        return res.json();
      })
      .then(function(resp) {
        var card = new Card(resp.id, cardName);
        self.addCard(card);
      });

      // Add card method
      self.addCard(new Card(cardName));
    }
});
}

// COLUMN METHODS

Column.prototype = {

// METHOD FOR CARD ADD  
addCard: function(card) {
  this.element.querySelector("ul").appendChild(card.element);
},

// METHOD FOR COLUMN REMOVE
removeColumn: function() {
  var self = this;
  fetch(baseUrl + "/column/" + self.id, { method: "DELETE", headers: myHeaders })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(resp) {
      self.element.parentNode.removeChild(self.element);
    });
}
};