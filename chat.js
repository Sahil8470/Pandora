// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgE-29U87v3F11ZiC1ggAwI6F1SpyyAHs",
    authDomain: "pandora-d4451.firebaseapp.com",
    projectId: "pandora-d4451",
    storageBucket: "pandora-d4451.appspot.com",
    messagingSenderId: "1050122304878",
    appId: "1:1050122304878:web:06740edb2fd0913240157f",
    databaseURL: "https://pandora-d4451-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const username = prompt("Please Tell Us Your Name");

// Listening the submit event
document.getElementById("message-form").addEventListener("submit", sendMessage);

function sendMessage(e) {
    e.preventDefault();

    // get values to be submitted
    const timestamp = Date.now();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    // clear the input box
    messageInput.value = "";

    //auto scroll to bottom
    document.getElementById("messages").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
    });

    // create db collection and send in the data
    firebase
        .database()
        .ref("messages/" + timestamp)
        .set({
            username,
            message,
        });
    // set(ref(database, "messages/" + timestamp), {
    //     username,
    //     message,
    // });
}

// Receiving messages
const fetchChat = firebase.database().ref("messages/");

fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const message = `<li class=${
        username === messages.username ? "sent" : "receive"
    }><span>${messages.username}: </span>${messages.message}</li>`;
    // append the message on the page
    document.getElementById("messages").innerHTML += message;
});
