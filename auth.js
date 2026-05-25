function loginAdmin(){

  const adminId = document.getElementById("adminId").value;
  const password = document.getElementById("password").value;

  const admins = JSON.parse(localStorage.getItem("admins"));

  const validAdmin = admins.find(admin =>
    admin.adminId === adminId &&
    admin.password === password
  );

  if(validAdmin){

    localStorage.setItem("loggedAdmin", adminId);

    window.location.href = "dashboard.html";

  }else{
    alert("Invalid Login Details");
  }
}