
const expect = require("expect") ;
const {describe, it} = require("mocha") ;
const request = require("supertest") ;
const app = require("../../server") ;
const fs = require("fs") ;
const path = require("path") ;
const dataPath = path.join(__dirname, "../../routes/dummydata/ExAdventure.json") ;
const adventure = JSON.parse(fs.readFileSync(dataPath).toString())[0];

describe("/api/post/adventure", () => {
    it("Creating a adventure with valid data", (done) => {
        request(app)
            .post("/api/post/adventure")
            .send(adventure)
            .expect(200)
            .end((error, res) => {
                if(error) done(error) ;
                console.log(res.body)
                expect(res.body.id).toBeDefined() ;
                expect(res.body.error).toBeUndefined() ;
                done() ;
            }) ;
    }) ;

    it("Creating a dot", (done) => {
        request(app)
            .post("/api/post/adventure")
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

