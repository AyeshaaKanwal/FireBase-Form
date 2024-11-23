import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "./firebase.js";

// const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // const uid = user.uid;
    console.log("user", user)
    alert('already login')
  } else {
    console.log("user not existed")
    // User is signed out
    // ...
  }
});


let signup = () => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

   createUserWithEmailAndPassword(auth, email.value, password.value)// auth upper ase agay or email,p.w user se ayega yeh aik functiion hai create user with... firebase ka
  .then((userCredential) => { // yeh function return krrha hai promis jisko hum then or cath derahy agar line no 4 sahi chlgyi to output me then milega warna catch.
    // Signed up 
    const user = userCredential.user;
    console.log('user', user);
    alert('SignUp Successfull');
  })
  .then(()=>{

  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log('error', error.message)
  });

  
}

let signupbtn = document.getElementById("signupbtn");
signupbtn.addEventListener('click', signup)

let signin = () => {
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user', user)
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log('error', error.message)
  });
}

  let signinbtn = document.getElementById("signinbtn");
  signinbtn.addEventListener('click', signin)

let signout = () =>{
signOut(auth).then(() => {
    // Sign-out successful.
    console.log('signout succesful')
    alert('LogOut')
  }).catch((error) => {
    // An error happened.
  }); 
}


 let signoutbtn = document.getElementById("signoutbtn");
signoutbtn.addEventListener('click', signout)

// function validateEmail() {
//     var addressIsLegal = true;
//     var eEntered = document.getElementById("email").value;
//      if (eEntered.indexOf(" ") !== -1) {
//     addressIsLegal = false;
//      }
//      if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
//      addressIsLegal = false;
//      }
//      if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 || eEntered.indexOf(".") > eEntered.length - 3) {
//      addressIsLegal = false;
//      }
//      if (addressIsLegal === false) {
//      alert("Please correct email address");
//      return false;
//      }
//     }
    