const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/.well-known/assetlinks.json', (req, res) => {
	  res.writeHead(200, { 'Content-Type': contentType });
      res.end("Test", 'utf-8');
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
