#!/usr/bin/env node
let fs = require('fs');
let path = require('path');
let helpObject = require('./commands/help')
let treeObject = require('./commands/tree')
let organizeObject = require('./commands/organize')

let ipArr = process.argv.slice(2)

let command = ipArr[0];
switch(command){
    case "tree":
        treeObject.treeKey(ipArr[1])
        break;
    case "organize":
        organizeObject.organizeKey(ipArr[1]);
        break;
    case "help":
        helpObject.helpKey()
        break;
    default: 
    console.log("Please input right command");
}


