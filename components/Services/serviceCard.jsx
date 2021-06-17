import React from 'react'

export default function ServiceCard(props) {
    

    return (
      <div className="rounded-sm bg py-10 lg:py-14 mt-2 ">
        <div  className=" w-10/12 lg:w-3/4 mx-auto text-right">
            <p className="text-light text-left font-semibold">
                Developing Websites
                <span className=" block lg:inline lg:ml-4 text-accent font-semibold">
                    $105
                </span>
            </p>
            <button className="text-right mt-4 text-dark font-bold bg-superlight rounded-sm px-4 py-2 md:mt-6  md:text-sm">Learn more</button>
        </div>
      </div>
    )
}
