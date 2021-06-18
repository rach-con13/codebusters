import { useFormik } from "formik";
import Head from "next/head";
import AuthForm from "../components/Auth/AuthForm";
import { loginUser } from "../firebase/functions";





export default function Login() {

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit:values => {
            let newUser = loginUser(values.email,values.password);
            console.log(newUser);
            formik.resetForm();
        }
    })
    

    const loginFields = [{
        name:'email',
        label:'Email',
        value:formik.values.email,
        type:'email'
    },{
        name:'password',
        label:'Password',
        value:formik.values.password,
        type:"password"
    }]
    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&family=Staatliches&display=swap" rel="stylesheet" />
         </Head>
        <div className="font-raleway">
            <AuthForm name='Login' change={formik.handleChange} submit={formik.handleSubmit} fields={loginFields}  />
        </div>
        </>
    )
}