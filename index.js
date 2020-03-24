//updateObjectWithKeyAndValue must do 
//return object with original key and value pair and the new key and value pair
//return object with an updated key value pair 

function updateObjectWithKeyAndValue(object,key,value){
var newObj = Object.assign({}, object)
return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
}


function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object)
  return delete newObj.key
}


function destructivelyDeleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object)
  return newObj.key
  
}
