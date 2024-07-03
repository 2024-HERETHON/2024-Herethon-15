const realUpload = document.querySelector(".real-upload");
const upload = document.querySelector(".profile_edit");

function getImageFiles(e) {
  const file = e.currentTarget.files[0];
  const url = URL.createObjectURL(file);

  const reader = new FileReader();
  reader.onload = (e) => {
    upload.src = url;
  };
  reader.readAsDataURL(file);
}

upload.addEventListener("click", () => realUpload.click());
realUpload.addEventListener("change", getImageFiles);
