// Write a function that takes a string as input,
// and returns a copy of that string reversed.
//
// remember that:
// - you can get and set characters in a string at
//   specific indices
//
//   i.e. 'abc'[2] // 'c'
//   i.e. 'abc'[3] = 'd' // 'abcd'
// - there is an Array.reverse() method (but not a
//   String.reverse() method)
// - use something other than
//
//      "abc".split('').reverse().join('') --> "cba"

// WHY DOESN'T THIS WORK????
// function reverse(str){
//   var rts ="";
//   for (var i = 0; i < str.length; i++) {
//     rts[(str.length-i)] = str[i];
//   }
//   return rts;
// }

function reverse(str) {
  var rts = "";
  for (var i = str.length; i > 0; i--) {
    rts = rts + str[i-1];
  }
  return rts;
}

console.assert(reverse('hello') === 'olleh')
console.assert(reverse('hello, world') === 'dlrow ,olleh')
