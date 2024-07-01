// 달력 텍스트 설정(현재 연도+월)
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

const currentDateElement = document.getElementById("current_date");
currentDateElement.textContent = `${year}.${month}`;

// 팔로우 버튼 클릭시 팔로잉으로 변경
document.addEventListener("DOMContentLoaded", function () {
  var followBtn = document.getElementById("follow_btn");
  var isClicked = false;

  followBtn.addEventListener("click", function () {
    if (!isClicked) {
      followBtn.style.backgroundColor = "#F1E1FE";
      followBtn.style.color = "#AD4EF9";
      followBtn.textContent = "팔로잉";
    } else {
      followBtn.style.backgroundColor = "#AD4EF9";
      followBtn.style.color = "white";
      followBtn.textContent = "팔로우";
    }
    isClicked = !isClicked;
  });
});

// 백엔드 작업 후 수정

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

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit_btn");

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("del_btn");

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    toDoList.appendChild(li);
    toDoInput.value = ""; // 투두 입력 시 input 칸 초기화

    // 체크박스 클릭 시 글자색 변경
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        todoText.style.opacity = "0.3";
      } else {
        todoText.style.opacity = "1";
      }
      updateCompleteRate();
    });

    // 편집 버튼 클릭 시 텍스트 수정 기능
    editBtn.addEventListener("click", function () {
      let editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todoText.textContent.trim();
      editInput.classList.add("edit_todo");

      li.replaceChild(editInput, todoText); // 기존 텍스트 대체

      editInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          if (editInput.value.trim() === "") {
            alert("수정할 내용을 입력해주세요.");
          } else {
            todoText.textContent = ` ${editInput.value.trim()}`;
            li.replaceChild(todoText, editInput); // 수정된 텍스트 반영
          }
        }
      });

      editInput.focus();
    });

    // 삭제 버튼 클릭 시 실행될 코드
    deleteBtn.addEventListener("click", function () {
      toDoList.removeChild(li);
    });
  }
}

toDoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    paintToDo();
  }
});

// today ToDo 달성 비율 계산 및 달성률에 따른 박스 색 설정
function updateCompleteRate() {
  const checkboxes = document.querySelectorAll(".checkbox");
  const total = checkboxes.length;
  const completed = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  ).length;
  const percentage = total === 0 ? 0 : (completed / total) * 100;

  const ratioBox = document.querySelector(".ratio_box");

  if (percentage === 0) {
    ratioBox.style.backgroundColor = "";
  } else if (percentage > 0 && percentage < 30) {
    ratioBox.style.backgroundColor = "#F1E1FE";
  } else if (percentage >= 30 && percentage < 50) {
    ratioBox.style.backgroundColor = "#DBB0FC";
  } else if (percentage >= 50 && percentage < 75) {
    ratioBox.style.backgroundColor = "#AD4EF9";
  } else if (percentage >= 75 && percentage <= 100) {
    ratioBox.style.backgroundColor = "#7D08D9";
  }
}

// todo 목록 추가 버튼
const addListBtn = document.querySelector(".add_list");

addListBtn.addEventListener("click", function () {
  const todoListContainer = document.querySelector(".todo_list");

  addListBtn.style.display = "none";

  // 리스트 이름 입력 창 생성
  let listNameInput = document.createElement("input");
  listNameInput.type = "text";
  listNameInput.classList.add("list_name_input");
  listNameInput.placeholder = "목록 추가";

  // 리스트 이름 입력 창을 목록 추가 버튼 위치에 삽입
  todoListContainer.insertBefore(listNameInput, addListBtn);

  listNameInput.focus();

  listNameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const listName = listNameInput.value.trim();

      if (listName) {
        let newSection = document.createElement("section");
        newSection.classList.add("expanded_list_section");

        let expandedListBtn = document.createElement("button");
        expandedListBtn.textContent = listName;
        let img_e_add = document.createElement("img");
        img_e_add.src = "images/add_icon_circle.svg";
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

        inputField_e.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            paintToDo_e(todoList_e);
          }
        });

        function paintToDo_e(list) {
          const newTodo_e = inputField_e.value.trim();

          if (newTodo_e === "") {
            alert("할 일을 입력해주세요.");
          } else {
            let li_e = document.createElement("li");
            li_e.classList.add("todo_item_e");

            let checkbox_e = document.createElement("input");
            checkbox_e.type = "checkbox";
            li_e.appendChild(checkbox_e);
            checkbox_e.classList.add("checkbox_e");

            let todoText_e = document.createElement("span");
            todoText_e.textContent = ` ${newTodo_e}`;
            todoText_e.classList.add("todo_text_e");
            li_e.appendChild(todoText_e);

            // 날짜 입력 기능
            let dateInput = document.createElement("input");
            dateInput.type = "date";
            dateInput.classList.add = "date_input";
            li_e.appendChild(dateInput);

            //편집 버튼 생성
            let editBtn_e = document.createElement("button");
            editBtn_e.classList.add("edit_btn_e");
            li_e.appendChild(editBtn_e);

            //삭제 버튼 생성
            let deleteBtn_e = document.createElement("button");
            deleteBtn_e.classList.add("del_btn_e");
            li_e.appendChild(deleteBtn_e);

            list.appendChild(li_e);
            inputField_e.value = "";

            // 편집 버튼 클릭 시 텍스트 수정 기능
            editBtn_e.addEventListener("click", function () {
              let editInput_e = document.createElement("input");
              editInput_e.type = "text";
              editInput_e.value = todoText_e.textContent.trim();
              editInput_e.classList.add("edit_todo_e");

              li_e.replaceChild(editInput_e, todoText_e); // 기존 텍스트 대체

              editInput_e.focus(); // editInput_e에 포커스 설정

              editInput_e.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                  if (editInput_e.value.trim() === "") {
                    alert("수정할 내용을 입력해주세요.");
                  } else {
                    todoText_e.textContent = editInput_e.value.trim(); // 수정된 텍스트 반영
                    li_e.replaceChild(todoText_e, editInput_e);
                  }
                }
              });
            });

            // 삭제 버튼 클릭 시 실행될 코드
            deleteBtn_e.addEventListener("click", function () {
              list.removeChild(li_e);
            });

            // 체크박스 클릭 시 글자색 변경
            checkbox_e.addEventListener("change", function () {
              if (this.checked) {
                todoText_e.style.opacity = "0.3";
              } else {
                todoText_e.style.opacity = "1";
              }
            });

            editBtn_e.addEventListener("click", function () {
              inputField_e.style.display = "block";
              inputField_e.focus();
            });
          }
        }

        // 리스트 이름 입력 창 제거 후 목록 추가 버튼 다시 표시
        listNameInput.remove();
        addListBtn.style.display = "inline-block";
      } else {
        alert("목록 이름을 입력해주세요.");
      }
    }
  });
});
