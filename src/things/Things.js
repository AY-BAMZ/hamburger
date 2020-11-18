import React from 'react'
import './Things.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'

function Things() {
    return (
        <div>
            <div className='things'>
                <h1>We like to keep things simple</h1>
                <p>The number of grid columns can be modified via Sass variables. $grid-columns is used to generate the widths (in percent) of each individual column while $grid-gutter-width allows breakpoint-specific widths that are divided evenly across padding-left and padding-right for the column gutters.</p>
                <div>
                <FontAwesomeIcon className="microcip" icon={faMicrochip} />
                <FontAwesomeIcon className="microcip" icon={faMicrochip} />
                <FontAwesomeIcon className="microcip" icon={faMicrochip} />
                </div>
            </div>
            <div className='thingsSpace'></div>
        </div>
    )
}

export default Things
