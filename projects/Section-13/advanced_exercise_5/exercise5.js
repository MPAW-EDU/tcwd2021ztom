// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newPerson = [];
array.forEach(person => {
  person.username = `${person.username}!`
  newPerson.push(person);
})
//console.log(newPerson);

//Create an array using map that has all the usernames with a "? to each of the usernames
const newQuestion = array.map(person => {
  person.username = `${person.username}?`
  return person;
})
//console.log(newQuestion);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(member => {
  return member.team == 'red'
});
console.log(filterArray);

//Find out the total score of all users using reduce
const totalScore = array.reduce((accum, user) => {
  return accum + user.score;
},0)
console.log(totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const exclaimItems = array.map(user => {
  user.items = user.items.map(item => {
    return `${item}!`
  })
  return user;
})
console.log(exclaimItems);