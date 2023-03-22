function login () {
user_name = document.getElementById("inp1").value;
localStorage.setItem("user" , user_name);
window.location="kwitter_room.html";
};
 