
const express = require("express") ; 
const app = express() ; 
const PORT = 5000 ; 

app.get("/api/test", (req, res) => {
	res.send("Hello World") ; 
}) ; 

app.listen(PORT) ; 

module.exports = app ; 
