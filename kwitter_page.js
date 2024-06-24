var firebaseConfig = {
    apiKey: "AIzaSyB59BTkJnl2fJcuedPmh1gVzi10UrQTzfs",
    authDomain: "greeting-bot-ifru.firebaseapp.com",
    databaseURL: "https://greeting-bot-ifru-default-rtdb.firebaseio.com",
    projectId: "greeting-bot-ifru",
    storageBucket: "greeting-bot-ifru.appspot.com",
    messagingSenderId: "1001787000320",
    appId: "1:1001787000320:web:9d6c769450a0af7e537ae5"
  };
  
   firebase.initializeApp(firebaseConfig);

   function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace = "index.html"
  }