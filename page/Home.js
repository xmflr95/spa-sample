import View from "./View.js";

function Home() {
  this.id = 'Home';
  this.template = `
    <h1>{{__title__}}</h1>
    <p>this is home page.</p>
  `;
}

Home.prototype = new View();

export default Home;