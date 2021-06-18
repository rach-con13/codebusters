import React from 'react'
import TestimonialCard from "./testimonialCard";
export default function Testimonials(props) {
    

    return (
     <div>
        <h4 className="mt-16 text-heading">Testimonials</h4>
        <div className="grid gap-8 pb-16 sm:grid-cols-3">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
        </div>
    </div>
    )
}
