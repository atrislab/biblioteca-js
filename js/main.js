import { books } from "./books.js";

const libro = document.querySelectorAll(".book");
const portadaLibro = document.querySelectorAll(".book-image");
const autorLibro = document.querySelectorAll(".book-author");
const paisLibro = document.querySelectorAll(".book-country");
const linkLibro = document.querySelectorAll(".book-link");
const tituloLibro = document.querySelectorAll(".book-title");
const paginasLibro = document.querySelectorAll(".book-pages");
const anyoLibro = document.querySelectorAll(".book-year");

for (let i = 0; i < libro.length; i++) {
  portadaLibro[i].src = books[i].imageLink;
  autorLibro[i].innerHTML = books[i].author;
  paisLibro[i].innerHTML = books[i].country;
  linkLibro[i].href = books[i].link;
  tituloLibro[i].innerHTML = books[i].title;
  paginasLibro[i].innerHTML = `Páginas: ${books[i].pages}`;
  anyoLibro[i].innerHTML = `Año: ${books[i].year}`;
}
