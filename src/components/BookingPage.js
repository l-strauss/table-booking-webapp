import BookingForm from "./BookingForm"

const BookingPage = (props) => {
    return (
        <div className="bookingPage">
            <h3>Make a reservation</h3>
            <BookingForm  availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} submitForm={props.submitForm}/>
        </div>
    )
}

export default BookingPage