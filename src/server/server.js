
const express = require("express") ;
const bodyParser = require("body-parser") ;
const app = express() ; 
const PORT = 5000 ;

//Middleware
app.use(bodyParser.json()) ;

//@import routes
const getDots = require("./routes/get/dots") ;
const getAdventures = require("./routes/get/adventures") ;
const postDot = require("./routes/post/dot") ;
const postAdventure = require("./routes/post/adventure") ;

//leaving this here bc it might be useful to have a route you can depend on
app.get("/api/test", (req, res) => {
	res.send("Live 309 - 3:08") ; 
}) ;

app.get("/api/get/dots", (req, res) => {
	getDots().then(dots => res.send(dots)).catch(e => res.send({e})) ;
}) ;

app.get("/api/get/adventures", (req, res) => {
	getAdventures().then(adventures => res.send(adventures)).catch(e => res.send({e})) ;
}) ;

app.post('/api/post/dot', (req, res) => {
	postDot(req.body)
		.then(id => res.send({id}))
		.catch(error => res.send({error})) ;
}) ;

app.post('/api/post/adventure', (req, res) => {
	postAdventure(req.body)
		.then(id => res.send({id}))
		.catch(error => res.send({error})) ;
}) ;

app.listen(PORT) ; 

module.exports = app ; 
