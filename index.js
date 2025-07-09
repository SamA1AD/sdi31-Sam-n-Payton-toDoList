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
    newLineItem.innerHTML = input
    let checkBox = document.createElement('input');
        checkBox.type = 'checkbox'
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', () => {return doneList.contains(newLineItem) ? doneList.removeChild(newLineItem) : toDoList.removeChild(newLineItem)});
    checkBox.addEventListener('click', () => {
        // toDoList.removeChild(newLineItem);
        doneList.appendChild(newLineItem);
    });
    newLineItem.appendChild(checkBox);
    // newLineItem.appendChild(input);
    newLineItem.appendChild(deleteButton);
    toDoList.appendChild(newLineItem);
}


//button added to event
addToListButton.addEventListener('click', () => test(userInput['value']))

//line 25 causes it to break

//line 19 - 23 break
//line 20 -23 break and 25

//added line 14 amended 19 and 32
// delete does not work if box is checked

//line 19 return doneList.removeChild(newLineItem