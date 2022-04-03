function changBgColor1() {
    document.getElementById('lft').style.backgroundColor = "#343e88";
}

function changBgColor2() {
    document.getElementById('lft').style.backgroundColor = "#8400ff";
}

function changBgColor3() {
    document.getElementById('lft').style.backgroundColor = "#532134";
}

function changBgColor4() {
    document.getElementById('lft').style.backgroundColor = "#947997";
}

function changBgColor5() {
    document.getElementById('lft').style.backgroundColor = "#847448";
}

function changBgColor6() {
    document.getElementById('lft').style.backgroundColor = "#099867";
}

function changBgColor7() {
    document.getElementById('lft').style.backgroundColor = "#000000";
}

function changBgColor8() {
    document.getElementById('lft').style.backgroundColor = "#ffffff";
}

let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hexCode')
colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    document.getElementById('lft').style.backgroundColor = color;
});