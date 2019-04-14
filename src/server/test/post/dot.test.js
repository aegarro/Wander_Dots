
const expect = require("expect") ;
const request = require("supertest") ;
const {describe, it} = require("mocha") ;
const app = require("../../server") ;
const fs = require("fs") ;
const path = require("path") ;
const dataPath = path.join(__dirname, "../../routes/dummydata/ExDot.json") ;
const dot = JSON.parse(fs.readFileSync(dataPath).toString())[0];

describe("/api/post/dot", () => {

    it("Creating a dot with valid data", (done) => {
        request(app)
            .post("/api/post/dot")
            .send(dot)
            .expect(200)
            .end((error, res) => {
                console.log(res.body)
                if(error) done(error) ;
                expect(res.body.id).toBeDefined() ;
                expect(res.body.error).toBeUndefined() ;
                done() ;
            }) ;
    }) ;

    it("Creating a dot", (done) => {
        request(app)
            .post("/api/post/dot")
            .send({})
            .expect(200)
            .end((error, res) => {
                if(error) done(error) ;
                expect(res.body.error).toBeDefined() ;
                expect(res.body.id).toBeUndefined() ;
                done() ;
            }) ;
    }) ;
}) ;
