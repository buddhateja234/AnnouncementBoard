// import React from 'react';
// import ReactDOM from 'react-dom/client';

function handleAll(){
    console.log('Buddhadu');
}


function handleUser() {
    console.log('User data');
}

function alert_func(){
    alert('Hehahaa');
}

function handlePosts() {
    console.log('posts buddha')
    var main = document.createElement("h1");
    main.style.fontWeight='900';
    main.innerText="Fee Payement details"
    var matter = document.createElement("p")
    matter.innerText = "Please Pay the Fee if not Paid and ignore if paid already"
    var contain = document.createElement("div")
    contain.style.margin='25px'
    contain.style.padding = '15px'
    contain.style.marginTop = '10px'
    contain.style.cursor='pointer'
    contain.style.width = '60em'
    contain.style.height = '15vh'
    contain.style.boxShadow = "3px 3px 3px 2px rgba(0,0,0,.8)"
    contain.setAttribute("onclick","alert_func();");
    contain.appendChild(main)
    contain.appendChild(matter)
    console.log(contain)
    document.getElementById('main_posts').innerHTML = contain.outerHTML
    for(let i=0;i<10;i++){
        document.getElementById('main_posts').innerHTML += contain.outerHTML
    }
}
