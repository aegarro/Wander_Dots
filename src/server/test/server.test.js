
const request = require("supertest") ; 
const app = require("../server") ; 

describe("Smoke Test on Test Route", () => {
	it("Getting 200 status code", (done) => {
		request(app).get("/api/test").expect(200, done) ; 
	}) ; 
}) ; 
