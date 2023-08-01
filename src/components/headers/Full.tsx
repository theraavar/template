import { useState } from "react"

const Full = ({ children }: Partial<IComponent>) => {
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
export default Full