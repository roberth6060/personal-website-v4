const schools = document.querySelectorAll(".school");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const modalImg = document.querySelector(".model-img");
const modalBody = document.querySelector(".model-body");
const overlay = document.querySelector(".overlay");
const timeline = document.querySelector(".timeline");

const schoolData = [
  {
    name: "RIT Croatia",
    content:
      "RIT <br/> is globally known for cooperative education and has one of the oldest and biggest co-op programs in the world. It annually places more than 4,100 students in more than 6,100 co-op assignments with nearly 2,100 employers across the United States and overseas.",
    img: "https://pbs.twimg.com/profile_images/1171468021900034058/Gu1RX0aR_400x400.jpg",
  },

  {
    name: "Chapman Unversity",
    content:
      "#4 of the Top American Film Schools, Dodge College of Film and Media Arts – The Hollywood Reporter. #52 (tied) in Most Innovative Schools - U.S. News and World Report. #76 (tied) in Best Colleges for Veterans – U.S. News and World Report.",
    img: "https://brand.chapman.edu/wp-content/uploads/2015/01/cu-seal.jpg",
  },
  {
    name: "American Military Unversity",
    content:
      "American Military University is part of American Public University System (APUS), which is accredited by the Higher Learning Commission (HLC), an institutional accreditation agency recognized by the U.S. Department of Education.",
    img: "https://www.collegeconsensus.com/wp-content/uploads/2018/12/american-military-university-logo-168449.jpg",
  },
];

/** ================== CLOSE MODAL ==================*/
//close-modal of button press:
btnCloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
//Close modal when escape key is pressed:
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});
//Close model by clicking on overlay
overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
/** ================== OPEN MODAL ==================*/

//Track clicked html element with show-model classname:
timeline.addEventListener("click", (e) => {
  e.preventDefault();
  const showModelExist = Array.from(e.target.classList).includes("show-modal");

  //Open Modal dynamically:
  if (showModelExist) {
    const schoolName = e.target.firstChild.textContent;
    // e.target.firstChild.textContent = "Love";
    document.querySelector(".modal-title").textContent =
      e.target.firstChild.textContent;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    //Change model Content
    const [school] = schoolData.filter((school) => school.name === schoolName);
    modalTitle.textContent = school.name;
    modalImg.src = school.img;
    modalBody.innerHTML = school.content;
  }
});
