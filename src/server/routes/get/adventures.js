//TODO: Create Model and create method.

const fs = require("fs") ;
const path = require("path") ;
const dataPath = path.join(__dirname, "../dummydata/ExAdventure.json") ;

//Returns promise that resolves all dots from database
function getAdventures(){
    return new Promise((resolve, reject) => {
        getAdventuresFromDatabase().then(dots => {
            resolve(dots) ;
        }).catch(e => reject(e)) ;
    }) ;
}

function getAdventuresFromDatabase(){
    return new Promise((resolve) => {
        const data = fs.readFileSync(dataPath).toString() ;
        let adventures = JSON.parse(data);
        resolve(adventures);
    }) ;
}

module.exports = getAdventures ;
