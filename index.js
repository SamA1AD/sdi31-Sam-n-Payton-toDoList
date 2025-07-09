// variable for input text
var userInput = document.querySelector('.userInput');
// user input button
var addToListButton = document.querySelector('#addToList');
// declaring variable ul for input
var toDoList = document.querySelector('.to-do');
//declaring variable ul for output
var doneList = document.querySelector('.done');


//function for button
let test = (input) => {
    let newLineItem = document.createElement('li');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox'
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', toDoList.removeChild(newLineItem));
    checkBox.addEventListener('click', () => {
        toDoList.removeChild(newLineItem);
        doneList.appendChild(newLineItem);
    });
    newLineItem.appendChild(checkBox);
    newLineItem.appendChild(input);
    newLineItem.appendChild(deleteButton);
    toDoList.appendChild(newLineItem);
}


//button added to event
addToListButton.addEventListener('click', () => {test(userInput.value)})
