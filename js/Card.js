// KANBAN CARD CLASS
function Card(id, name) {
  var self = this; // use self to keep context

  // SET INITAL CARD PARAMETERS
  this.id = id;
  this.name = name || "No name given";
  this.element = generateTemplate("card-template", { description: this.name }, "li");

  // ADD LISTENER FOR ALL CARDS
  this.element.querySelector(".card").addEventListener("click", function (event) {
    event.stopPropagation();

    // REMOVE CARD - PROPAGATION STOPED, ONLY DELETE BUTTON IS ACTIVE
    if (event.target.classList.contains("btn-delete")) {
      self.removeCard();
    }
  });
}

// CARD METHOD

Card.prototype = {

// REMOVE CARD METHOD
removeCard: function() {
  var self = this;

  fetch(baseUrl + "/card/" + self.id, { method: "DELETE", headers: myHeaders })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(resp) {
      self.element.parentNode.removeChild(self.element);
    })
  }
}
