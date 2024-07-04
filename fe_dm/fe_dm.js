// 파트에 따라 프로필 파트 부분 색 변경
const partTag = document.getElementsByClassName("part");

for (let i = 0; i < partTag.length; i++) {
  const part = partTag[i].innerText;
  let color = "#dedede";
  if (part == "프론트") {
    color = "#E1FEF4";
  } else if (part == "백") {
    color = "#FEE5E1";
  } else if (part == "풀스택") {
    color = "#FFEFB8";
  }
  partTag[i].style.backgroundColor = color;
}

// 채팅 리스트에 마지막으로 대화한 내용이 뜨게 하기
const summarySpace = document.querySelector(".content");
const lastText = document
  .querySelector(".dm_content")
  .lastElementChild.querySelector("span").lastElementChild.innerText;
summarySpace.innerText = lastText;

// 채팅에서 프로필 사진과 이름 뜨게 하기
const me = document.getElementsByClassName("me");
const you = document.getElementsByClassName("you");

for (let i = 0; i < me.length; i++) {
  const myImage = document.createElement("img");
  myImage.src = "images/basic_profile.png";
  me[i].appendChild(myImage);
}

for (let i = 0; i < you.length; i++) {
  const yourImage = document.createElement("img");
  yourImage.src = "images/basic_profile.png";
  you[i].prepend(yourImage);

  const span = you[i].querySelector("span");
  const nameSpace = document.createElement("div");
  const yourName = "김민지";
  nameSpace.innerText = yourName;
  span.prepend(nameSpace);
}

// 채팅치면 입력되게 하기
