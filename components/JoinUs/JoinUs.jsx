import React from 'react'
import JoinCard from './JoinCard'

export default function JoinUs(props) {
    

    return (
        <div className=" sm:w-9/12 md:w-10/12 lg:w-3/4 mx-auto">
            <h4 className="font-bold text-lg text-superlight mt-8 sm:mt-16">Join Us</h4>
            <JoinCard  first />
            <JoinCard />
            <JoinCard  first />
        </div>
    )
}
