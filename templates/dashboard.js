const toggleBtn = document.querySelector(".dashboard--nav--toggle--icon");
const linkDescription = document.querySelectorAll(
  ".dashboard--sidebar--links--desc"
);
const linksBar = document.querySelector(".dashboard--sidebar--links");
const sidebar = document.querySelector(".dashboard--sidebar");

if (window.innerWidth < 1439) {
  sidebar.classList.add("hide");
}

toggleBtn.addEventListener("click", function () {
  for (let i = 0; i < linkDescription.length; i++) {
    linkDescription[i].classList.toggle("show");
    linkDescription[i].classList.toggle("hide");
  }
  linksBar.classList.toggle(".collapse");
  sidebar.classList.toggle("hide");

});

const dashboardLinks = document.querySelectorAll(".dashboard--sidebar--links");

dashboardLinks.forEach(function (link) {
  if (link.href == window.location.href) {
    link.style.backgroundColor = "#ffc056";
    link.children[1].style.color = "#0B0B0B";
  }
});



// ======For Drag and Drop Area========

// document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
//   const dropZoneElement = inputElememnt.closest(".dasboard-upload-outline");

//   dropZoneElement.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     dropZoneElement.closet.classList.add("dasboard-upload-outline--over");
//   });

//   ["dragleave", "dragend"].forEach((type) => {
//     dropZoneElement.addEventListener(type, (e) => {
//       dropZoneElement.classList.remove("dasboard-upload-outline--over");
//     });
//   });

//   dropZoneElement.addEventListener("drop", (e) => {
//     e.preventDefault();
//     if (e.dataTransfer.files.length) {
//       inputElement.files = e.dataTransfer.file;
//       updateThumbnail(dropZoneElement, e.dataTransfer.file[0]);
//     }

//     dropZoneElement.classList.remove("dropzone");
//   });
// });

//Drag and Drop component

//selecting all required elements
const dropArea = document.querySelector("#drag-area"),
  dropArea2 = document.querySelector(".drop-area-info"),
  dragText = dropArea.querySelector("header"),
  button = dropArea.querySelector("button"),
  buttonNextPage = document.querySelector("#next-page-btn"),
  input = dropArea.querySelector("input"),
  uploadComponent = document.querySelector("#upload-option"),
  splitComponent = document.querySelector("#split-option"),
  uploadText = document.querySelector("#upload-area-text"),
  splitInput = document.querySelector("#split-option-input"),
  cancel = document.querySelector(".fa-xmark");

let file; //this is a global variable and we'll use it inside multiple functions
button.onclick = () => {
  input.click(); //if user click on the button then the input also clicked
};
if (buttonNextPage) {
  buttonNextPage.addEventListener("click", () => {
    uploadComponent.classList.remove("visible");
    uploadComponent.classList.add("non-visible");
    splitComponent.classList.remove("non-visible");
    splitComponent.classList.add("visible");
  });
}


input.addEventListener("change", function () {
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile() {
  let fileType = file.type; //getting selected file type"
  console.log(file);
  let validExtensions = [
    "text/csv",
    "text/json",
  ]; //adding some valid image extensions in array
  if (validExtensions.includes(fileType)) {
    let name = file.name;
    // document.getElementById("file--name").innerHTML = name;
    uploadText.innerHTML = name;
    dropArea2.innerHTML = name;
    splitInput.file = file;
    console.log(splitInput.file.name);
    if (cancel) {
      cancel.addEventListener("click", () => {
      uploadComponent.classList.remove("non-visible");
    uploadComponent.classList.add("visible");
    splitComponent.classList.remove("visible");
      splitComponent.classList.add("non-visible");
      file = "";
        splitInput.file = "";
        uploadText.innerHTML = "<header>Drag & Drop to Upload File</header><span>OR</span>";
        dropArea.classList.remove("active");
    })
     }
    

    // if user selected file is an image file
    // let fileReader = new FileReader(); //creating new FileReader object
    // fileReader.onload = () => {
    //   let fileURL = fileReader.result; //passing user file source in fileURL variable
    //   // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
    //   let imgTag = `<img src="${fileURL}" alt="csv">`; //creating an img tag and passing user selected file source inside src attribute
    //   dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    // };
    // fileReader.readAsDataURL(file);
  } else {
    alert("This is not a CSV/JSON file!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
