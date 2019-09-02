let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jesus.jpg') {
      myImage.setAttribute ('src','images/gands.jpg');
    } else {
      myImage.setAttribute ('src','images/jesus.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Have a Daiquiri at The Floridita, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Have a Daiquiri at The Floridita, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}