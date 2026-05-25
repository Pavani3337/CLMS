function addBook(){

  const serialNumber = document.getElementById("serialNumber").value;

  const bookName = document.getElementById("bookName").value;

  const authorName = document.getElementById("authorName").value;

  const books = JSON.parse(localStorage.getItem("books"));

  books.push({
    serialNumber,
    bookName,
    authorName
  });

  localStorage.setItem(
    "books",
    JSON.stringify(books)
  );

  loadBooks();
}

function loadBooks(){

  const books = JSON.parse(localStorage.getItem("books"));

  const booksTable = document.getElementById("booksTable");

  booksTable.innerHTML = "";

  books.forEach(book => {

    booksTable.innerHTML += `

      <tr>
        <td>${book.serialNumber}</td>
        <td>${book.bookName}</td>
        <td>${book.authorName}</td>
      </tr>

    `;
  });
}

loadBooks();