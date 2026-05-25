function registerStudent(){

  const fullName = document.getElementById("fullName").value;

  const rollNumber = document.getElementById("rollNumber").value;

  const branch = document.querySelector(
    'input[name="branch"]:checked'
  ).value;

  const adminId = document.getElementById("adminId").value;

  const adminPassword = document.getElementById("adminPassword").value;

  const admins = JSON.parse(localStorage.getItem("admins"));

  const validAdmin = admins.find(admin =>
    admin.adminId === adminId &&
    admin.password === adminPassword
  );

  if(!validAdmin){
    alert("Invalid Admin Details");
    return;
  }

  const photoInput = document.getElementById("photo");

  const reader = new FileReader();

  reader.onload = function(){

    const students = JSON.parse(localStorage.getItem("students"));

    students.push({
      fullName,
      rollNumber,
      branch,
      adminId,
      photo:reader.result
    });

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

    alert("Registration Successful");

    window.location.reload();
  }

  reader.readAsDataURL(photoInput.files[0]);
}