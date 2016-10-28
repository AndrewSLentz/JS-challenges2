// write a method names()
// which takes a string of
// comma-separated names
// (first and last) and then
// returns an object where each
// firstname is a key, and each
// lastname is a value
//
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

//declaring function
function names(str) {
  //splitting string into array of individual names
    var people = str.split(',');
    //creating empty object to put names in
    var name = {};
    //starting loop of what to do to each individual name in array
    people.forEach(function(person) {
      //removing extraneous spaces and splitting first name from last name
      var formattedPerson = person.trim().split(' ');
      //creating variable to hold first name
      var firstName = formattedPerson[0];
      //creating variable to hold last name
      var lastName = formattedPerson[1];
      //setting property on name. key is firstName, value is lastname
      name[firstName] = lastName;
    })
  //sending now non-empty object
    return name;
}


var results = names("George Washington, John Adams, Kanye West")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")
