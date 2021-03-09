
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

const inputLength = () => {
	return input.value.length;
};

const createListElement = () => {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

const addListAfterClick = () => {
	if (inputLength() > 0){
		createListElement();
		console.log(li);
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode == 13){
		createListElement();
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





//--------

// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);