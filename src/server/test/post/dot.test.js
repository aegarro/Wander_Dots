
const expect = require("expect") ;
const request = require("supertest") ;
const app = require("../../server") ;
const fs = require("fs") ;
const path = require("path") ;
const dataPath = path.join(__dirname, "../../routes/dummydata/ExDot.json") ;
const dot = JSON.parse(fs.readFileSync(dataPath).toString());

describe("/api/post/dot", () => {

    it("Creating a dot", (done) => {
        request(app)
            .post("/api/post/dot")
            .send({dot: {}})
            .expect(200)
            .then(res => {
                done();
            }).catch(e => new Error(e)) ;
    }) ;
}) ;
