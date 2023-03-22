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

///////////
user_name = localStorage.getItem("user");
room_name = localStorage.getItem("ClickRoom");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
 
names =  message_data['name'];
messages =  message_data['message'];
console.log(names + messages);

names_tag = "<h4>" + names + "<img src='tick.png' class = 'user_tick'> </h4>";
messages_tag = "<h4>" + messages + "</h4>";
row = names_tag + messages_tag ;
document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function logout (){
    localStorage.removeItem("Room_name");
    localStorage.removeItem("user");
    
    window.location = "index.html";
}

function send () {
  getValue = document.getElementById("textbox").value;
    console.log(getValue);
    firebase.database().ref(room_name).push({
        name:user_name,
        message:getValue
    });
    
} 


var speechRec = window.webkitSpeechRecognition;
var rec = new speechRec();
function start1(){
    document.getElementById("ipn2").innerHTML="";
    rec.start();

}
var content = "";
rec.onresult = function(event){
    console.log(event);

     content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("ipn2").innerHTML=content;  

}