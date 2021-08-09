const ghP = require('./App')
const { writeFileSync } = require('fs')
writeFileSync('README.md', ghP({ name: 'Alestor Aldous', blog: true, steaks: true, stats: true, twitterBadge: true, webpage: 'alestor123.github.io', counter: true, twitter: 'alestor123', social: { twitter: 'alestor123', youtube: 'lol', 'dev.to': 'alestor123', medium: 'aldrinjenson' }, support: 'alestor123', banner: 'https://raw.githubusercontent.com/alestor123/alestor123/master/assets/icon.svg', skills: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'], ghUname: 'alestor123', description: 'dwd', title: 'awesome dev', works: ['yeah this some what', 'i dont know'] }))
// name:string - , -
// subtitle: - , -
// thumbnail:string url - , -
// work:array of string - , -
// Skills:array of string - , -
// social:array of string - , -
// addons :array of string ,-,
// Support: string - , -
