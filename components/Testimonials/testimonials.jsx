import React from 'react'
import TestimonialCard from "./testimonialCard";
export default function Testimonials(props) {
    

    return (
     <div>
        <h4 className="font-bold text-lg text-light mt-16">Testimonials</h4>
        <div className="grid sm:grid-cols-3 gap-8 pb-16">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
        </div>
    </div>
    )
}
