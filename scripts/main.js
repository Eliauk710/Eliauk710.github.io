let myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('飞宇最帅！！！');
};

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/feiyu1.jpg') {
        myImage.setAttribute('src', 'images/feiyu2.jpg');
    } else {
        myImage.setAttribute('src', 'images/feiyu1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '陈飞宇的老婆：' + myName + '你好！';
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '陈飞宇的老婆：' + storedName + '你好！';
}
myButton.onclick = function() {
    setUserName();
}