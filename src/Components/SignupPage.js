import React,{useEffect, useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";

export default function SignupPage({activeTab}){
    const [isOpen,SetIsOpen] = useState(false);
    const [currentUser,setCurrentUser] = useState("")
    const {handleChange,handleBlur,resetForm,isValid,touched,values,errors} = useFormik({
        initialValues:{
            signupusername:"",
            signupemail:"",
            signuppassword:""
        },
        validationSchema:Yup.object({
            signupusername:Yup.string().min(2,"Username must be more than one").max(10,"Username must be less than 11").required("Required"),
            signupemail:Yup.string().email("Enter a valid email").required("Required"),
            signuppassword:Yup.string().matches("^(?=[a-zA-Z])(?=.[0-9]).+$","Must containe at least one letter and one number").required("Required")
        })
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrentUser(values.signupusername)
        SetIsOpen(!isOpen)
        resetForm()
    }
    return(
        <>
            <form className="booking-form" name="signup" onSubmit={handleSubmit}>
                <Alert isOpen={isOpen} setIsOpen={SetIsOpen} text={`${currentUser} you have successfully ${activeTab} to little lemon`}/>
                <label className="littlelemonformlabel" htmlFor="signupusername">Username</label>
                <input onChange={handleChange} onBlur={handleBlur} value={values.signupusername} className="littlelemoninput" type="text" id="signupusername" name="signupusername" placeholder="Enter username"/>
                {(touched.signupusername && errors.signupusername) && <p className="errormsg">{errors.signupusername}</p>}
                <label className="littlelemonformlabel" htmlFor="signupemail">Email Address</label>
                <input onChange={handleChange} onBlur={handleBlur} value={values.signupemail} className="littlelemoninput" type="email" id="signupemail" name="signupemail" placeholder="Enter email address" />
                {(touched.signupemail && errors.signupemail) && <p className="errormsg">{errors.signupemail}</p>}
                <label className="littlelemonformlabel" htmlFor="signuppassword">Password</label>
                <input onChange={handleChange} onBlur={handleBlur} value={values.signuppassword} className="littlelemoninput" id="signuppassword" type="password" name="signuppassword" placeholder="Enter password"/>
                {(touched.signuppassword && errors.signuppassword) && <p className="errormsg">{errors.signuppassword}</p>}
                <button className="littlelemonformbutton" type="submit" aria-label="on Click" disabled={!isValid}>{activeTab}</button>
            </form>
        </>
    )
}