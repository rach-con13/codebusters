import React from 'react'

export default function JoinCard(props) {
    let otherElem = props.first ? "2" : "1" // if section is first, then make the other element 2nd , otherwise make it first
    let firstElem = props.first ? "1" : "2"
    return (
        <div  className="flex flex-col items-center gap-3 mt-6 rounded-sm sm:flex-row sm:gap-8 ">
         
            <div  className="mx-auto" >
                <img className='rounded-sm ' src="/assets/community.png"></img>
            </div>
            <div  className="sm:mt-0" >
                <h4 className="mb-2 font-semibold text-light">Supportive Community</h4>
                <p className="text-xs font-medium leading-relaxed  text-light sm:text-sm">Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam. </p>
            </div>
        </div>
    )
}
