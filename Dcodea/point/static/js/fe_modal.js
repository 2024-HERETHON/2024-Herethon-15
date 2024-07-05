// modal1
const modal1 = document.querySelector("#modal1");
const modalOpen1 = document.querySelector("#modal_btn1");
const modalClose1 = document.querySelector("#close_btn1");

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen1.addEventListener("click", function () {
  modal1.classList.add("on");
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose1.addEventListener("click", function () {
  modal1.classList.remove("on");
});

const modal2 = document.querySelector("#modal2");
const modalOpen2 = document.querySelector("#modal_btn2");
const modalClose2 = document.querySelector("#close_btn2");

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen2.addEventListener("click", function () {
  modal2.classList.add("on");
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose2.addEventListener("click", function () {
  modal2.classList.remove("on");
});
