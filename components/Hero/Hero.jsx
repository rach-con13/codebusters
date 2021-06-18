import styles from "./hero.module.css";
export default function Hero() {
    return (
        
        <div  className={`w-11/12 py-10 mx-auto ${styles.flexContainer} `}>
          
            <img className="w-4/12 pb-10 sm:w-3/12" src="/assets/ghost.png" alt="wavy ghost" /> 
            <div className="text-right sm:ml-10">
             <h2 className={styles.heroTitle}>Code<span className="text-accent">Busters</span></h2>
             <p className={styles.heroSubtitle}>Learn to code and start your career</p>
            <form   className="items-baseline mt-6 text-center sm:flex ">

            <input className="inputField sm:w-auto " placeholder="Email " />
            <button type='submit' className="formButton">
                Join Mailing List
            </button>
            </form>
           
            </div>
        </div>
     
      
    )
}