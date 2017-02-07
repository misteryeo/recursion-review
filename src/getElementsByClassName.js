// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
document.body, 
element.childNodes
element.classList
*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  var resultArr = []; 
  var searchClass = function(element) { // Declared a searchClass function
    if (element.classList) { // If element classlist is true
      if (element.classList.contains(className)) { // Check to see if classlist contains classname
        resultArr.push(element); // If true, push the element into results array
      }
    }
    for (var i = 0; i < element.childNodes.length; i++) { // Iterate through children
      searchClass(element.childNodes[i]); // Recursively search if classname exists 
    }
  };
  searchClass(document.body); // Search the document body to see if classname exists
  return resultArr;
};

