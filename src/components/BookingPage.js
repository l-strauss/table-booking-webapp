import BookingForm from "./BookingForm"

const BookingPage = (props) => {
    return (
        <div className="bookingPage">
            <BookingForm  availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} submitForm={props.submitForm}/>
        </div>
    )
}

export default BookingPage