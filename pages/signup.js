
import { useFormik } from "formik";
import Head from "next/head";
import { auth } from "../firebase/firebase.config";
import AuthForm from "../components/Auth/AuthForm";
import { createUser } from "../firebase/functions";


export default function SignUp() {

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit:values => {
            let newUser = createUser(values.email,values.password);
            formik.resetForm();
        }
    })
    // input fields 
    const signupFields = [{
        name:'email',
        label:'Email',
        type:'email',
        value:formik.values.email
    },{
        name:'password',
        label:'Password',
        type:"password",
        value:formik.values.password
    },{
        name:'confirmPass',
        label:'Confirm Password',
        type:"password",
        value:formik.values.confirmPass
    }]

    const SignUp = () => {
        
    }
    
    
    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&family=Staatliches&display=swap" rel="stylesheet" />
         </Head>
        <div className="font-raleway">
       
            <AuthForm name='Sign Up'  change={formik.handleChange} submit={formik.handleSubmit} fields={signupFields} />

        </div>
        </>
    )
}