import React from 'react'
import './Footer.css'
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div className='footer'>
            <Row className='footerRow'>
                <Col md={6} className='footerBigCol'>
                    <h1>ABOUT OUR C. E. O.</h1>
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1600703274/Miracle-Igbokwe_s4nwyh.jpg' alt='' />
                    <p>Mr Adegbohungbe Ayobami Paul is a man of great attribut. Due to his passion for food, he decided to save many souls so that they won't die of hunger. his legacy still lives on and he has impacted many souls by his unimaginable set of suppliments. He fucking like food due to the fact that he's single, and food has been his only babe.</p>
                </Col>
                <Col md={2} className='footerCol'>
                    <h1>FOODS</h1>
                    <ul>
                        <li>Local Foods</li>
                        <li>Foreign Foods</li>
                        <li>New Discovery</li>
                        <li>Most Order</li>
                        <li>Pro Recomendation</li>
                        <li>Fat Foods</li>
                        <li>Body Level</li>
                    </ul>
                </Col>
                <Col md={2} className='footerCol'>
                    <h1>CUSTOMER CARE</h1>
                    <ul>
                        <li>Contact</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Whatsapp</li>
                        <li>Instagram</li>
                        <li>Tiktok</li>
                    </ul>
                </Col>
                <Col md={2} className='footerCol'>
                    <h1>CONTACT HERE</h1>
                    <label>Your Name</label>
                    <input type='text' />
                    <label>Your Email Address</label>
                    <input type='text' />
                    <label>Your Message</label>
                    <textarea type='text' placeholder='your message'/>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
