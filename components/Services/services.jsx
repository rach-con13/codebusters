import React from 'react'
import Card from '../Card/Card'

export default function Services(props) {
    

    return (
    <div  >
        <h4 className="font-bold text-lg text-light  sm:mt-14">Our Programs</h4>
        <div  className="grid sm:grid-cols-3 gap-8">
            <Card img="/assets/website.png" />
            <Card img="/assets/website.png"/>
            <Card img="/assets/website.png" />
        </div>
    </div>
    )
}
