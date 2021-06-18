import React from 'react'

export default function ServiceCard(props) {
    

    return (
      <div className="py-4 rounded-sm sm:mt-2 ">
      <div  className="mx-auto ">
         <img src={props.img}/>
         <div className="flex items-center justify-between lg:flex md:block">
          <p  className="font-semibold text-light">
              Developing Websites
             
          </p>
          <p className="text-2xl font-semibold lg:ml-4 text-accent md:text-xl lg:text-2xl">
                  $105
              </p>
          </div>
          <p className="mt-1 mb-3 text-sm text-left text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod alors.
          </p>
          <button  className="w-full px-4 py-4 font-bold rounded-md bg text-light sm:w-2/4 md:w-full md:mt-0 md:text-sm lg:w-2/4">Learn more</button>
      </div>
    </div>
    )
}
