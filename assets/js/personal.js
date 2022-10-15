const hobbiesContent = document.querySelector(".hobbies-content");

//Card data:
const hobbies = [
  {
    title: "Running",
    content:
      "I love running to stay in optimal physical shape. My typical workout each week is 20 pull ups, 100 crunches, and 30 mins of running",
  },
  {
    title: "Coding",
    content:
      "I really enjoy coding, especially at night time. I typically spend hours coding each day; sometimes until 2 am",
  },
  {
    title: "Gaming",
    content:
      "I am an avid gamer. my favourite games to play are Modern Warfare, CyberPunk, Skyrim, Squad, and Witcher 3 ",
  },
  {
    title: "Cooking",
    content:
      "I am not the best cook, but I manage to get some stuff done. I am currently learning how to cook Jamaican cuisines with ingredients available in Croatia",
  },
  {
    title: "Reading",
    content:
      "I love reading books on weekends. I mostly like reading autobiography, but I am still a big fan of Stephen King",
  },
];
//Map over hobbies data and render it on page:
hobbies.map((hobby) => {
  hobbiesContent.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card">
    <div class="content">
     <h3 class="title">${hobby.title}</h3>
     <p class="body">${hobby.content}</p>
    </div>
  </div>`
  );
});
