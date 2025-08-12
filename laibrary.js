// an array to store the books

let booksArr = [];

// a construtor to the books

function Book (title, author, pages, status) {
    if(!new.target) {
        throw Error("use 'new' ");
    };
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return `${title} wrote by ${author} ${pages}, ${status}`;
    };
}

// a function to create a new book

function create(a, b, c, d){
    const newbook = new Book(a, b, c, d);
    const pushbook = booksArr.push(newbook);

    return newbook;
}

// adding the functionalty to the Add button
const addbtn = document.getElementById("add");

addbtn.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;

   const addNewBook = create(title, author, pages, status);


   const titleCell = document.createElement("td");
   titleCell.textContent = addNewBook.title;

   const authorCell = document.createElement("td");
   authorCell.textContent = addNewBook.author;

   const pagesCell = document.createElement("td");
   pagesCell.textContent = addNewBook.pages;

   const statusCell = document.createElement("td");
   statusCell.textContent = addNewBook.status;

   const bookRaw = document.createElement("tr");
   bookRaw.appendChild(titleCell);
   bookRaw.appendChild(authorCell);
   bookRaw.appendChild(pagesCell);
   bookRaw.appendChild(statusCell);

   const tbody = document.getElementById("tbody");
   tbody.appendChild(bookRaw);

   document.getElementById("title").value = ""; 
   document.getElementById("author").value = "";
   document.getElementById("pages").value = "";
   document.getElementById("status").value = "";

});