import React,{useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";

export default function LoginPage({activeTab}){
    const [isOpen,SetIsOpen] = useState(false);
    const [currentUser,setCurrentUser] = useState("")
    const {handleChange,handleBlur,resetForm,isValid,touched,values,errors} = useFormik({
        initialValues:{
            loginemail:"",
            loginpassword:""
        },
        validationSchema:Yup.object({
            loginemail:Yup.string().email("Enter a valid email").required("Required"),
            loginpassword:Yup.string().required("Required").matches(/^(?=.*[a-zA-Z])(?=.*\d).+$/, 'Password must contain at least one letter and one number')
        })
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrentUser(values.loginemail)
        SetIsOpen(!isOpen)
        resetForm()
    }
    return(
        <>
            <form className="booking-form" name="login" onSubmit={handleSubmit}>
                <Alert isOpen={isOpen} setIsOpen={SetIsOpen} text={`${currentUser} you have successfully ${activeTab} to little lemon`}/>
                <label className="littlelemonformlabel" htmlFor="loginemail">Email Address</label>
                <input onChange={handleChange} onBlur={handleBlur} value={values.loginemail} className="littlelemoninput" type="email" id="loginemail" name="loginemail" placeholder="Enter email address" />
                {(touched.loginemail && errors.loginemail) && <p className="errormsg">{errors.loginemail}</p>}
                <label className="littlelemonformlabel" htmlFor="loginpassword">Password</label>
                <input onChange={handleChange} onBlur={handleBlur} value={values.loginpassword} className="littlelemoninput" id="loginpassword" type="password" name="loginpassword" placeholder="Enter password"/>
                {(touched.loginpassword && errors.loginpassword) && <p className="errormsg">{errors.loginpassword}</p>}
                <button className="littlelemonformbutton" type="submit" aria-label="on Click" disabled={!isValid}>{activeTab}</button>
            </form>
        </>
    )
}