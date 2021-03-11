// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array.flat(3));


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(item => item.join(' ')));


//#3 Turn the greeting array above into a string: 'Hello young grasshopper! you are learning fast!'
console.log(greeting.flatMap(phrase => phrase.join(' ')).join(' '));


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

console.log(trapped.flat(25));

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.length ,userEmail3.trimEnd().trimStart().length);


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

const arrayUsers = Object.entries(users);

console.log(arrayUsers);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const newIDs = arrayUsers.map(entry =>  [entry[0], entry[entry.length-1] * 2 ])

console.log(newIDs);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const newUserObj = Object.fromEntries(newIDs);

console.log(newUserObj);
