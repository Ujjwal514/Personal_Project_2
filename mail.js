const firebaseConfig = {
    apiKey: "AIzaSyALbqF-T8ZP5KF6xfKwO9BF2s7i6twCSp0",
    authDomain: "resturent-8898e.firebaseapp.com",
    databaseURL: "https://resturent-8898e-default-rtdb.firebaseio.com",
    projectId: "resturent-8898e",
    storageBucket: "resturent-8898e.appspot.com",
    messagingSenderId: "475722370162",
    appId: "1:475722370162:web:c52a5972f2b482fc92c6eb"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("Your Name");
    var emailid = getElementVal("E-Mail");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };