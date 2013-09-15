var path = require('path'),
    fs = require('fs'),
    xml2js = require("xml2js"), 
    _ = require("underscore"),
    parser = new xml2js.Parser(),
    sys = require("sys"),
    exec = require("child_process").exec;

function walk(p, callback) {
  if (path.dirname(p) === p) {
    callback("Not Found", null);
  } else if (fs.existsSync(path.join(p, 'tiapp.xml'))) {
      fs.readFile(path.join(p,'tiapp.xml'), function(err, data) {
        if (err) walk(path.dirname(p), callback);
        else {
          parser.parseString(data, function (err, result) {
            if (err) walk(path.dirname(p), callback);
            else {
              callback(null, {path: p, obj: result});
            }
          });
        }
      });
  } else {
    walk(path.dirname(p),callback);
  }
}
exports.find = walk;
