import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./RegisterComp.scss"
import { useNavigate } from 'react-router-dom';
function RegisterComp() {
    const navigate = useNavigate()
    return (
        <section className='register'>
            <div className='register_width'>
                <Formik
                    initialValues={{ username: '', country: '', email: '', city: '', img: '', phone: '', password: '' }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .max(100, 'Must be 15 characters or less')
                            .required('Required'),
                        country: Yup.string()
                            .max(100, 'Must be 20 characters or less')
                            .required('Required'),
                        city: Yup.string()
                            .max(100, 'Must be 20 characters or less')
                            .required('Required'),
                        img: Yup.string()
                            .max(100, 'Must be 20 characters or less')
                            .required('Required'),
                        phone: Yup.string()
                            .max(100, 'Must be 20 characters or less')
                            .required('Required'),
                        password: Yup.string()
                            .max(100, 'Must be 20 characters or less')
                            .required('Required'),

                            email: Yup.string().email('Invalid email address').required('Required'),
                    })}
                    onSubmit={(values) => {
                        axios.post("http://localhost:8080/api/auth/register",{
                            username: values.username,
                            email:values.email,
                            country:values.country,
                            img:values.img,
                            city:values.city,
                            phone:values.phone,
                            password:values.password
                        }
                        ).then(navigate("/login"))
                        alert(values)
                    }}
                >
                    <Form>
                        <h2>Register</h2>
                        <Field name="username" type="text" placeholder='username'/>
                        <p><ErrorMessage name="username" /></p>

                       
                        <Field name="country" type="text" placeholder='country'/>
                        <p><ErrorMessage name="country" /></p>

                        <Field name="city" type="text" placeholder='city' />
                        <p><ErrorMessage name='city' /></p>

                        <Field name="img" placeholder='image'/>
                        <p><ErrorMessage name='img' /></p>

                        <Field name="phone" type="text" placeholder='Phone'/>
                        <p><ErrorMessage name='phone' /></p>

                        <Field name="email" type="email" placeholder='email'/>
                        <p><ErrorMessage name="email" /></p>

                        <Field name="password" type="password" placeholder='password'/>
                        <p><ErrorMessage name='password' /></p>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </section>
    )
}

export default RegisterComp