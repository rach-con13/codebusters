import React from 'react'
import JoinCard from './JoinCard'

export default function JoinUs(props) {
    

    return (
        <div className=" sm:w-9/12 mx-auto">
            <h4 className="font-bold text-lg text-light mt-16">Join Us</h4>
            <JoinCard order='1' />
            <JoinCard order='2' />
            <JoinCard order='1' />
        </div>
    )
}
