document.addEventListener("DOMContentLoaded", function() {
  const realUpload = document.querySelector(".real-upload");
  const upload = document.querySelector(".profile_edit");
  const profileImg = document.querySelector(".profile_img");

  function getImageFiles(e) {
      const file = e.currentTarget.files[0];
      //const url = URL.createObjectURL(file);

      const reader = new FileReader();
      reader.onload = (e) => {
          //profileImg.src = url;
          profileImg.src = e.target.result;
          document.querySelector(".profile_form").submit(); // 이미지 업로드 후 폼 제출
      };
      reader.readAsDataURL(file);
  }

  upload.addEventListener("click", () => realUpload.click());
  realUpload.addEventListener("change", getImageFiles);
});