import React from 'react'

export default function JoinCard(props) {
    let elementOrder = props.order == "1" ? "2" : "1";

    return (
        <div  className="rounded-sm  mt-4 items-center flex flex-col sm:flex-row  gap-3 sm:gap-16 ">
         
            <div  className={`order-${props.order} mx-auto  `}  >
                <img className=' rounded-sm ' src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1"></img>
            </div>
            <div  className={`order-${elementOrder}  sm:mt-0 `} >
                <p className="text-light items-center text-xs   sm:text-sm  font-medium leading-relaxed">Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam. </p>
            </div>
        </div>
    )
}
