import React, { useState } from "react";
import Alert from "./Alert";
import {useFormik} from "formik";
import * as Yup from "yup";

export default function BookingForm({avaliableTimes,dispatch,setDate}){
    const [options,setOptions] = useState(["Birthday","Anniversary"]);
    const [isOpen,setIsOpen] = useState(false)
    const formik = useFormik({
        initialValues:{
            date:"",
            time:avaliableTimes[0],
            guest:1,
            occasion:options[0]
        },
        validationSchema: Yup.object({
            date:Yup.date("Enter a valid date"),
            time:Yup.string(),
            guest:Yup.number("Must be a number").positive("Must be more than 1").max(10,"Must be less than 11"),
            occasion:Yup.string()
        },
        )
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }
    React.useEffect(() => {
        setDate(formik.values.date);
    },[formik.values.date])
    return(
        <>
            <section className="bookingform">
                <Alert text={"Your reservation has been successfully made"} isOpen={isOpen} setIsOpen={setIsOpen}/>
                <h2>Reserve a Table</h2>
                <p>Please fill this form to reserve a table</p>
                <form className="booking-form" onSubmit={handleSubmit}>
                    <label className="littlelemonformlabel" htmlFor="res-date">Choose date</label>
                    <input className="littlelemoninput" type="date" id="res-date" name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date} />
                    {formik.touched.date && formik.errors.date ? <p className="errormsg">{formik.errors.date}</p> : null}
                    <label className="littlelemonformlabel" htmlFor="res-time">Choose time</label>
                    <select className="littlelemonselect" id="res-time" name="time" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.time}>
                        {avaliableTimes.map((item,i) => (
                            <option key={item + i}>{item}</option>
                        ))}
                    </select>
                    <label className="littlelemonformlabel" htmlFor="guest">Number of guests</label>
                    <input className="littlelemoninput" id="guest" type="number" name="guest" min="1" max="10" placeholder="1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.guest}/>
                    {formik.touched.guest && formik.errors.guest ? <p className="errormsg">{formik.errors.guest}</p> : null}
                    <label className="littlelemonformlabel" htmlFor="occasion">Select occasion</label>
                    <select className="littlelemonselect" id="occasion" name="occasion" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.occasion}>
                        {options.map((item,i) => (
                            <option key={item + i}>{item}</option>
                        ))}
                    </select>
                    <button className="littlelemonformbutton" type="submit" aria-label="on Click" disabled={!formik.isValid}>Make your Reservation</button>
                </form>
            </section>
        </>
    )
}