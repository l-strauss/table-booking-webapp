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

    const [isValid, setIsValid] = useState(false);

    function handleValidityChange(event) {
        setIsValid(event.currentTarget.form.checkValidity());
      }

    return (
        <form className="bookingForm" onSubmit={submitHandler}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(e) => {setDate(e.target.value); props.setAvailableTimes({date: e.target.value}); handleValidityChange(e)}} required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={(e) => {setTime(e.target.value); handleValidityChange(e)}} required>
                {props.availableTimes.map(time => <option key={time}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" min="1" max="10" id="guests" onChange={(e) => {setNumber(e.target.value); handleValidityChange(e)}} required/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input className="submit-btn" type="submit" value="Reservation" disabled={!isValid}/>
        </form>
    )
}

export default BookingForm