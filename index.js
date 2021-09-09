const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const assetlink = 'Test'
const appleApplink = 'Apple Test'

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/.well-known/assetlinks.json', (req, res) => {
	  res.send(assetlink);
  })
  .get('/.well-known/apple-app-site-association', (req, res) => {
	  res.send(appleApplink);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
