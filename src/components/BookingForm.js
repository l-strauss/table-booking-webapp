import React, {useState, useEffect} from "react"

const BookingForm = (props) => {
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [number, setNumber] = useState()
    const [occasion, setOccasion] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()

        props.submitForm(e.target.value)

    }

    return (
        <form className="bookingForm" onSubmit={submitHandler}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(e) => {setDate(e.target.value); props.setAvailableTimes({date: e.target.value})}}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={(e) => setTime(e.target.value)}>
                {props.availableTimes.map(time => <option key={time}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setNumber(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    )
}

export default BookingForm