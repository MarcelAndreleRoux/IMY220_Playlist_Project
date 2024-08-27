"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var PORT = 1337;
app.use(_express["default"]["static"]("public"));
app.listen(PORT, function () {
  console.log("Listening on http://localhost:".concat(PORT));
});