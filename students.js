const tableBody = document.getElementById("studentsTableBody");

const selectedBranch = localStorage.getItem("selectedBranch");

const loggedAdmin = localStorage.getItem("loggedAdmin");

let students = JSON.parse(localStorage.getItem("students"));

students = students.filter(student =>
  student.branch === selectedBranch &&
  student.adminId === loggedAdmin
);

function renderStudents(data){

  tableBody.innerHTML = "";

  data.forEach((student,index) => {

    tableBody.innerHTML += `

      <tr>
        <td>${index+1}</td>
        <td>${student.fullName}</td>
        <td>${student.rollNumber}</td>
        <td>
          <button onclick="openProfile('${student.rollNumber}')">
            Open
          </button>
        </td>
      </tr>

    `;
  });
}

renderStudents(students);

function searchStudent(){

  const value = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filtered = students.filter(student =>
    student.rollNumber.toLowerCase().includes(value)
  );

  renderStudents(filtered);
}

function openProfile(rollNumber){

  localStorage.setItem("selectedStudent", rollNumber);

  window.location.href = "profile.html";
}