import React from 'react'

export default function TestimonialCard(props) {
    

    return (
        <div className="mt-4" >
            <header  className="text-left  ">
                <div className="flex sm:flex lg:flex  md:block items-center ">
                  <div className="rounded-full bg-superlight p-5 mr-3  sm:block block md:hidden lg:block" />
                  <div>
                    <h4 className="text-superlight font-bold text-lg">Rachael Concessio</h4>
                    <p className="text-accent font-bold text-sm">Student</p>
                  </div>
                </div>
                

            </header>
            <div >
                <p className="leading-2  text-light mt-4 text-sm font-medium">
                Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                </p>
            </div>
        </div>
    )
}
