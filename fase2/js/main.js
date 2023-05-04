import { books } from "/js/books.js";
let book = "";
let main = document.createElement("main");
document.body.appendChild(main);
let mainSelector = document.querySelector("main");
for (let i = 0; i < books.length; i++) {
  book += `      
  <article class="book">
    <img src="/${books[i].imageLink}" alt="" class="book-image" />
    <div class="book-info">
      <span class="book-author">${books[i].author}</span>
      <span class="book-country">${books[i].country}</span>
      <a href="${books[i].link}" class="book-link">
        <h3 class="book-title">${books[i].title}</h3>
      </a>
      <span class="book-pages">${books[i].pages}</span>
      <p class="book-year">${books[i].year}</p>
    </div>
  </article>`;
}
console.log(book);
mainSelector.innerHTML = book;
