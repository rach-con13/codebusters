import clsx from "clsx"
import Link from "next/link";
import styles from "./auth.module.css";

const ghostImage = clsx('w-4/12 mx-auto mb-2');
export default function AuthForm(props) {

    return (
        <div >
         <div className={styles.fixedContainer} /> 

         <div  className="relative z-20 h-screen">
            <div className={`absolute w-4/12 transform top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-right`}>
                <img src="/assets/ghost.png"  className="w-4/12 mx-auto mb-2" />
                <h4 className="mb-8 text-3xl font-bold text-center text-light ">{props.name}</h4>
                <form onSubmit={props.submit} className="mt-3 text-light">
                {props.fields.map((field,index) => {
                    return (
                        <div className="mt-3 text-left" key={index}>
                            <label htmlFor={field.name} className="block py-2 text-sm font-medium text-light ">{field.label}</label>
                            <input onChange={props.change} value={props.value} name={field.name} type={field.type} className="w-full inputField" />
                        </div>
                    )
                })}           
           
                    <button type='submit' className="formButton">{props.name}</button>
              
                </form>
             </div>
         </div>
             
     

        </div>
    )
}
