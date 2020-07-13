// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCPGDB1Du_oWTn__xPS9Hdxksi_mmOfvVo",
    authDomain: "contact-form-9b32e.firebaseapp.com",
    databaseURL: "https://contact-form-9b32e.firebaseio.com",
    projectId: "contact-form-9b32e",
    storageBucket: "contact-form-9b32e.appspot.com",
    messagingSenderId: "634182439489",
    appId: "1:634182439489:web:f8fbb9920c57d17cd1acc0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let  contact = getInputVal('contact');
    let message = getInputVal('message');

    //save message

    saveMessage(name, email, contact, message);

    //clear form
    document.getElementById('contactform').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, contact, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        contact: contact,
        message: message
    })
}