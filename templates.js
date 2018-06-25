(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['segment_block'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "      <div class=\"segment-unit "
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].direction : depths[1]), depth0))
    + "\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"segment-container "
    + alias4(((helper = (helper = helpers.direction || (depth0 != null ? depth0.direction : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"direction","hash":{},"data":data}) : helper)))
    + "\" style=\"top: "
    + alias4(((helper = (helper = helpers.top || (depth0 != null ? depth0.top : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"top","hash":{},"data":data}) : helper)))
    + "px; left: "
    + alias4(((helper = (helper = helpers.left || (depth0 != null ? depth0.left : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"left","hash":{},"data":data}) : helper)))
    + "px\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.block : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true});
})();
