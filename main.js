function addUser() {
  username = document.getElementById("username");
  localStorage.setItem("username" , username);
  window.location = "kwitter.html";
}