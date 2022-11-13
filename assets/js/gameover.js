
let link = location.search.split("&");
let score = link[1].split("=")[1]
let username = link[2].split("=")[1]

let scorehtml = document.getElementById('score');
let usernamehtml = document.getElementById('username');

scorehtml.innerText = `${score}`;
usernamehtml.innerText = `${username}`;


