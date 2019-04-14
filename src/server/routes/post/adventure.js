
//Returns promise that delivers ID of dot created
//unless error occurs (rejected with e)
function postAdventure(adventure) {
    return new Promise((resolve, reject)=> {
        const attrs = ["creator", "description", "categories", "name", "pictureIds", "location", "dotsVisited"] ;
        const isValid = hasAttributesDefined(adventure, attrs) ;
        console.log(adventure) ;
        if(isValid[0])
            createAdventure(adventure).then(id => resolve(id)).catch(e => reject(e)) ;
        else
            reject(isValid[1])
    }) ;
}

function hasAttributesDefined(obj, attrs){
    if(obj === undefined)
        return [false, 'Object is undefined'] ;

    for(let i=0; i<attrs.length; i++){
        let attr = attrs[i] ;
        if (obj[attr] === undefined)
            return [false, "Expected " + attr + " to be defined."]
    }
    return [true, null] ;
}

//Creates dot in database and returns id
function createAdventure(adventure){
    return new Promise((resolve) => {
        resolve(1) ;
    }) ;
}

module.exports = postAdventure ;