import React, { Component } from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import './Dates.css'
import { Row, Col } from 'react-bootstrap';

class Dates extends Component {
    constructor(props){
        super(props);
        this.state ={
            stateDate: null,
            endDate: null
        }
    }
    render() {
        return (
            <div className='dates'>
                <h1>BOOK HERE</h1>
                <Row className='datesRow'>
                <Col md={4} className='datesCol'>
                        <label>How many people?</label>
                        <div>
                        <select name="Time" id="Time">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        </div>
                    </Col>                    
                    <Col md={4} className='datesCol'>
                    <label>Your date here</label>
                        <div>
                        <SingleDatePicker c
                        date={this.state.date} // momentPropTypes.momentObj or null
                        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        id="your_unique_id" // PropTypes.string.isRequired,
                        />
                        </div>
                    </Col>
                    <Col md={4} className='datesCol'>
                        <label>Your time?</label>
                        <div>
                        <select name="People" id="People">
                            <option value="7">7:00am</option>
                            <option value="8">8:00am</option>
                            <option value="9">9:00am</option>
                            <option value="10">10:00am</option>
                            <option value="11">11:00am</option>
                            <option value="12">12:00pm</option>
                            <option value="13">1:00pm</option>
                            <option value="14">2:00pm</option>
                            <option value="15">3:00pm</option>
                            <option value="16">4:00pm</option>
                            <option value="17">5:00pm</option>
                            <option value="18">6:00pm</option>
                            <option value="19">7:00pm</option>
                            <option value="20">8:00pm</option>
                            <option value="21">9:00pm</option>
                        </select>
                        </div>
                    </Col>
                    <Col md={4} className='datesCol'>
                        <label>Your full name here</label>
                        <div>
                        <input placeholder='your name' />
                        </div>
                    </Col>
                    <Col md={4} className='datesCol'>
                        <label>Your email here</label>
                        <div>
                        <input placeholder='your email address' />
                        </div>
                    </Col>
                    <Col md={4} className='datesCol'>
                        <label>Your phone no here</label>
                        <div>
                        <input placeholder='your phone no' />
                        </div>
                    </Col>
                </Row>
                <button type='submit'>PLACE ORDER</button>
            </div>
        )
    }
}

export default Dates
