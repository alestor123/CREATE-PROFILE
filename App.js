'use strict';
const { readFileSync } = require('fs')
const { resolve } = require('path')
const { render } = require('ejs')
const socs = require('./socials.json')
const arrs = ['skills', 'works']
const mand = ['name', 'description', 'title', 'ghUname']
module.exports = conf => {
  if (!(conf && typeof conf === 'object' && checkConf(conf))) throw new Error('Please enter a valid config')
  return render(readFileSync(resolve(__dirname,'ejs/md.ejs')).toString(), { conf, socs, social: filterKeys(conf, Object.keys(socs)) })
}

function checkConf (conf) {
  const keys = Object.keys(conf)
  return keys.length >= 2 && mand.every(i => keys.includes(i) && typeof conf[i] === 'string' && conf[i].length > 0) && commonElement(keys, arrs).every(i => typeof conf[i] === 'object' && conf[i].every(l => typeof l === 'string' || typeof l === 'object'))
}
function commonElement (arr1, arr2) {
  return arr1.filter(n => arr2.indexOf(n) !== -1)
}
function filterKeys (main, keys) {
  return Object.keys(main).filter(key => keys.includes(key)).reduce((obj, key) => {
    obj[key] = main[key]
    return obj
  }, {})
}
