import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite, faCheese, faCookieBite, faHamburger, faStroopwafel, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import './New.css'

function New() {
    return (
        <div>
            <div className='new'>
            <h1>Discover</h1>
            <p>OUR NEW MENU</p>
            <Row className='newRow'>
                <Col md={6} className='newCol'>
                    <div className='newProduct'>
                        <FontAwesomeIcon className="foodIcon" icon={faCookieBite} />
                        <div className='aboutNewProduct'>
                            <h1>Ewa Agoyin With Agege Bread</h1>
                            <p>This is a premium ewa that have been making the whole south-west regoin going sane. it is MAD OOO</p>
                        </div>
                    </div>
                    <div className='newProduct'>
                        <FontAwesomeIcon className="foodIcon" icon={faStroopwafel} />
                        <div className='aboutNewProduct'>
                            <h1>Ewa Agoyin With Agege Bread</h1>
                            <p>This is a premium ewa that have been making the whole south-west regoin going sane. it is MAD OOO</p>
                        </div>
                    </div>
                    <div className='newProduct'>
                        <FontAwesomeIcon className="foodIcon" icon={faDrumstickBite} />
                        <div className='aboutNewProduct'>
                            <h1>Ewa Agoyin With Agege Bread</h1>
                            <p>This is a premium ewa that have been making the whole south-west regoin going sane. it is MAD OOO</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='newCol'>
                    <div className='newProduct'>
                        <FontAwesomeIcon className="foodIcon" icon={faCheese} />
                        <div className='aboutNewProduct'>
                            <h1>Ewa Agoyin With Agege Bread</h1>
                            <p>This is a premium ewa that have been making the whole south-west regoin going sane. it is MAD OOO</p>
                        </div>
                    </div>
                    <div className='newProduct'>
                        <FontAwesomeIcon className="foodIcon" icon={faPizzaSlice} />
                        <div className='aboutNewProduct'>
                            <h1>Ewa Agoyin With Agege Bread</h1>
                            <p>This is a premium ewa that have been making the whole south-west regoin going sane. it is MAD OOO</p>
                        </div>
                    </div>
                    <div className='newProduct'>
                        <FontAwesomeIcon className="foodIcon" icon={faHamburger} />
                        <div className='aboutNewProduct'>
                            <h1>Ewa Agoyin With Agege Bread</h1>
                            <p>This is a premium ewa that have been making the whole south-west regoin going sane. it is MAD OOO</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className='imago'>
        <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600425941/69242897-set-of-various-plates-of-food-isolated-on-white-background_ukvmxb.jpg' alt='' />
    </div>
        </div>
    )
}

export default New
