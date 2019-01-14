// KANBAN CARD CLASS
function Card(id,) {
  var self = this; // use self to keep context

  // Set initial card parameters
  this.id = id;
  this.name = name || "No name given";
  this.element = generateTemplate('card-template', { description: this.name }, 'li');

  this.element.querySelector('.card').addEventListener('click', function (event) {
    event.stopPropagation();

    if (event.target.classList.contains('btn-delete')) {
        self.removeCard();
    }
  });
}

// CARD METHOD

Card.prototype = {

// remove card method
removeCard: function() {
  var self = this;

  fetch(baseUrl + "/card/" + self.id, { method: "DELETE", headers: myHeaders })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(resp) {
      self.element.parentNode.removeChild(this.element);
    })
  }
}
