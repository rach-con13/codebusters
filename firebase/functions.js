import Firebase from "./firebase.config";
import Router from "next/router";
// login user
export const createUser = (email,password) => {
    
    
    Firebase.auth().createUserWithEmailAndPassword(email,password).then((
        userCredential => {
            let user = userCredential.user;
            console.log(user);
            return {user,error:false};
        }
    )).catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage);
        return {code:errorCode,message:errorMessage,error:true}
    })

    Router.push('/login');
}

export const loginUser = (email,password) => {
      
    Firebase.auth().signInWithEmailAndPassword(email,password).then((
        userCredential => {
            let user = userCredential.user;
            console.log(user);
            return {user,error:false};
        }
    )).catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage);
        return {code:errorCode,message:errorMessage,error:true}
    })

    Router.push('/');
}