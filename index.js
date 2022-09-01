import Home from './page/Home.js';
import Post from './page/Post.js';
import About from './page/About.js';
import NF from './page/404.js';
import Menu from './components/Menu.js';

const app = document.getElementById('root');

function Router() {
  // const routePath = location.hash;
}

Router.prototype.route = function() {
  const routePath = location.hash;

  // Page
  const home = new Home();
  const post = new Post();
  const about = new About();
  const nf = new NF();

  const menu = new Menu();  // Menu

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
  
  app.innerHTML = template;
  app.innerHTML += menu.getHtml();
};

const router = new Router();

window.addEventListener('hashchange', router.route);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    const menuLink = e.target.matches('[menu-link]');
    // console.log(e.target.href);
    if (menuLink) {
      router.route();
    }
  });
});

router.route();