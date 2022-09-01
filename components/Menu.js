import View from "../page/View.js";

function Menu() {
  this.id= 'Menu';
  this.template = `
    <a href="#/" menu-link>HOME</>
    <a href="#/post" menu-link>POST</>
    <a href="#/about" menu-link>ABOUT</>
  `;
}

Menu.prototype = new View();

export default Menu;