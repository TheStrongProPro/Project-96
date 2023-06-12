
var firebaseConfig = {
    apiKey: "AIzaSyAdxg4F2GYApewddFmMMtsRaOQ7Pw0Wboc",

    authDomain: "letschat-dfe1d.firebaseapp.com",

    databaseURL: "https://letschat-dfe1d-default-rtdb.firebaseio.com",

    projectId: "letschat-dfe1d",

    storageBucket: "letschat-dfe1d.appspot.com",

    messagingSenderId: "699140663279",

    appId: "1:699140663279:web:999e5e2f37551705a9b81a",
};

firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");
function getData() {
    firebase
        .database()
        .ref("/" + room_name)
        .on("value", function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                    firebase_message_id = childKey;
                    message_data = childData;
                    //Start code

                    //End code
                }
            });
        });
}
getData();

function logout() {
    localStorage.removeItem('user_name')
    localStorage.removeItem('room_name')
    window.location = 'index.html'
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0,
    });
    document.getElementById("msg").value = "";
}
