import React from 'react'
import logo from './logo.svg'
import './Welcome.css'

function Welcome() {
    return (
        <div className='welcome'>
            <div className='welcomePoint'>
                <img className='welcomeLogo' src={logo} alt=''/>
                <h1>WELCOME TO <span>ORIGIN</span></h1>
                <h5>The prop transitionAppear was added to ReactCSSTransitionGroup in version 0.13. To maintain backwards compatibility, the default value is set to false.

                However, the default values of transitionEnter and transitionLeave are true so you must specify transitionEnterTimeout and transitionLeaveTimeout by default. If you don’t need either enter or leave animations, pass .</h5>
            </div>
        </div>
    )
}

export default Welcome
