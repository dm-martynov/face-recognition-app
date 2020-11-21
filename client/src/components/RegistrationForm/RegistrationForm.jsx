import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

const RegistrationForm = () => {
  const dispatch = useDispatch()
  return (
    <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
      <Formik
        className='pa4 black-80'
        initialValues={{ email: '', password: '', name: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(signUpStart(values))
          resetForm()
          setSubmitting(false)
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string()

            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),

          email: Yup.string().email('Invalid email').required('Required'),
          name: Yup.string().required('Required'),
        })}
      >
        {({ errors, touched }) => (
          <Form className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='name'>
                  Name
                </label>
                <Field
                  className='pa2 ba b--black input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='text'
                  name='name'
                  id='name'
                />
                {errors.name && touched.name ? (
                  <div className='mt1'>{errors.name}</div>
                ) : null}
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Email
                </label>
                <Field
                  className='pa2 ba b--black input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email'
                  id='emailAddress'
                />
                {errors.email && touched.email ? (
                  <div className='mt1'>{errors.email}</div>
                ) : null}
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <Field
                  className='b ba b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                />
                {errors.password && touched.password ? (
                  <div className='mt1 '>{errors.password}</div>
                ) : null}
              </div>
            </fieldset>
            <div className=''>
              <input
                className='b mb3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Register'
                disabled={!(Object.keys(errors).length === 0)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </article>
  )
}

export default RegistrationForm
