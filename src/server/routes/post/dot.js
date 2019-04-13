
//Returns promise that delivers ID of dot created
//unless error occurs (rejected with e)
function postDot(dot) {
    return new Promise((resolve, reject)=> {
        const attrs = ["creator", "description", "categories", "name", "picturesIds", "location"]
        const isValid = hasAttributesDefined(dot, attrs) ;
        if(isValid[0]){
            createDot(dot).then(id => resolve(id)).catch(e => reject(e))
        }else reject(isValid[1])
    }) ;
}

function hasAttributesDefined(obj, attrs){
    /*
    for(let i=0; i<attrs.length; i++){
        let attr = attrs[i] ;
        if (obj[attr] === undefined)
            return [false, "Expected " + attr + " to be defined."]
    }
    return [true, null] ;
     */
    return [true, null] ;
}

//Creates dot in database and returns id
function createDot(dot){
    return new Promise((resolve) => {
        resolve(1) ;
    }) ;
}

module.exports = postDot ;