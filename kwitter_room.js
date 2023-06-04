const firebaseConfig = {
    apiKey: "AIzaSyCE9J_mx2oc3a6E7wKO7K27TOo7v2WXBxY",
    authDomain: "kwitter-project-1797b.firebaseapp.com",
    projectId: "kwitter-project-1797b",
    storageBucket: "kwitter-project-1797b.appspot.com",
    messagingSenderId: "420355529649",
    appId: "1:420355529649:web:09419b37b6c3394fe57b90",
    measurementId: "G-5NKKR7VLQL"
  };

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}
getData();