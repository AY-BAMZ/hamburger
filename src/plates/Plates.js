import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Plates.css'

function Plates() {
    return (
        <div className='plates'>
            <div className='plateSize'>
                <h1>Most Ordered Packages</h1>
                <p>PLACE A QUICK ORDER</p>
                <Row className='plateRow'>
                    <Col md="3" sm="12" className='plateCol'>
                        <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/images_tbc71a.jpg' alt=''/>
                    </Col>
                    <Col md="3" sm="12" className='plateCol'>
                        <h2>Da Rosa Lite</h2>
                        <h3>Packaging is an essential medium for preserving food quality, minimising food wastage and reducing preservatives used in food.</h3>
                        <h4>$56.75</h4>
                    </Col>
                    <Col md="3" sm="12" className='plateCol'>
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/untitled-1-500x500_lppj05.jpg' alt=''/>
                    </Col>
                    <Col md="3" sm="12" className='plateCol'>
                    <h2>Da Rosa Lite</h2>
                        <h3>Packaging is an essential medium for preserving food quality, minimising food wastage and reducing preservatives used in food.</h3>
                        <h4>$56.75</h4>
                    </Col>
                </Row>
                <Row className='plateRow  flex-row-reverse'>
                    <Col md="3" sm="12" className='plateCol'>
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/thanksgiving-dinner-plate-400x400_iekgg9.jpg' alt=''/>
                    </Col>
                    <Col md="3" sm="12" className='plateCol'>
                    <h2>Da Rosa Lite</h2>
                        <h3>Packaging is an essential medium for preserving food quality, minimising food wastage and reducing preservatives used in food.</h3>
                        <h4>$56.75</h4>
                    </Col>
                    <Col md="3" sm="12" className='plateCol'>
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600344103/image_kmig9q.jpg' alt=''/>
                    </Col>
                    <Col md="3" sm="12" className='plateCol'>
                    <h2>Da Rosa Lite</h2>
                        <h3>Packaging is an essential medium for preserving food quality, minimising food wastage and reducing preservatives used in food.</h3>
                        <h4>$56.75</h4>
                    </Col>
                </Row>
                <Row className='plateRow'>
                    <Col md="3" sm="12" className='plateCol'>
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600344104/64474926-top-down-view-on-oblong-shaped-plate-with-steak-dinner-includes-side-servings-of-broccoli-grilled-po_r3xbud.jpg' alt=''/>
                    </Col>
                    <Col md="3" sm="12" className='plateCol'>
                    <h2>Da Rosa Lite</h2>
                        <h3>Packaging is an essential medium for preserving food quality, minimising food wastage and reducing preservatives used in food.</h3>
                        <h4>$56.75</h4>
                    </Col>
                    <Col md="3" sm="12" className='plateCol'>
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600344105/food-plates-wooden-surface-still-life-wallpaper_aq5oql.jpg' alt=''/>
                    </Col>
                    <Col md="3" sm="12" className='plateCol'>
                    <h2>Da Rosa Lite</h2>
                        <h3>Packaging is an essential medium for preserving food quality, minimising food wastage and reducing preservatives used in food.</h3>
                        <h4>$56.75</h4>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}

export default Plates
