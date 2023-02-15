import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const availableTimes = ["11:00", "12:00"]
    const setAvailableTimes = () => null

    render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})