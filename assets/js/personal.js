const hobbiesContent = document.querySelector(".hobbies-content");

//Card data:
const hobbies = [
  {
    title: "Running",
    content:
      "I'm a huge sports fan. I love riding my bike and I practice ultimate frisbee (Yes, it is a real sport)",
  },
  {
    title: "Coding",
    content:
      "I really enjoy coding, specially at night time. I have to be careful tho, since I've stayed coding overnight several times",
  },
  {
    title: "Gaming",
    content:
      "I am an avid gamer. my favourite games are Modern Warfare, Skyrim ",
  },
  {
    title: "Cooking",
    content:
      "I'm not a cook, but I manage to get some stuff done. I love trying out veggie food",
  },
  {
    title: "Reading",
    content:
      "I love reading books mostly non-fiction. I am a big fan of Stephen King",
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
