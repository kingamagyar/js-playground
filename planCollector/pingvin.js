'use strict';

let userArg = '-u';
let itemArg = '-i';
let listArg = '-l';
let user;
let listItem;
let list;
const fileOfFun = require('fs');
let filePath = "/tmp/pingvin";
let fileEncoding = 'utf8';

if (process.argv.indexOf(userArg) != -1 && process.argv.indexOf(itemArg) != -1) {
  user = process.argv[process.argv.indexOf(userArg) + 1];
  listItem = process.argv[process.argv.indexOf(itemArg) +1];
  list = user + ' - ' + listItem;

  fileOfFun.appendFile(filePath, '\n' + list, function(err) {
      if(err) {
        console.log(err);
      }
      console.log("Your fun idea was added! Yiiihaaaa!!");
  });
} else if (process.argv.indexOf(listArg) != -1) {
  fileOfFun.readFile(filePath, fileEncoding, function(err, contents) {
    console.log(contents);
  })
} else {
  console.log("Please add both your name after the -u flag and a fun idea after the -i flag too!")
}
