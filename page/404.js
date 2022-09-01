import View from "./View.js";

function NF() {
  this.id = 'Not Found';
  this.template = `
    <h1>Sorry, Page {{__title__}}</h1>
  `
}

NF.prototype = new View();

export default NF;
