function test() {
  const name = document.querySelector("#userName");
  const id = document.querySelector("#userId");
  const pw = document.querySelector("#userPw");
  const pwCheck = document.querySelector("#userPwCheck");
  if (!name.value) {
    alert("이름을 입력해주시기 바랍니다.");
  } else if (!id.value) {
    alert("아이디를 입력해주시기 바랍니다.");
  } else if (!pw.value || pw.value != pwCheck.value) {
    alert("비밀번호가 일치하지 않습니다.");
    pw.value = "";
    pwCheck.value = "";
  } else {
    // location.href = "fe_inputUserPosition.html";
    const nowDiv = document.querySelector("#active");
    const nextDiv = document.querySelectorAll("#step")[1];
    nowDiv.classList.remove("active");
    nextDiv.classList.add("active");
  }
}
