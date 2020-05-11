"use strict"

const body = document.querySelector("body"),
    css = document.querySelector("h3"),
    colorControl1 = document.querySelector(".colorControl1"),
    colorControl2 = document.querySelector(".colorControl2"),
    colorRandomControl = document.querySelector(".colorRandomControl");

function setGradient() {
    body.style.background = `Linear-gradient(to right, ${colorControl1.value}, ${colorControl2.value})`;
    css.textContent = `${body.style.background}`;
}

function setRandomGradient() {
    const randomColCode1 = `#${Math.round(Math.random() * 0xFFFFFF).toString(16)}`,
        randomColCode2 = `#${Math.round(Math.random() * 0xFFFFFF).toString(16)}`;

    colorControl1.value = randomColCode1;
    colorControl2.value = randomColCode2;
    setGradient();
}

// 페이지 로드 시 배경과 색상 입력값 일치 & CSS 선형경사 특성값 표시.
setGradient();
colorControl1.addEventListener("input", setGradient);
colorControl2.addEventListener("input", setGradient);

// 색상 입력에 대해 두 개의 랜덤 색상을 생성하는 버튼 추가.
colorRandomControl.addEventListener("click", setRandomGradient)