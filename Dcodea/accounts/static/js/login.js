"use strict";

const li_email = document.getElementById("li_email_input");
const li_pw = document.getElementById("li_pw_input");
const li_loginBtn = document.getElementById("li_login_btn");

function highlightBorder(event) {
  // 모든 입력 필드의 테두리 색상 초기화
  li_email.style.borderColor = "";
  li_pw.style.borderColor = "";

  // 클릭된 요소의 테두리 색상 변경
  event.target.style.borderColor = "#7D08D9";
  event.target.style.outline = "none";
}

function moveToMain() {
  location.replace("./main.html");
}

// 포커스 이벤트
li_email.addEventListener("focus", highlightBorder);
li_pw.addEventListener("focus", highlightBorder);
li_loginBtn.addEventListener("focus", highlightBorder);

// 키 입력 이벤트
li_email.addEventListener("keyup", enableButton);
li_pw.addEventListener("keyup", enableButton);

// 클릭 이벤트
li_loginBtn.addEventListener("click", moveToMain);