import React from 'react'
import './Foods.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faHotdog, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'


function Foods() {
    return (
        <div className='foods'>
            <Row className='foodRow' >
                <Col className='foodCol' md={4}>
                    <div className='foodTypes'>
                        <FontAwesomeIcon className="foodIcon" icon={faHamburger} />
                        <FontAwesomeIcon className="foodIcon" icon={faHamburger} />
                        <FontAwesomeIcon className="foodIcon" icon={faHamburger} />
                    </div>
                    <h1>Hamburger The Flux</h1>
                    <h3>This is the perfect way for those who do not like beans to enjoy it. I can tell you that yours truly does not like beans yet, I can never get enough of Ewa Agoyin. I don't know what it is about it that makes it taste so good.</h3>
                </Col>
                <Col className='foodCol' md={4}>
                    <div className='foodTypes'>
                        <FontAwesomeIcon className="foodIcon" icon={faHotdog} />
                        <FontAwesomeIcon className="foodIcon" icon={faHotdog} />
                        <FontAwesomeIcon className="foodIcon" icon={faHotdog} />
                    </div>
                    <h1>Hotdog The Flux</h1>
                    <h3>This is the perfect way for those who do not like beans to enjoy it. I can tell you that yours truly does not like beans yet, I can never get enough of Ewa Agoyin. I don't know what it is about it that makes it taste so good.</h3>
                </Col>
                <Col className='foodCol' md={4}>
                    <div className='foodTypes'>
                        <FontAwesomeIcon className="foodIcon" icon={faPizzaSlice} />
                        <FontAwesomeIcon className="foodIcon" icon={faPizzaSlice} />
                        <FontAwesomeIcon className="foodIcon" icon={faPizzaSlice} />
                    </div>
                    <h1>Pizza LaPasta The Flux</h1>
                    <h3>This is the perfect way for those who do not like beans to enjoy it. I can tell you that yours truly does not like beans yet, I can never get enough of Ewa Agoyin. I don't know what it is about it that makes it taste so good.</h3>
                </Col>
            </Row>
        </div>
    )
}

export default Foods
