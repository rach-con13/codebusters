// login user
const createUser = (email,password) => {
    firebase.auth().createUserWithEmailAndPassword(email,password).then((
        userCredential => {
            let user = userCredential.user;
            console.log(user);
        }
    )).catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
    })
}

const loginUser = (email,password) => {
    
}