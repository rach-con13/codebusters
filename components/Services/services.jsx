import React from 'react'
import Card from '../Card/Card'

export default function Services(props) {
    

    return (
    <div >
        <h4 className="font-bold text-lg text-light mt-16">Our Programs</h4>
        <div className="grid sm:grid-cols-3 gap-3">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    )
}
