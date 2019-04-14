
const expect = require("expect") ;
const request = require("supertest") ;
const {describe, it} = require("mocha") ;
const app = require("../../server") ;

describe("api/get/dots", () => {
    it("200 status code", (done) => {
        request(app)
            .get("/api/get/dots")
            .expect(200, done) ;
    }) ;

    it("Array Returned", (done) => {
        request(app)
            .get("/api/get/dots")
            .end((error, res) => {
                expect(res.body.length).toBeDefined() ;
                done();
            }) ;
    }) ;

    it("Contains at least one dot", (done) => {
        request(app)
            .get("/api/get/dots")
            .end((error, res) => {
                const dot = res.body[0] ;
                expect(dot).toBeDefined() ;
                done();
            }) ;
    }) ;
}) ;
