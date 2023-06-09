import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Error404() {
  return (
    <>
    <div id='notfound'>
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>
            </div>
            <h2> WE ARE SORRY , PAGE NOT FOUND!</h2>
            <p>
                THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME 
                CHANGED OR IS TEMPORARILY UNAVALABLE.
            </p>
            <NavLink to="/" >back to homepage</NavLink>
        </div>
    </div>
    </>
  )
}
