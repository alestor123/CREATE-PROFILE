#!/usr/bin/env node
'use strict'
const ghP = require('./App')
const { writeFileSync } = require('fs')
const chalk = require('chalk')
const figlet = require('figlet')
const prompt = require('prompt-sync')()
const questions = require('./qs.json').question
let ar = []

// try {
  console.log(chalk.redBright(figlet.textSync('CREATE-PROFILE')))
  const prom = objectFilter(promptAns(), arrr => typeof arrr === 'boolean' ? arrr : arrr.length > 0)
  if (!yesNo(prompt(chalk.greenBright.bold('Are you sure (Y/n):')))) {
    console.log(chalk.redBright.bold('Aborted !!'))
    process.exit(0)
  }
  writeFileSync('README.md', ghP(prom))
  console.log(chalk.bold.greenBright('Done!!'))
  console.log(chalk.bold.greenBright('❤️ Thanks For Using create-profile ❤️'))
// } catch (e) {
  // console.log(chalk.red.bold('Oops we got a problem'))
// }

function promptAns () {
  const answers = {}
  questions.forEach(qes => {
    ar = []
    const mp = multiPrompt(qes)
    if (qes.msg) console.log(chalk.yellowBright.bold(qes.msg))
    answers[qes.field] = qes.type === 'boolean' ? mp : (mp || ar)
  })
  return answers
}
function multiPrompt (qes) {
  const res = prompt(chalk.greenBright.bold(qes.question))
  const lol = qes.type === 'boolean' ? yesNo(res) : res
  // in the case of work or skills it asks you multiple times if you left one blank then it will exit the loop
  if ((qes.field === 'works' || qes.field === 'skills') && lol.length > 0) {
    ar.push(lol)
    multiPrompt(qes)
  } else {
    return ar.length > 0 ? ar : lol
  }
}
// https://stackoverflow.com/questions/5072136/javascript-filter-for-objects
function objectFilter (obj, predicate) {
  return Object.keys(obj).filter(key => predicate(obj[key])).reduce(function (res, key) {
    res[key] = obj[key]
    return res
  }, {})
}
function yesNo (res) {
  return res.replace(' ', '').charAt(0).toLocaleLowerCase() === 'y'
}
