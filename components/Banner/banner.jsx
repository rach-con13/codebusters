import React from 'react'

export default function Banner(props) {
    

    return (
       <div className="roudned-sm grid grid-cols-2 bg  mt-12">
           <div className="py-24">
                <p className="text-3xl font-bold text-light text-center">What are you waiting for?</p>
           </div>
           <div   className="bg-dark flex items-center ">
               <div  className="w-3/4 mx-auto mt-4 ">
                <p className="text-2xl font-bold text">Join</p>
                <p className="text-4xl font-bold text-light">Code <span className="text-accent">Busters</span></p>
               </div>
           </div>

       </div>
    )
}
