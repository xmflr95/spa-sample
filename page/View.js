export default function View() {

}

View.prototype.getId = function() {
  return this.id;
};

View.prototype.getHtml = function() {
  return this.template;
};

View.prototype.setTemplateData = function(key, value) {
  this.template = this.template.replace(`{{__${key}__}}`, value);
};

View.prototype.render = function(data) {
  const { key, value } = data;
  this.setTemplateData(key, value);
  return this.getHtml();
};