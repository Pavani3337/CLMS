const branchContainer = document.getElementById("branchContainer");

const branches = ["CSE","ECE","EEE","BBA","BCA"];

branches.forEach(branch => {

  branchContainer.innerHTML += `

    <div class="branch-card"
         onclick="openBranch('${branch}')">
      <h2>${branch}</h2>
    </div>

  `;

});

function openBranch(branch){

  localStorage.setItem("selectedBranch", branch);

  window.location.href = "students.html";
}

function logout(){

  localStorage.removeItem("loggedAdmin");

  window.location.href = "index.html";
}