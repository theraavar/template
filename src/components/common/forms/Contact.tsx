/* This is a simple 'Contact Us' form that sends the form data to an email service. */
import styles from './Contact.module.css'
import { useState } from 'react'

const Contact = () => {
    const [values, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })
    const [errors, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const handleChange = () => {

    }
    const validate = () => {
        let isValid = true
        if (!values.firstName.trim()) {
            errors.firstName = "First name is required."
            isValid = false
        }
        if (!values.lastName.trim()) {
            errors.lastName = "Last name is required."
            isValid = false
        }
        if (!values.email.trim()) {
            errors.email = "Email address is required."
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Invalid email address provided."
            isValid = false
        }
        if (!values.message.trim()) {
            errors.message = "Please let us know what your inquiry is."
            isValid = false
        }
        return isValid
    }
    const handleSubmit = () => {

    }

    const title = "Contact Us"
    const placeholder = "Please let us know your inquiry."
    return (
        <div>
            <form
                onSubmit={handleSubmit}>
                <h3>{title}</h3>
                <div>
                    <div>
                        <label
                            htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={values.firstName}
                            onChange={handleChange} />
                        {errors.firstName === "" ? "" : <span>{errors.firstName}</span>}
                    </div>
                    <div>
                        <label
                            htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={values.lastName}
                            onChange={handleChange} />
                        {errors.lastName === "" ? "" : <span>{errors.lastName}</span>}
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email === "" ? "" : <span>{errors.email}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        id="message"
                        placeholder={placeholder}
                        value={values.message}
                        onChange={handleChange} />
                    {errors.message === "" ? "" : <span>{errors.message}</span>}
                </div>
            </form>
        </div>
    )
}
export default Contact