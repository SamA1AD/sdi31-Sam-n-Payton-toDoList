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
    let newRowItem = document.createElement('tr');
    let numberRow = document.createElement('td');
    let checkBox = document.createElement('input');
    let checkBoxRow = document.createElement('td');
    let inputRow = document.createElement('td');
    let buttonRow = document.createElement('td');
    inputRow.innerText = input;
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "X";
    checkBox.type = 'checkbox';
    checkBox.name = input;
    deleteButton.addEventListener('click', () => {
        return doneList.contains(newRowItem) ? doneList.removeChild(newRowItem) : toDoList.removeChild(newRowItem)
    });
    checkBox.addEventListener('click', () => {
        return toDoList.contains(newRowItem) ? doneList.appendChild(newRowItem) : toDoList.appendChild(newRowItem)
    });
    // newRowItem.appendChild(input);
    checkBoxRow.appendChild = checkBox;
    buttonRow.appendChild(deleteButton);
    newRowItem.appendChild(numberRow);
    newRowItem.appendChild(checkBoxRow);
    newRowItem.appendChild(inputRow);
    newRowItem.appendChild(buttonRow);
    toDoList.appendChild(newRowItem);
    var index = [...toDoList.children].indexOf(newRowItem);
    numberRow.innerText = index;
}


//button added to event
addToListButton.addEventListener('click', () => test(userInput['value']))

//line 25 causes it to break

//line 19 - 23 break
//line 20 -23 break and 25

//added line 14 amended 19 and 32
// delete does not work if box is checked

//line 19 return doneList.removeChild(newLineItem