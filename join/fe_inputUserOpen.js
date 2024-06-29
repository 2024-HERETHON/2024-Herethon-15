const open = document.querySelector("#공개");
const close = document.querySelector("#비공개");

function checkSelected() {
  if (!(open.checked || close.checked)) {
    alert("한 가지를 선택해주시기 바랍니다.");
  } else {
    location.href = "fe_JoinFinish.html";
  }
}
