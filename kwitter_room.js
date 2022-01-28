
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAkrTWlcx1IkkJ1UofO6NU5gbkcgsq7vWs",
      authDomain: "kwitterreal-38d9e.firebaseapp.com",
      databaseURL: "https://kwitterreal-38d9e-default-rtdb.firebaseio.com",
      projectId: "kwitterreal-38d9e",
      storageBucket: "kwitterreal-38d9e.appspot.com",
      messagingSenderId: "396917940478",
      appId: "1:396917940478:web:9d3e5fab12f0f4109185af",
      measurementId: "G-G875V53DYL"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

Username = localStorage.getItem("Username",Username);
document.getElementById("Username").innerHTML = "Welcome "+Username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("Roomname - " + Room_names)
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"<div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("Username"); 
    window.location = "kwitter_page.html";
}