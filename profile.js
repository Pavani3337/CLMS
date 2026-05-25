const selectedStudent = localStorage.getItem("selectedStudent");

const student = students.find(s =>
  s.rollNumber === selectedStudent
);

const profileDiv = document.getElementById("studentProfile");

profileDiv.innerHTML = `

  <img src="${student.photo}" class="profile-photo">

  <h2>${student.fullName}</h2>

  <h3>${student.rollNumber}</h3>

`;

const issuedTable = document.getElementById("issuedBooksTable");

const studentBooks = issuedBooks.filter(book =>
  book.studentRoll === selectedStudent
);

studentBooks.forEach((book,index) => {

  issuedTable.innerHTML += `

    <tr>
      <td>${index+1}</td>
      <td>${book.bookName}</td>
      <td>${book.authorName}</td>
      <td>${book.issuedDate}</td>
      <td>${book.dueDate}</td>
      <td>${book.returnedDate}</td>
    </tr>

  `;
});

function showIssueForm(){

  const form = document.getElementById("issueForm");

  form.innerHTML = `

    <input type="text" id="issueBookName" placeholder="Book Name">

    <input type="text" id="issueAuthorName" placeholder="Author Name">

    <input type="date" id="issuedDate">

    <input type="date" id="dueDate">

    <button onclick="issueBook()">Save</button>

  `;
}

function issueBook(){

  const issuedBooks = JSON.parse(localStorage.getItem("issuedBooks"));

  issuedBooks.push({
    studentRoll:selectedStudent,
    bookName:document.getElementById("issueBookName").value,
    authorName:document.getElementById("issueAuthorName").value,
    issuedDate:document.getElementById("issuedDate").value,
    dueDate:document.getElementById("dueDate").value,
    returnedDate:"Not Returned"
  });

  localStorage.setItem(
    "issuedBooks",
    JSON.stringify(issuedBooks)
  );

  window.location.reload();
}