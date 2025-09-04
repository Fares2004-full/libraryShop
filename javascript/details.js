

const books = [
  {
    id: 1,
    bookName: "Harry Potter and the Half-Blood Prince",
    about: "It is the middle of the summer, but there is an unseasonal mist pressing against the windowpanes. Harry Potter is waiting nervously in his bedroom at the Dursleys' house in Privet Drive for a visit from Professor Dumbledore himself.",
    auther: "J.K. Rowling",
    Image: "images/books/image1.jpeg",
    fullDescription: "It is the middle of the summer, but there is an unseasonal mist pressing against the windowpanes. Harry Potter is waiting nervously in his bedroom at the Dursleys' house in Privet Drive for a visit from Professor Dumbledore himself. One of the last times he saw the Headmaster, he was in a fierce one-to-one duel with Lord Voldemort, and Harry can't quite believe that Professor Dumbledore will actually appear at the Dursleys' of all places. Why is the Professor coming to visit him now? What is it that cannot wait until Harry returns to Hogwarts in a few weeks' time? Harry's sixth year at Hogwarts has already got off to an unusual start, as the worlds of Muggle and magic start to intertwine...",
    editors: "J.K. Rowling (author), Christopher Reath, Alera, Steve Korg",
    language: "Standard English (USA & UK)",
    paperback: "Paper textured, full color, 345 pages",
    editorName: "Roberto Jordan",
    editorBio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vitae dolores quibusdam"
  },
  {
    id: 2,
    bookName: "Harry Potter and the Deathly Hallows",
    about: "Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.",
    auther: "J.K. Rowling",
    Image: "images/image3.jpeg",
    fullDescription: "Harry has been burdened with a dark, dangerous and seemingly impossible task: that of locating and destroying Voldemort's remaining Horcruxes. Never has Harry felt so alone, or faced a future so full of shadows. But Harry must somehow find within himself the strength to complete the task he has been given.",
    editors: "J.K. Rowling (author), Christopher Reath, Alera, Steve Korg",
    language: "Standard English (USA & UK)",
    paperback: "Paper textured, full color, 607 pages",
    editorName: "Roberto Jordan",
    editorBio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vitae dolores quibusdam"
  }
];

  let selectedId = localStorage.getItem("selectedImageId");

  console.log(typeof +selectedId);

  for(let i=0 ; i<books.length;i++){
    if(books[i].id === +selectedId){
            document.querySelector(".book-cover").src = books[i].Image;
            document.querySelector(".book h1").textContent = books[i].bookName;
            document.querySelector(".book h5").textContent = books[i].auther;
            document.querySelector(".book p").textContent = books[i].about;
            document.querySelector(".description p ").textContent = books[i].fullDescription;
            document.querySelector(".editors p ").textContent = books[i].editors;
             document.querySelector(".language p ").textContent = books[i].language;
              document.querySelector(".paperbak p ").textContent = books[i].paperback;
            break;
    }

  } 
  

let navButt = document.querySelector(".sid-nav-bar-butt");


// navButt.onclick = function(){
// let sidNav = document.querySelector(".side-nav-bar");
// sidNav.classList.toggle("side-bar-new-style")
// let sidnavLin = document.getElementsByClassName("nav-link-side-nav");

// let logo = document.querySelector(".logo");

// let mainlink = document.getElementById("navbar-brand1");
// console.log(mainlink);
//  for (let i = 0; i < sidnavLin.length; i++) {
//     sidnavLin[i].classList.toggle("nav-link-side-nav-eve");
//     sidnavLin[i].classList.toggle("hover");
//   }
  
//   logo.classList.toggle("logo-togg"); 

//  if (logo.classList.contains("logo-togg")) {

//     mainlink.classList.toggle("logo-togg2");
//   }
//    else {

//     mainlink.classList.toggle("logo-togg2");

//   }
// } 



document.addEventListener("DOMContentLoaded", function() {
  const navButt = document.querySelector(".sid-nav-bar-butt");
  const sideNav = document.querySelector(".side-nav-bar");
  const sidnavLin = document.querySelectorAll(".nav-link-side-nav");
  const logo = document.querySelector(".logo");
  const mainlink = document.getElementById("navbar-brand1");

  if (!navButt || !sideNav) return; // أمان

  navButt.addEventListener("click", function() {
    // toggle on the sidebar element
    sideNav.classList.toggle("side-bar-new-style");

    // toggle classes on each nav link
    sidnavLin.forEach(el => {
      el.classList.toggle("nav-link-side-nav-eve");
      el.classList.toggle("hover");
    });

    // logo class toggle
    logo.classList.toggle("logo-togg");

    // keep mainlink in sync (ensure add/remove properly)
    if (mainlink) {
      mainlink.classList.toggle("logo-togg2", logo.classList.contains("logo-togg"));
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const link = document.querySelector(".links");
   const navButt = document.querySelector(".sid-nav-bar-butt");
    const mainlink = document.getElementById("navbar-brand2");
  function checkScreen() {
   if (window.innerWidth >= 768 && window.innerWidth < 991 ) { 
   link.style.display = "flex"; 
     mainlink.style.opacity = 1;
   navButt.style.display = "none"
   
 } else {
     link.style.display = "none"; 
          mainlink.style.opacity = 0;
     navButt.style.display = "flex"
 }
  }

  checkScreen();
  window.addEventListener("resize", checkScreen);
});