
export default function Hero() {
    return (
        
        <div  className=" flex flex-col items-center justify-center w-11/12 mx-auto py-10  sm:gap-7 sm:flex-row ">
          
            <img className="w-4/12 sm:w-3/12  pb-10" src="/assets/ghost.png" alt="wavy ghost" /> 
            <div className="sm:ml-10 text-right">
             <h2 className=" text-center sm:text-left text-4xl sm:text-5xl flex-1 text-superlight font-bold font-staatliches">Code<span className="text-accent">Busters</span></h2>
             <p className="text-lg text-light font-semibold text-center sm:text-left  pt-1">Learn to code and start your career</p>
            <form   className="sm:flex text-center  items-baseline mt-6   ">

            <input className=" w-3/4 sm:w-auto  border-none ml-2 bg-dark px-5 py-2 " placeholder="Email " />
            <button type='submit' className="  bg-gradient-to-r from to-dark mt-3 text-superlight rounded-sm font-bold px-5 py-2">
                Join Mailing List
            </button>
            </form>
           
            </div>
        </div>
     
      
    )
}