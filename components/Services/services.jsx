import React from 'react'
import ServiceCard from './serviceCard'

export default function Services(props) {
    

    return (
    <div>
    
        <h4 className="text-heading sm:mt-14">Our Programs</h4>
        <div  className="grid gap-8 sm:gap-16 sm:grid-cols-3">
            <ServiceCard img="/assets/website.png" />
            <ServiceCard img="/assets/website.png"/>
            <ServiceCard img="/assets/website.png" />
        </div>
    </div>
    )
}
