"use strict";

document.addEventListener("DOMContentLoaded", function() {
  function randomString() {
    var chars = "0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var str = ""
    for (var i = 0; i < 10; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

  function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || "div");

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
  }

  function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.element = generateTemplate("column-template", {name: this.name};)
  }
});