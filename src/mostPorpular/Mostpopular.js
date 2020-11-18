import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Mostpopular.css'

function Mostpopular() {
    return (
        <div className='mostPoplular'>
            <h1>Discover</h1>
            <p>OUR NEW MENU</p>
            <Row className='mostRow'>
                <Col md={3} className='mostCol'>
                    <div className='colImage'>
                        <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600344105/food-plates-wooden-surface-still-life-wallpaper_aq5oql.jpg' alt='' />
                    </div>
                    <h4>27,931 Orders as at 20/09/2020</h4>
                    <h3>Efo Riro De La Pasta</h3>
                    <p>This is a premium ewa that have been making the whole south-west regoin going sane.</p>
                    <div><h2>READ MORE</h2></div>
                </Col>
                <Col md={3} className='mostCol'>
                    <div className='colImage'>
                        <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600344104/64474926-top-down-view-on-oblong-shaped-plate-with-steak-dinner-includes-side-servings-of-broccoli-grilled-po_r3xbud.jpg' alt='' />
                    </div>
                    <h4>27,931 Orders as at 20/09/2020</h4>
                    <h3>Efo Riro De La Pasta</h3>
                    <p>This is a premium ewa that have been making the whole south-west regoin going sane.</p>
                    <h2>READ MORE</h2>
                </Col>
                <Col md={3} className='mostCol'>
                    <div className='colImage'>
                        <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/thanksgiving-dinner-plate-400x400_iekgg9.jpg' alt='' />
                    </div>
                    <h4>27,931 Orders as at 20/09/2020</h4>
                    <h3>Efo Riro De La Pasta</h3>
                    <p>This is a premium ewa that have been making the whole south-west regoin going sane.</p>
                    <h2>READ MORE</h2>
                </Col>
            </Row>
        </div>
    )
}

export default Mostpopular
