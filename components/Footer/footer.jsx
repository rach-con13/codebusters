import React from 'react'

export default function Footer(props) {
    

    return (
        <div className="  absolute w-full bg-darker py-8">
            <div className="mx-auto w-10/12 lg:9/12 flex justify-between items-center">
            <h4 className="text-lg font-semibold bg-white text-light">Codebusters</h4>
            <p className="text-base text-light">
            Illustrations by <a className="text-accent font-bold" href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">Icons 8</a> from <a className="text-accent font-bold" href="https://icons8.com/illustrations">Ouch!</a>
            </p>
            </div>
        </div>
    )
}
