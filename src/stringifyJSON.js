// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
  // test for string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {   // test for number
    return obj + '';
  } else if (Array.isArray(obj)) { // test for arrays 
    return '[' + obj.map(function(item) {
      return stringifyJSON(item);
    }) + ']';
  } else if (typeof obj === 'object') { // test for objects
    var result = [];
    if (Object.keys(obj).length === 0) {
      return '{}';      
    } else {
      for (var key in obj) { 
        var stringKey = '"' + key + '":';
        if (typeof obj[key] === 'string') {
          return '{' + stringKey + stringifyJSON(obj[key]) + '}';
        } else if (typeof obj[key] === 'boolean' || obj[key] === null ) {
          result.push(stringKey + obj[key]);
        } else if (typeof obj[key] === 'object') {
          result.push(stringKey + stringifyJSON(obj[key]));
        }
      }
    }
    return '{' + result + '}';
  }
};






