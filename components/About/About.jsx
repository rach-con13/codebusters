import clsx from 'clsx'
import React from 'react'


import styles from "./about.module.css";

export default function About(props) {
    

    return (
        <div  className= {` ${styles.aboutSection} lg:w-3/4 sm:w-10/12 sm:mt-32`}>
            <div className="w-11/12 mx-auto sm:w-3/4 md:w-full">
                <h4 className="text-heading md:text-2xl sm:text-lg">What is Codebusters about?</h4>
                <p className={`${styles.sectionBody}  sm:w-11/12 md:w-full`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
            </div>
        </div>
    )
}
