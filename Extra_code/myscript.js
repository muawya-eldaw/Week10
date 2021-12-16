// Step 3:
//This function selects the element 'myheader2' and changes its value to 
//the value of 'myheader1'

function changeText() {
	var element1 = document.getElementById('myheader1');
	var element2 = document.getElementById('myheader2');
	element2.firstChild.nodeValue = element1.firstChild.nodeValue;
}

// Step 2:
//This function selects the element 'myparagraph' and calls the 
//function 'changeText()' to change the content of the element 'myheader'

function getThingsReady() {
	var element = document.getElementById('myparagraph');
	element.addEventListener('click', changeText);
}

// Step 1:
// this function calls getThingReady function (i.e. the code in getThingReady) 
// after the page has loaded.

document.addEventListener('DOMContentLoaded', getThingsReady);
