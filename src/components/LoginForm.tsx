import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

const LoginForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Login is required")
      .min(3, "Login must be at least 3 characters")
      .max(15, "Login must be not more than 15 characters"),
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email format"
      )
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 6 characters")
      .max(20, "Password must be not more than 20 characters"),
  })

  const handleFormSubmit = (values: {
    username: string
    email: string
    password: string
  }) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <fieldset className="form-group">
          <legend>
            <h1>Login form</h1>
          </legend>
          <label>Username</label>
          <br />
          <Field placeholder="Username" type="text" name="username"></Field>
          <ErrorMessage name="username" component="div" className="error" />
          <br />
          <label>Email</label>
          <br />
          <Field placeholder="Email" type="email" name="email"></Field>
          <ErrorMessage name="email" component="div" className="error" />
          <br />
          <label>Password</label>
          <br />
          <Field placeholder="Password" type="password" name="password"></Field>
          <ErrorMessage name="password" component="div" className="error" />
          <br />
          <button type="submit">Login</button>
        </fieldset>
      </Form>
    </Formik>
  )
}

export default LoginForm
