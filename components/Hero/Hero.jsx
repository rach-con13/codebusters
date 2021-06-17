
export default function Hero() {
    return (
        
        <div    className="flex items-center justify-center w-10/12 mx-auto py-10 gap-7">
          
            <img className="w-3/12 pb-10" src="/assets/ghost.png" alt="wavy ghost" /> 
            <div  className="ml-10">
             <h2 className="text-5xl flex-1 text-superlight font-bold font-staatliches">Code<span className="text-accent">Busters</span></h2>
             <p className="text-lg text-light font-semibold text-center pt-1">Learn to code and start your career</p>
            <button className="bg-superlight text-dark rounded-sm font-bold px-5 py-2">
                Learn to Code
            </button>
            </div>
        </div>
     
        // <div   className="relative h-60">
        //     {/* <div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        //         <h2 className=" font-staatliches  text-4xl  text-superlight font-bold text-center">Code<span className="text-accent">Busters</span></h2>
        //         <p className="text-lg text-light font-semibold text-center pt-1">Learn to code and start your career</p>
        //      </div> */}
        //  <div style={{border:'3px solid red'}} className="flex items-center gap-4">
        //     <div className="flex-1">
        //       {/* <img style={{width:"40%"}} src="/assets/ghost.png" alt="wavy ghost" /> */}

        //     </div>
        //     <h2 className="text-3xl flex-1 text-superlight font-bold">Code<span className="text-accent">Busters</span></h2>
        //     </div> 
            
        // </div>
    )
}