user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
purpose : "addding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html"
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"
}
// TODO: Add SDKs for Firebase products that you want to use  
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB59BTkJnl2fJcuedPmh1gVzi10UrQTzfs",
  authDomain: "greeting-bot-ifru.firebaseapp.com",
  databaseURL: "https://greeting-bot-ifru-default-rtdb.firebaseio.com",
  projectId: "greeting-bot-ifru",
  storageBucket: "greeting-bot-ifru.appspot.com",
  messagingSenderId: "1001787000320",
  appId: "1:1001787000320:web:9d6c769450a0af7e537ae5"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 function getData() 
 { firebase.database().ref("/").on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) 
     { childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });
      });
     }

     getData();