import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createStyles, makeStyles } from '@material-ui/core/styles';

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("FirstName is Required"),
    lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("LastName is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Password is required"),
});
const SignupForm = (props) => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 3));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={classes.form}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                ) : null}
                <label htmlFor="email">Email Id</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};
const useStyles = makeStyles((theme) => {
    return createStyles({
        form: {
            "& > div": {
                marginBottom: 36,
            },
        },
        buttonContainer: {
            marginTop: 10,
        },
    });
});
export default SignupForm;
