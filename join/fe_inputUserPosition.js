const front = document.querySelector("#프론트엔드");
const back = document.querySelector("#백엔드");
const full = document.querySelector("#풀스택");
const unDecided = document.querySelector("#미정");

function checkSelectedPosition() {
  if (!(front.checked || back.checked || full.checked || unDecided.checked)) {
    alert("한 가지를 선택해주시기 바랍니다.");
  } else {
    // location.href = "fe_inputUserOpen.html";
    const nowDiv = document.querySelector("#display");
    const nextDiv = document.querySelectorAll("#notDisplay")[1];
    nowDiv.id = "notDisplay";
    nextDiv.id = "display";
  }
}
