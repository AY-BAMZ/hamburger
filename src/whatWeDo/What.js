import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './What.css'


function What() {
    return (
        <div className='whatWeDo'>
            <Row className='what'>
                <Col md={6} className="whatCol">
                    <h1>What do we actually cook?</h1>
                    <h5>
                    Preparing food with heat or fire is an activity unique to humans. It may have started around 2 million years ago, though archaeological evidence for it reaches no more than 1 million years ago Preparing food with heat or fire is an activity unique to humans. It may have started around 2 million years ago.
                    </h5>
                </Col>
                <Col md={6} className="whatCol">
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600314471/pexels-nadezhda-moryak-4409250_bw3ame.jpg' alt='' />
                </Col>
            </Row>
        </div>
    )
}

export default What
