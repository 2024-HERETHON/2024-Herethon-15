// const todo_rating = (e) => {
//   e.array.forEach((e) => {
//     let completed_cnt = 0;
//     let memo_length = e.memo.length;
//     e.memo.forEach((memo) => {
//       if (memo.complete == true) completed_cnt++;
//     });
//     const ratio = Math.round((completed_cnt / memo_length) * 100);

//     const callenderBox = document.querySelector(".callender_box");

//     if (ratio === 100) {
//       callenderBox.classList.add("full");
//       callenderBox.classList.remove("half", "less");
//     } else if (ratio >= 50 && ratio < 100) {
//       callenderBox.classList.add("half");
//       callenderBox.classList.remove("full", "less");
//     } else {
//       callenderBox.classList.add("less");
//       callenderBox.classList.remove("full", "half");
//     }
//   });
// };

//달력 텍스트 설정(현재 연도+월)
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

const currentDateElement = document.getElementById("current_date");
currentDateElement.textContent = `${year}.${month}`;

// today 투두리스트 추가 버튼
const todoInputBtn = document.querySelector(".todo_input");
const inputField = document.querySelector(".input_field");

todoInputBtn.addEventListener("click", function () {
  todoInputBtn.classList.add("input_active");
  inputField.style.display = "block";
  inputField.focus();
});

// today 투두리스트 추가
const toDoInput = document.getElementById("input_field");
const toDoList = document.getElementById("todo_list");

function paintToDo() {
  const newTodo = toDoInput.value.trim();

  if (newTodo === "") {
    alert("할 일을 입력해주세요.");
  } else {
    let li = document.createElement("li");
    li.classList.add("todo_item");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    checkbox.classList.add("checkbox");

    let todoText = document.createElement("span");
    todoText.textContent = ` ${newTodo}`;
    todoText.classList.add("todo_text");
    li.appendChild(todoText);

    let expandBtn = document.createElement("button");
    let img = document.createElement("img");
    img.src = "/images/expand_btn.svg";
    img.alt = "더보기";
    expandBtn.appendChild(img);
    expandBtn.classList.add("expand_btn");
    expandBtn.addEventListener("click", function () {
      li.querySelector(".input_field_e").style.display = "block";
      li.querySelector(".input_field_e").focus();
    });
    li.appendChild(expandBtn);

    toDoList.appendChild(li);
    toDoInput.value = "";
  }
}

toDoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    paintToDo();
  }
});

// 목록 추가 버튼
const addListBtn = document.querySelector(".add_list");
let listCount = 1;

addListBtn.addEventListener("click", function () {
  const todoListContainer = document.querySelector(".todo_list");

  let newSection = document.createElement("section");
  newSection.classList.add("expanded_list_section");

  let expandedListBtn = document.createElement("button");
  expandedListBtn.textContent = `목록추가${listCount}`;
  let img_e_add = document.createElement("img");
  img_e_add.src = "/images/add_icon_circle.svg";
  expandedListBtn.appendChild(img_e_add);

  expandedListBtn.classList.add("expanded_list");

  let inputField_e = document.createElement("input");
  inputField_e.type = "text";
  inputField_e.classList.add("input_field_e");
  inputField_e.placeholder = "할 일 입력";
  inputField_e.style.display = "none";

  let todoList_e = document.createElement("ul");
  todoList_e.classList.add("todo_list_e");

  expandedListBtn.addEventListener("click", function () {
    inputField_e.style.display = "block";
    inputField_e.focus();
  });

  newSection.appendChild(expandedListBtn);
  newSection.appendChild(inputField_e);
  newSection.appendChild(todoList_e);

  // 새로운 섹션을 목록 추가 버튼 위에 삽입
  todoListContainer.insertBefore(newSection, addListBtn);

  listCount++;

  inputField_e.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      paintToDo_e(newSection);
    }
  });

  function paintToDo_e(section) {
    const newTodo_e = inputField_e.value.trim();

    if (newTodo_e === "") {
      alert("할 일을 입력해주세요.");
    } else {
      let li_e = document.createElement("li");
      li_e.classList.add("todo_item_e");

      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      li_e.appendChild(checkbox);
      checkbox.classList.add("checkbox_e");

      let todoText_e = document.createElement("span");
      todoText_e.textContent = ` ${newTodo_e}`;
      todoText_e.classList.add("todo_text_e");
      li_e.appendChild(todoText_e);

      let expandBtn_e = document.createElement("button");
      let img_e_expand = document.createElement("img");
      img_e_expand.src = "/images/expand_btn.svg";
      img_e_expand.alt = "더보기";
      expandBtn_e.appendChild(img_e_expand);
      expandBtn_e.classList.add("expand_btn_e");
      li_e.appendChild(expandBtn_e);

      section.querySelector(".todo_list_e").appendChild(li_e);
      inputField_e.value = "";
    }
  }
});
