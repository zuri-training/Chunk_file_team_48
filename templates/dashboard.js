const toggleBtn = document.querySelector(".dashboard--nav--toggle--icon");
const linkDescription = document.querySelectorAll(
  ".dashboard--sidebar--links--desc"
);
const linksBar = document.querySelector(".dashboard--sidebar--links");
const sidebar = document.querySelector(".dashboard--sidebar");

toggleBtn.addEventListener("click", function () {
  for (let i = 0; i < linkDescription.length; i++) {
    linkDescription[i].classList.toggle("show");
    linkDescription[i].classList.toggle("hide");
  }
  linksBar.classList.toggle(".collapse");

  if (window.innerWidth < 1439) {
    sidebar.classList.toggle("hide");
  }
});

// ======For Drag and Drop Area========

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElememnt.closest(".dasboard-upload-outline");

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.closet.classList.add("dasboard-upload-outline--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("dasboard-upload-outline--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.file;
      updateThumbnail(dropZoneElement, e.dataTransfer.file[0]);
    }

    dropZoneElement.classList.remove("dropzone");
  });
});
