// Write a function letterCount() that takes a
// string and returns an object with the count
// of each letter that is in the string.
//
// An example:
//
// letterCount("hello world")
//
// --> {
//      h: 1,
//      e: 1,
//      l: 3,
//      o: 2,
//      w: 1,
//      r: 1,
//      d: 1
// }
//
// Note that the space is not counted. All
// letters should also be converted to lower
// case when counting them.

function letterCount(str){
  var counts = {};
  if (typeof str === 'undefined') {
    return {};
  }
  for(var i=0; i<str.length; i++) {

    var currentLetter = str[i];
    if (currentLetter !== " ") {
      if (counts[currentLetter]) {
        counts[currentLetter] = counts[currentLetter] + 1;
      } else {
        counts[currentLetter] = 1;
      }
    }
  }
  return counts;
}

// tests

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)
