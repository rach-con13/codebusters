import React from 'react'
import JoinCard from './JoinCard'

export default function JoinUs(props) {
    

    return (
        <div className="mx-auto sm:w-9/12 md:w-10/12 lg:w-3/4">
            <h4 className="mt-8 text-heading sm:mt-16">Join Us</h4>
            <JoinCard  first />
            <JoinCard />
            <JoinCard  first />
        </div>
    )
}
