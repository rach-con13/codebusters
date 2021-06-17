import React from 'react'

export default function JoinCard(props) {
    let otherElem = props.first ? "2" : "1" // if section is first, then make the other element 2nd , otherwise make it first
    let firstElem = props.first ? "1" : "2"
    return (
        <div  className="rounded-sm  mt-6 items-center flex flex-col sm:flex-row  gap-3 sm:gap-8 ">
         
            <div  className={` mx-auto sm:order-${otherElem} `}  >
                <img className=' rounded-sm ' src="/assets/community.png"></img>
            </div>
            <div  className={` sm:mt-0 sm:order-${firstElem}`} >
                <h4 className="text-light font-semibold mb-2">Supportive Community</h4>
                <p className="text-light items-center text-xs  sm:text-sm  font-medium leading-relaxed">Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam. </p>
            </div>
        </div>
    )
}
