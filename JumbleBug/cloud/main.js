
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("test1", function(request, response) {
  response.success("test1-response");
});

Parse.Cloud.define("findBug", function(request, response) {
  var query = new Parse.Query("Bug");
  query.equalTo("bugid", request.params.bugId);
  query.find({
    success: function(result) {
      response.success(result[0]);
    },
    error: function() {
      response.error("bug lookup failed");
    }
  });
});
