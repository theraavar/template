/* This is a simple 'Contact Us' form that sends the form data to an email service. */
import styles from './Contact.module.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

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
    const [sent, isSent] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValue((state) => ({ ...state, [name]: value }))
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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const params = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            message: values.message
        }
        e.preventDefault()
        if (validate()) {
            if (!sent) {
                const publicKey = process.env.EMAILJS_PUBLIC_KEY as string
                const serviceID = process.env.EMAILJS_SERVICE_ID as string
                const templateID = process.env.EMAILJS_TEMPLATE_ID as string
                emailjs.send(serviceID, templateID, params, publicKey)
                    .then((result) => {
                        console.log(result.text)
                    }, (error) => {
                        console.log(error.text)
                    })
                isSent(true)
            }
        }
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