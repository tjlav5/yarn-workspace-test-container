"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var functions = __importStar(require("firebase-functions"));
var foobarGroup = __importStar(require("./foobar"));
function doStuff() {
    // return foobar();
}
exports.doStuff = doStuff;
exports.yay = functions.https.onRequest(function (request, response) {
    response.json({ foo: "bar" });
});
exports.foobar = foobarGroup;
//# sourceMappingURL=index.js.map