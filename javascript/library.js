// // let books=[
// //    {id:1 , bookName:"Harry Potter and the Half-Blood Prince" , about:"It is the middle of the summer, but there is an unseasonal mist pressing against the windowpanes. Harry Potter is waiting nervously in his bedroom at the Dursleys' house in Privet Drive for a visit from Professor Dumbledore himself. One of the last times he saw the Headmaster, he was in a fierce one-to-one duel with Lord Voldemort, and Harry can't quite believe that Professor Dumbledore will actually appear at the Dursleys' of all places. Why is the Professor coming to visit him now? What is it that cannot wait until Harry returns to Hogwarts in a few weeks' time? Harry's sixth year at Hogwarts has already got off to an unusual start, as the worlds of Muggle and magic start to intertwine..." , auther:"J.K. Rowling" ,Image:"images/books/image1.jpeg"}
// // ,

// //    {id:2 , bookName:"Harry Potter and the Half-Blood Prince" , about:"It is the middle of the summer, but there is an unseasonal mist pressing against the windowpanes. Harry Potter is waiting nervously in his bedroom at the Dursleys' house in Privet Drive for a visit from Professor Dumbledore himself. One of the last times he saw the Headmaster, he was in a fierce one-to-one duel with Lord Voldemort, and Harry can't quite believe that Professor Dumbledore will actually appear at the Dursleys' of all places. Why is the Professor coming to visit him now? What is it that cannot wait until Harry returns to Hogwarts in a few weeks' time? Harry's sixth year at Hogwarts has already got off to an unusual start, as the worlds of Muggle and magic start to intertwine..." , auther:"J.K. Rowling" ,Image:"images/image3.jpeg"}
// // ]

// let books = [
//   {
//     id: 1,
//     bookName: "Harry Potter and the Half-Blood Prince",
//     about: "It is the middle of the summer...",
//     auther: "J.K. Rowling",
//     Image: "images/books/image1.jpeg"
//   },
//   {
//     id: 2,
//     bookName: "Harry Potter and the Deathly Hallows",
//     about: "Harry has been burdened with a dark...",
//     auther: "J.K. Rowling2",
//     Image: "images/image3.jpeg"
//   }
// ];

// let contaner = document.querySelector(".shelve-section3");
// books.forEach(book =>{
//   contaner.innerHTML += `
//  <div class="main-books"><a href="details.html?id=${book.id}"><img src="${book.Image}" alt=""></a></div>
//   `
// }

// )



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

// // دالة لتحميل بيانات الكتاب
// function loadBookDetails() {
//   // الحصول على معرف الكتاب من localStorage
//   const bookId = localStorage.getItem('selectedBookId');

//   if (bookId) {
//     // البحث عن الكتاب في المصفوفة
//     const book = books.find(b => b.id == bookId);

//     if (book) {
//       // تحديث عناصر الصفحة ببيانات الكتاب
//       document.getElementById('bookCover').src = book.Image;
//       document.getElementById('bookTitle').textContent = book.bookName;
//       document.getElementById('bookAuthor').textContent = book.auther;
//       document.getElementById('bookDescription').textContent = book.about;
//       document.getElementById('fullDescription').textContent = book.fullDescription;
//       document.getElementById('editorsList').textContent = book.editors;
//       document.getElementById('bookLanguage').textContent = book.language;
//       document.getElementById('paperbackInfo').textContent = book.paperback;
//       document.getElementById('editorName').textContent = book.editorName;
//       document.getElementById('editorBio').textContent = book.editorBio;

//       // تحديث عنوان الصفحة
//       document.title = ${book.bookName} - My Library;
//     } else {
//       // إذا لم يتم العثور على الكتاب
//       alert('Book not found!');
//       window.location.href = 'myLibrary.html';
//     }
//   } else {
//     // إذا لم يكن هناك معرف كتاب محفوظ
//     alert('No book selected!');
//     window.location.href = 'myLibrary.html';
//   }
// }

// // تحميل بيانات الكتاب عند تحميل الصفحة
// document.addEventListener('DOMContentLoaded', loadBookDetails);

// Fares, [8/24/2025 11:29 AM]
// // بيانات الكتب
// let books = [
//   {id: 1, bookName: "Harry Potter and the Half-Blood Prince", about: "It is the middle of the summer...", auther: "J.K. Rowling", Image: "images/books/image1.jpeg"},
//   {id: 2, bookName: "Harry Potter and the Deathly Hallows", about: "Get ready to uncover the dark secrets...", auther: "J.K. Rowling", Image: "images/image3.jpeg"}
// ];

// // دالة للانتقال إلى صفحة التفاصيل مع حفظ معرف الكتاب
// function goToDetails(bookId) {
//   // حفظ معرف الكتاب في localStorage
//   localStorage.setItem('selectedBookId', bookId);
//   // الانتقال إلى صفحة التفاصيل
//   window.location.href = 'details.html';
// }

// // عرض الكتب في الـ DOM
// let container = document.querySelector(".shelve-section3");
// books.forEach(book => {
//   container.innerHTML +=
//     <div class="main-books">
//       <a href="javascript:void(0)" onclick="goToDetails(${book.id})">
//         <img src="${book.Image}" alt="${book.bookName}">
//       </a>
//     </div>
//   ;
// });

// قائمة كتب كـ مثال (انت ممكن تجيبها من JSON أو قاعدة بيانات)
// const books = [
//   { id: 1, title: "Book One", author: "Author A", desc: "This is the first book.", img: "images/book1.jpg" },
//   { id: 2, title: "Book Two", author: "Author B", desc: "This is the second book.", img: "images/book2.jpg" },
//   { id: 3, title: "Book Three", author: "Author C", desc: "This is the third book.", img: "images/book3.jpg" }
// ];

// let books = [
//   {
//     id: 1,
//     bookName: "Harry Potter and the Half-Blood Prince",
//     about: "It is the middle of the summer...",
//     auther: "J.K. Rowling",
//     Image: "images/books/image1.jpeg",
//   },
//   {
//     id: 2,
//     bookName: "Harry Potter and the Deathly Hallows",
//     about: "Harry has been burdened with a dark...",
//     auther: "J.K. Rowling",
//     Image: "images/image3.jpeg",
//   },
// ];

let contaner = document.querySelector(".shelve-section3");
books.forEach((book) => {
  contaner.innerHTML += `<div class="main-books" id=${book.id} ><img src="${book.Image}" alt=""></div>`;
  console.log(book.id);
});

document.querySelectorAll(".content").forEach((content) => {
  content.addEventListener("click", function (e) {
    let target = e.target.closest(".main-books");
    if (target) {
      let imageId = target.id;
      localStorage.setItem("selectedImageId", imageId);
      window.location.href = "details.html";
    }
  });
});
