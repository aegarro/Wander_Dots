
const expect = require("expect") ;
const request = require("supertest") ;
const app = require("../../server") ;

describe("/api/get/adventures", () => {
    it("200 status code", (done) => {
        request(app)
            .get("/api/get/adventures")
            .expect(200, done) ;
    }) ;

    it("Array Returned", (done) => {
        request(app)
            .get("/api/get/adventures")
            .then(res => {
                expect(res.body.length).toBeDefined() ;
                done();
            }) ;
    }) ;

    it("Contains at least one adventure", (done) => {
        request(app)
            .get("/api/get/adventures")
            .then(res => {
                const dot = res.body[0] ;
                expect(dot).toBeDefined() ;
                done();
            }) ;
    }) ;
}) ;
