import View from "./View.js";

function Post() {
  this.id = 'Post';
  this.template = `
    <h1>{{__title__}}</h1>
    <p>this is post page.</p>
  `;
}

Post.prototype = new View();

export default Post;