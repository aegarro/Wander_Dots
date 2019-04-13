
const express = require("express") ; 
const app = express() ; 
const PORT = 5000 ;

//@import routes
const getDots = require("./routes/get/dots") ;
const getAdventures = require("./routes/get/adventures") ;
const postDot = require("./routes/post/dot") ;

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
	postDot(req.body).then(id => res.send({id})).catch(e => res.send({error: e}))
}) ;

app.listen(PORT) ; 

module.exports = app ; 
