// Important note: function only run if the have been called

//Step 3
// below is a function definition which is ignored by the js interpreter.
// a function is executed only when it has been called.
function myClickEvent() {
	var element = document.getElementById('circle');
	element.style.backgroundColor = 'blue';
}

//Step 2
function myLoadFunction() {
	var element = document.getElementById('circle');
	element.addEventListener('click', myClickEvent); // here is a call for the function myClickEvent()
}

//Step 1
document.addEventListener('DOMContentLoaded', myLoadFunction); // here is a call for the function myLoadFunction()

