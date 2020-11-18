import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons'
import D1 from './facebook.svg'
import D2 from './instagram.svg'
import D3 from './twitter.svg'
import D4 from './whatsapp.svg'
import D5 from './facebook.svg'
import './Social.css'

function Social() {
    return (
        <div className='social'>
            <div className='socialMedia'>
            <FontAwesomeIcon className="Icon" icon={faPeopleArrows} />
            <h3>This is the perfect way for those who do not like beans to enjoy it. I can tell you that yours truly does not like beans yet, I can never get enough of Ewa Agoyin. I don't know what it is about it that makes it taste so good. I don't know what it is about it that makes it taste so good.</h3>
            <p>Origin Foods</p>
            <div className='socialIcons'>
            <img src={D1} alt=''/>
            <img src={D2} alt=''/>
            <img src={D3} alt=''/>
            <img src={D4} alt=''/>
            <img src={D5} alt=''/>
            </div>
            </div>
        </div>
    )
}

export default Social
