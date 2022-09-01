import View from "./View.js";

function About() {
  this.id = 'About';
  this.template = `
    <h1>{{__title__}}</h1>
    <p>this is about page.</p>
  `;
}

About.prototype = new View();

export default About;