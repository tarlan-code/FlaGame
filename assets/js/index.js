const img = document.getElementById('img');
const input = document.getElementById('input-area');
const point = document.getElementById('point');
const okbtn = document.getElementById('okbtn');
const nickname = document.getElementById('nickname');
const animation = document.getElementById('animation')


let link = decodeURI(location.search);
link = link.split('&');

let usernickname = link[1].split("=")[1];
let lang = link[2].split("=")[1].toLowerCase();

nickname.innerHTML = `Nickname: <span>${usernickname}</span>`;

let score = 0;
function get() {
    window.open("gameover.html?&score="+ score +"&name=" + usernickname, "_self")
}


let timeleft = 6;
var Timer = setInterval(function () {
    timeleft--;
    document.getElementById("time").textContent = timeleft;
    if (timeleft <= 0){
        document.getElementById("time").textContent = "Time's up!";
        document.querySelector(".form").innerHTML = `<span> Game Over</span>`;
        get();

    }
}, 1000);



let data = fetch('https://restcountries.com/v3.1/all').then(res => res.json());



data.then(data => {




    let len = data.length;
    let randIndexArray = [];
    randIndex = Math.floor(Math.random() * len);
    var name = '';
    if (lang == "eng") {
        name = data[randIndex].name.common;
    }
    else {
        name = data[randIndex].translations[lang].common;
    }
    let flag = data[randIndex].flags['png'];
    img.innerHTML = `<img class="rounded-5" src="${flag}" alt="flag">`;
    point.innerHTML = `Point: ${score}`;



  

    function play() {
        let inputvalue = input.value.trim();
        if (inputvalue.toLowerCase() === name.toLowerCase()) {
            animation.innerHTML = `<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_Jb8zgGUjL4.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;" autoplay></lottie-player>`;
            input.value = '';
            randIndexArray.push(randIndex)
            score++;
        } else {
            animation.innerHTML = `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_f5jb9b78.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;" autoplay></lottie-player>`;
            input.value = '';
        }

        point.innerHTML = `Score: ${score}`;


        do {
            if (randIndexArray.length == len) {
                alert("You fond all flags");
                window.open(`gameover.html?${len}`, "_self");
            }
            randIndex = Math.floor(Math.random() * len);
        } while (randIndexArray.includes(randIndex)) {
        };
        if (lang == "eng") {
            name = data[randIndex].name.common;
        }
        else {
            name = data[randIndex].translations[lang].common;
        }
        flag = data[randIndex].flags['png'];

        img.innerHTML = `<img class="rounded-5 " src="${flag}" alt="flag">`;

    };
    // Ok button click 
    okbtn.onclick = play;
    input.addEventListener("keyup", function (e) {
        if (e.key == 'Enter' || e.keyCode == 13) {
            play();
        }
    });
    // Ok button click 




});

