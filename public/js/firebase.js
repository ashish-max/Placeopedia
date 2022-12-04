let firebaseConfig = {
    // firebase credentials
    apiKey: "AIzaSyAjqzolKbFnUKr-19MB-R0K8QiLRkzMRlE",
    authDomain: "placeopedia-9a0a9.firebaseapp.com",
    projectId: "placeopedia-9a0a9",
    storageBucket: "placeopedia-9a0a9.appspot.com",
    messagingSenderId: "364854424732",
    appId: "1:364854424732:web:2975656711e6c3df042959",
    measurementId: "G-DT6QDC468D" 
     
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();