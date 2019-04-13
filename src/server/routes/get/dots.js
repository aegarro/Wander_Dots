//TODO: Create Model and create method.

const fs = require("fs") ;
const path = require("path") ;
const dataPath = path.join(__dirname, "../dummydata/ExDot.json") ;

//Returns promise that resolves all dots from database
function getDots(){
    return new Promise((resolve, reject) => {
        getDotsFromDatabase().then(dots => {
            resolve(dots) ;
        }).catch(e => reject(e)) ;
    }) ;
}

function getDotsFromDatabase(){
    return new Promise((resolve) => {
        const dotsData = fs.readFileSync(dataPath).toString() ;
        let dots = JSON.parse(dotsData);
        resolve(dots);
    }) ;
}

module.exports = getDots ;
