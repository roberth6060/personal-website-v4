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
    content: `
    <ul>
        <li>Regionally Accredited</li>
        <li>Accredited by: the Middle States Commission on Higher Education</li>
    </ul>
    <h3>Random Facts</h3>
    <ul>
        <li>The American College of Management and Technology (ACMT) was formed in 1995</li>
        <li>Rochester Institute of Technology and the Ministry of Science sign a cooperation agreement making ACMT the first and only private college in Croatia granting dual degrees for undergraduate programs</li>
        <li>RIT is located in Dubrovnik, and in Zagreb, Croatia</li>
        <li>The following programs are offered at at RIT:
            <ol>
            <li>Msc. Service Leadership and Innovation</li>
            <li>Bsc. Tourism and Hospitality</li>
            <li>Bsc. Information Technology / Web and Mobile Computing</li>
            <li>International Business</li>
            </ol>
        </li>
    </ul>`,
    img: "https://pbs.twimg.com/profile_images/1171468021900034058/Gu1RX0aR_400x400.jpg",
  },

  {
    name: "Chapman Unversity",
    content: `<ul>
        <li>Regionally Accredited</li><li>Accredited by: the Western Association of Schools and Colleges, Accrediting Commission for Senior Colleges and Universities</li>
      </ul>
      <h3>Random Facts</h3>
      <ul>
        <li>Private research university in Orange, California</li>
        <li>Founded in 1861 in Woodland, California, by the Christian Church (Disciples of Christ) under the name Hesperian College</li>
        <li>Chapman University and Anglo-American University have partnered to offer a unique opportunity for students to earn an MBA in just 17 months in Prague</li>
        <li>Courses are delivered in an intensive weekend format, this 46-credit MBA program is taught by both Chapman faculty and AAU faculty</li>
      </ul>
      `,
    img: "https://brand.chapman.edu/wp-content/uploads/2015/01/cu-seal.jpg",
  },
  {
    name: "American Military Unversity",
    content: `<ul>
        <li>Regionally Accredited</li>
        <li>Accredited by: the Higher Learning Commission</li>
      </ul>
      <h3>Random Facts</h3>
      <ul>
        <li>In 1991, retired Marine Corps officer James P. Etter founded American Military University</li>
        <li>In 2002, AMU was reorganized into the American Public University System</li>
        <li>Today the university system is one of the largest providers of online higher education offering more than 190 academic programs to students enrolled worldwide</li>
        <li>Military Times recognizes the University with a “Best for Vets Colleges” distinction</li>
      </ul>
      `,
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
    modalBody.innerHTML = `
    <h2>Important Information</h2>
    <hr width ="50%"/><h3>Accreditation</h3>${school.content}`;
  }
});
