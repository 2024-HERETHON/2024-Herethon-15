const partTag = document.getElementsByClassName("part");

for (let i = 0; i < partTag.length; i++) {
  const part = partTag[i].innerText;
  console.log(part);
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
