import React from 'react'

export default function Card(props) {
    

    return (
      <div className="rounded-sm  py-4  sm:mt-2 ">
        <div  className="mx-auto  ">
           <img src={props.img}/>
           <div className="lg:flex  flex md:block justify-between items-baseline">
            <p  className="text-light  font-semibold">
                Developing Websites
               
            </p>
            <p className="  lg:ml-4 text-accent font-semibold md:text-xl  lg:text-2xl text-2xl">
                    $105
                </p>
            </div>
            <p className="mt-2 mb-3 text-left  text-sm text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod alors.
            </p>
            <button  className="bg-superlight w-full  text-darker font-bold sm:w-2/4 md:w-full rounded-sm px-4 py-2 md:mt-2  md:text-sm">Learn more</button>
        </div>
      </div>
    )
}
