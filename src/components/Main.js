import React, {useReducer, useState, useEffect} from "react"
import {Routes, Route, useNavigate} from "react-router-dom"
import HomePage from "./HomePage"
import BookingPage from "./BookingPage"
import { fetchAPI, submitAPI } from "../utils/api"
import ConfirmedBooking from "./ConfirmedBooking"

const Main = () => {

    const today = new Date()
    const initializeTimes = () => fetchAPI(today)

    const updateTimes = (state, date) => {
            const year = parseInt(date.date.substring(0, 4));
            const month = parseInt(date.date.substring(5, 7)) - 1;
            const day = parseInt(date.date.substring(8, 10));
            const newDate = new Date(year, month, day);
        return fetchAPI(newDate)
    }

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, {}, initializeTimes)

    const navigate = useNavigate()

    const submitForm = formdata => {
        if (submitAPI(formdata) == true) {
            navigate("/confirmed")
        }
    }

    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={
                    <BookingPage
                        availableTimes={availableTimes}
                        setAvailableTimes={setAvailableTimes}
                        submitForm={submitForm}/>
                    }></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
        </div>
    )
}

export default Main