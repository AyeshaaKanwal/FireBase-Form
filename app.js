import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendEmailVerification  } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // const uid = user.uid;
    console.log("user", user)
  } else {
    console.log("user not existed")
    // User is signed out
    // ...
  }
});



document.addEventListener("DOMContentLoaded", () => {
  // Aapka pura code yahan paste karein
  console.log("DOM is fully loaded!");

  let signup = () => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (!email || !password) {
      console.error("Email or password element not found!");
      return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user', user);
        alert('SignUp Successful');
      })
      .catch((error) => {
        console.log('error', error.message);
      });
  };

  let signupbtn = document.getElementById("signupbtn");
  if (signupbtn) {
    signupbtn.addEventListener('click', signup);
  } else {
    console.error("Signup button not found!");
  }

  // Baqi code yahan likhein...

  let signin = () => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
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
  if (signinbtn) {
    signinbtn.addEventListener('click', signin);
  } else {
    console.error("Signin button not found!");
  }
  
  
  
    // Log Out Functions
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
    signoutbtn.addEventListener('click', signout);
  
    // email verification functions
    let verifiedbtn = document.getElementById("verification-email");
    verifiedbtn.addEventListener('click', () => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          // ...
          console.log('sent')
        });
      });



       //  Rememberr me functions
      // Reference to the checkbox and input fields
      const rememberMeCheckbox = document.getElementById("rememberMe");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
    
      // Check if user credentials are saved in localStorage
      if (localStorage.getItem("rememberMe") === "true") {
        emailInput.value = localStorage.getItem("email");
        passwordInput.value = localStorage.getItem("password");
        rememberMeCheckbox.checked = true;
      }
    
      // Event listener for the checkbox
      rememberMeCheckbox.addEventListener("change", () => {
        if (rememberMeCheckbox.checked) {
          // Save credentials in localStorage
          localStorage.setItem("rememberMe", "true");
          localStorage.setItem("email", emailInput.value);
          localStorage.setItem("password", passwordInput.value);
        } else {
          // Clear credentials from localStorage
          localStorage.setItem("rememberMe", "false");
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }
      });
    });


 

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
    