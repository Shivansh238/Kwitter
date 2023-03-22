//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBZQx4ND-jpORFURMMjpHJf906pXntAXIM",
      authDomain: "chatter-42882.firebaseapp.com",
      databaseURL: "https://chatter-42882-default-rtdb.firebaseio.com",
      projectId: "chatter-42882",
      storageBucket: "chatter-42882.appspot.com",
      messagingSenderId: "1014412127875",
      appId: "1:1014412127875:web:ddfcdf4bed736a1d4535b6"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      //Start code
row="<div class ='room_name' id="+ Room_names +" onclick='Open_room(this.id);'>#" + Room_names + " </div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function Open_room (name){
localStorage.setItem("ClickRoom" , name);
window.location="kwitter_page.html"; 
}


var userName = localStorage.getItem("user");
console.log(userName);
document.getElementById("welcome").innerHTML = "Welcome " + userName;

function addRoom () {
   var addRoomName = document.getElementById("ipn2").value;
   console.log(addRoomName);
   firebase.database().ref("/").child(addRoomName).update({
    purpose : "adding room name"
   });
    localStorage.setItem("Room_name",addRoomName);
}

function logout (){
      localStorage.removeItem("Room_name");
      localStorage.removeItem("user");

      window.location = "index.html";
}

