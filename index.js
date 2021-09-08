const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/.well-known/assetlinks.json', express.static(__dirname + '.well-known/assetlinks.json'))
  .use(express.static(path.join(__dirname, '.well-known')))
  .set('.well-known/assetlinks.json', path.join(__dirname + '.well-known/assetlinks.json'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
