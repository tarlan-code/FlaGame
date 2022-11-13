let lang = document.querySelector('#lang');
let btn = document.querySelector('#button');
let btna = document.querySelector('#btna');




fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then(data => {
    let languages = data[0].translations;

    Object.entries(languages).forEach(([key], index) => {
        lang.innerHTML += `<option value="${index}">${key.toUpperCase()}</option>`
    });

});







function getinfo() {
    let username = document.querySelector('.name');
    let langSelected = lang.options[lang.selectedIndex].text;
    
    btna.href = "index.html?&name=" + username.value + "&lang=" + langSelected;

}

btn.onclick = getinfo;


