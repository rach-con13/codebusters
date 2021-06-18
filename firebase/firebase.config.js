import Firebase from "firebase/app";
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCoSutdmDvP4l55VwNsdzyyCfn2JP7uN-Q",
    authDomain: "codebusters-3e668.firebaseapp.com",
    projectId: "codebusters-3e668",
    storageBucket: "codebusters-3e668.appspot.com",
    messagingSenderId: "449156935951",
    appId: "1:449156935951:web:2a2599866bb1bd5c738e7a"
  };

if(!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}

export default Firebase;



