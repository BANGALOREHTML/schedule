// Set Item
localStorage.setItem('container', JSON.stringify(schedule));
// Retrieve Item
document.getElementsByClassName('container').innerHTML = localStorage.getItem('schedule');