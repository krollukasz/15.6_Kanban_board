// KANBAN CARD CLASS
function Card(id,) {
  var self = this;

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
removeCard: function() {
  this.element.parentNode.removeChild(this.element);
  }
}