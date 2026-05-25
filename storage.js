if(!localStorage.getItem("admins")){

  const defaultAdmins = [
    {
      adminId:"admin1",
      password:"12345"
    }
  ];

  localStorage.setItem(
    "admins",
    JSON.stringify(defaultAdmins)
  );
}

if(!localStorage.getItem("students")){
  localStorage.setItem("students", JSON.stringify([]));
}

if(!localStorage.getItem("books")){
  localStorage.setItem("books", JSON.stringify([]));
}

if(!localStorage.getItem("issuedBooks")){
  localStorage.setItem("issuedBooks", JSON.stringify([]));
}