
const express = require("express") ; 
const app = express() ; 
const PORT = 5000 ; 

app.get("/api/test", (req, res) => {
	res.send("Live 309 - 3:08") ; 
}) ; 

app.listen(PORT) ; 

module.exports = app ; 
