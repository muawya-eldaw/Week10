// Step 3:
//This function selects the element 'myheader' and changes its value to 
//'New Value' 

function changeText() {
	var element = document.getElementById('myheader');
	element.firstChild.nodeValue = "New Value";
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
