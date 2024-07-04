// userInfo -> position
function checkFullInput() {
  const name = document.querySelector("#username");
  const id = document.querySelector("#userId");
  const pw = document.querySelector("#password1");
  const pwCheck = document.querySelector("#password2");
  console.dir(name);
  if (!name.value) {
    alert("이름을 입력해주시기 바랍니다.");
  } else if (!id.value) {
    alert("아이디를 입력해주시기 바랍니다.");
  } else if (!pw.value || pw.value != pwCheck.value) {
    alert("비밀번호가 일치하지 않습니다.");
    pw.value = "";
    pwCheck.value = "";
  } else {
    const nowDiv = document.querySelector(".active");
    const nextDiv = document.querySelectorAll(".step")[1];
    nowDiv.classList.remove("active");
    nextDiv.classList.add("active");
  }
}

// position -> open
function checkSelectedPosition() {
  const front = document.querySelector("#frontend");
  const back = document.querySelector("#backend");
  const full = document.querySelector("#fullstack");
  const unDecided = document.querySelector("#undefined");

  if (!(front.checked || back.checked || full.checked || unDecided.checked)) {
    alert("한 가지를 선택해주시기 바랍니다.");
  } else {
    const nowDiv = document.querySelector(".active");
    const nextDiv = document.querySelectorAll(".step")[2];
    nowDiv.classList.remove("active");
    nextDiv.classList.add("active");
  }
}

// open -> submit
function checkSelectedOpen() {
  const open = document.querySelector("#public");
  const close = document.querySelector("#private");

  if (!(open.checked || close.checked)) {
    alert("한 가지를 선택해주시기 바랍니다.");
  } else {
    // 폼을 제출
    document.querySelector("#signupForm").submit();
  }
}
