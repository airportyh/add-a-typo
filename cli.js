#! /usr/bin/env node

var fs = require('fs')
var filename = process.argv[2]
var transforms = [mutation, deletion, insertion]
var text = fs.readFileSync(filename) + ''
var idx = Math.floor(Math.random() * transforms.length)
var transform = transforms[idx]
text = transform(text)
fs.writeFileSync(filename, text)
console.log('Added typo to', filename)

function insertion(text){
  var idx = Math.floor(Math.random() * text.length)
  return text.substring(0, idx) + randomChar() + text.substring(idx)
}

function deletion(text){
  var idx = Math.floor(Math.random() * text.length)
  return text.substring(0, idx - 1) + text.substring(idx)
}

function mutation(text){
  var idx = Math.floor(Math.random() * text.length)
  return text.substring(0, idx - 1) + randomChar() + text.substring(idx)
}

function randomChar(){
  var range = 122 - 48 + 1
  var n = 48 + Math.floor(Math.random() * range)
  return String.fromCharCode(n)
}