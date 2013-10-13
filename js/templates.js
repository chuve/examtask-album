define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["templates/lectures-item.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <iframe class=\"lecture-item__video\" src=\"";
  if (stack1 = helpers.video) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.video; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" frameborder=\"0\"></iframe>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <iframe class=\"lecture-item__slides\" src=\"";
  if (stack1 = helpers.slides) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.slides; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" frameborder=\"0\"></iframe>\n        ";
  return buffer;
  }

  buffer += "<div class=\"lecture-item\">\n    <h2 class=\"lecture-item__title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n        <ul class=\"lecture-item__prop\">\n            <li>Дата: ";
  if (stack1 = helpers.dateString) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dateString; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Лектор: ";
  if (stack1 = helpers.lecturer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lecturer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n        <div class=\"lecture-item__about\">";
  if (stack1 = helpers.about) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        ";
  stack1 = helpers['if'].call(depth0, depth0.video, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, depth0.slides, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"clear\"></div>\n";
  return buffer;
  });

this["JST"]["templates/lectures-list.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"lectures-list__item\">\n            <div class=\"lectures-list-item__desc\">\n                <a class=\"lectures-list-item__title\" href=\"#!/lectures/"
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = depth0.title),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                <span class=\"lectures-list-item__author\"><i class=\"icon-user\"></i>"
    + escapeExpression(((stack1 = depth0.lecturer),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                ";
  stack2 = helpers['if'].call(depth0, depth0.video_link, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                ";
  stack2 = helpers['if'].call(depth0, depth0.pdf_link, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                <span class=\"lectures-list-item__date\">"
    + escapeExpression(((stack1 = depth0.date),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            </div>\n            <div class=\"lectures-list-item__about\">"
    + escapeExpression(((stack1 = depth0.about),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        </div>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <a class=\"lectures-list-item__video-link\" href=\"";
  if (stack1 = helpers.video_link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.video_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"Скачать видео\"><i class=\"icon-video\"></i></a>\n                ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <a class=\"lectures-list-item__pdf-link\" href=\"";
  if (stack1 = helpers.pdf_link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pdf_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"Скачать презинтацию\"><i class=\"icon-doc-text\"></i></a>\n                ";
  return buffer;
  }

  buffer += "<div class=\"lectures-list\">\n        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n<div class=\"clear\"></div>";
  return buffer;
  });

this["JST"]["templates/sidebar-menu.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <a href=\"#!/"
    + escapeExpression(((stack1 = depth0.url),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"menu-item menu-item_color-"
    + escapeExpression(((stack1 = depth0.color),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        ";
  stack2 = helpers['if'].call(depth0, depth0.count, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        <span class=\"menu-item__name\">"
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n    </a>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <span class=\"menu-item__value\">"
    + escapeExpression(((stack1 = depth0.count),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["templates/single-page.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2 class=\"single-page__title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n<div class=\"single-page__content\">";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n";
  return buffer;
  });

this["JST"]["templates/students-item.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <a href=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" target=\"blank\"><i class=\"icon-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i></a>\n            ";
  return buffer;
  }

  buffer += "<div class=\"student-profile\">\n    <div class=\"student-profile__main\">\n        <img class=\"student-profile__photo\" src=\"";
  if (stack1 = helpers.userpic) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userpic; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <ul class=\"student-profile__desc\">\n            <li class=\"student-profile__name\">";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li class=\"student-profile__city\">";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li class=\"student-profile__social\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.links, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </li>\n        </ul>\n    </div>\n    <div class=\"student-profile__about\">\n    ";
  if (stack1 = helpers.about) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n<div class=\"clear\"></div>";
  return buffer;
  });

this["JST"]["templates/students-list.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a href=\"#!/student/"
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><div class=\"students-list__item\">\n        <img class=\"students-list__item-photo\" src=\""
    + escapeExpression(((stack1 = depth0.userpic),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = depth0.firstName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = depth0.lastName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <span class=\"students-list__item-name\">"
    + escapeExpression(((stack1 = depth0.firstName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = depth0.lastName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n    </div></a>\n    ";
  return buffer;
  }

  buffer += "<div class=\"students-list\">\n    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"clear\"></div>";
  return buffer;
  });

return this["JST"];

});