//YOUR FIREBASE LINKS
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

    Username = localStorage.getItem("Username");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    var name = message_data['name'];
    message = message_data['message'];
    likes = message_data ['likes'];
   name_with_tag = "<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
   message_with_tag = "<h4 class='message_h4'>"+ message+"</h4>";
   like_with_tag = "<button class='btn btn-danger' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>"
   span_with_tag = "<span class='glyphicon glyphicon-thumbs up'>Like"+likes+"</span></button>";

   row = name_with_tag+message_with_tag+like_with_tag+span_with_tag;
   document.getElementById("output").innerHTML += row
//End code
      } });  }); }
getData();

function send(){
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
      name : Username,
      message: msg,
      likes : 0
 });
 document.getElementById("msg").value = "";
}

function updateLike(message_id){
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_like=Number(likes)+1
      console.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({
         likes : update_like   
       });


}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("Username"); 
      window.location.replace ("index.html");
  }


