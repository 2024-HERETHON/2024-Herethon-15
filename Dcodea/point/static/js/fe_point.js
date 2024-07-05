document.getElementById("return_btn").addEventListener("click", function () {
  const myPoint = document.querySelector("#myPoint");
  const point = document.querySelector("input.input_point");
  const name = document.querySelector("input.input_name");
  const select_bank = document.querySelector("select#input_bank");
  const bank = select_bank.options[select_bank.selectedIndex];
  const account = document.querySelector("input.input_account");
  const idnum_f = document.querySelector("input.input_idnum_f");
  const idnum_b = document.querySelector("input.input_idnum_b");
  const checkbox = document.querySelector("input.checkbox");

  if (myPoint.innerText < point.value) {
    alert("포인트가 부족합니다.");
  } else if (point.value == 0) {
    alert("환급받을 포인트를 입력해주시기 바랍니다.");
  } else if (name.value == "") {
    alert("예금주 이름을 입력해주시기 바랍니다.");
  } else if (bank == "은행") {
    alert("입금받을 은행을 골라주시기 바랍니다.");
  } else if (account.value == 0) {
    alert("입금받을 계좌번호를 입력해주시기 바랍니다.");
  } else if (idnum_f.value == 0 || idnum_b.value == 0) {
    alert("주민등록번호를 입력해주시기 바랍니다.");
  } else if (idnum_f.length != 6 || idnum_b.length != 7) {
    alert("주민등록번호를 올바르게 입력해주시기 바랍니다.");
  } else if (!checkbox.checked) {
    alert("약관을 모두 동의해주시기 바랍니다.");
  } else {
    alert(
      "환급신청이 완료되었습니다. 은행사 상황에 따라 3-5일 안에 입금됩니다."
    );
    point.value = 0;
    name.value = "";
    select_bank.options[0].selected = true;
    account.value = "";
    idnum_f.value = "";
    idnum_b.value = "";
    checkbox.checked = false;
  }
});
