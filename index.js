// Imports
var json2xls = require('json2xls');
var fs = require('fs');
var data = require('./data.js')

// Trim whitespace, line breaks etc
data = data.trim(data);
data = data.replace(/(\r\n|\n|\r)/gm, "");
data = data.replace(/\s/g, "");
data = (JSON.parse(data));

// Convert to xls
var xls = json2xls(data,{});

// Create the xls output file
fs.writeFileSync('output.xlsx', xls, 'binary');