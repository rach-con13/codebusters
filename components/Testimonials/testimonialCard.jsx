import React from 'react'

export default function TestimonialCard(props) {
    

    return (
        <div className="mt-4" >
            <header  className="text-left ">
                <div className="flex items-center sm:flex lg:flex md:block ">
                  <div className="block p-5 mr-3 rounded-full bg-superlight sm:block md:hidden lg:block" />
                  <div>
                    <h4 className="text-heading">Rachael Concessio</h4>
                    <p className="text-sm font-bold text-accent">Student</p>
                  </div>
                </div>
                

            </header>
            <div >
                <p className="mt-4 text-sm font-medium leading-2 text-light">
                Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                </p>
            </div>
        </div>
    )
}
