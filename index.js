console.log("[INIT] >>>>");

const app = document.getElementById('root');

function View() {}
View.prototype.getId = function() {
  return this.id;
};
View.prototype.getHtml = function() {
  return this.template;
};
View.prototype.setTemplateData = function(key, value) {
  console.log(key, value);
  this.template = this.template.replace(`{{__${key}__}}`, value);
}
View.prototype.render = function(data) {
  // this.setTemplateData({ key, value } = { ...data });
  console.log(data);
  const { key, value } = data;
  this.setTemplateData(key, value);
  return this.getHtml();
}

function Menu() {
  this.id= 'Menu';
  this.template = `
    <a href="#/" menu-link>HOME</>
    <a href="#/post" menu-link>POST</>
    <a href="#/about" menu-link>ABOUT</>
  `;
}

function Home() {
  this.id = 'Home';
  this.template = `
    <h1>{{__title__}}</h1>
    <p>this is home page.</p>
  `;
}

function Post() {
  this.id = 'Post';
  this.template = `
    <h1>{{__title__}}</h1>
    <p>this is post page.</p>
  `;
}

function About() {
  this.id = 'About';
  this.template = `
    <h1>{{__title__}}</h1>
    <p>this is about page.</p>
  `;
}

function NF() {
  this.id = 'Not Found';
  this.template = `
    <h1>Sorry, Page {{__title__}}</h1>
  `
}

Home.prototype = new View();
Post.prototype = new View();
About.prototype = new View();
NF.prototype = new View();
Menu.prototype = new View();

function Router() {
  // const routePath = location.hash;  
}

Router.prototype.route = function() {
  const routePath = location.hash;
  console.log(routePath);

  const home = new Home();
  const post = new Post();
  const about = new About();
  const nf = new NF();

  let template = '';

  if (routePath === '' || routePath === '#/') {
    template = home.render({ key: 'title', value: home.getId() });
  } else if (routePath === '#/post') {
    template = post.render({ key: 'title', value: post.getId() });
  } else if (routePath === '#/about') {
    template = about.render({ key: 'title', value: about.getId() });
  } else {
    template = nf.render({ key: 'title', value: nf.getId() });
  }
  
  const menu = new Menu();

  app.innerHTML = template;
  app.innerHTML += menu.getHtml();
};

const router = new Router();

window.addEventListener('hashchange', router.route);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    const menuLink = e.target.matches('[menu-link]');
    console.log(e.target.href);
    if (menuLink) {
      router.route();
    }
  });
});

router.route();