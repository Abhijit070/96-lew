function addUser(){
    Username = document.getElementById("Username").value;
    localStorage.setItem("Username",Username);
    console.log(Username);
    window.location="kwitter_room.html";
}