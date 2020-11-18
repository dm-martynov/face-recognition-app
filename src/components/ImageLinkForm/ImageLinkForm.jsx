import React from 'react'
import { useFormik } from 'formik'

import './ImageLinkForm.css'

const ImageLinkForm = () => {
  const formik = useFormik({
    initialValues: {
      urlInput: '',
    },
    onSubmit: (values) => {
      console.log('Form data', values)
    },
  })

  console.log('Form values', formik.values)

  return (
    <div className='ma4 mt0'>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give in a try.'}
      </p>
      <div className='center'>
        <form
          onSubmit={formik.handleSubmit}
          className='center form pa4 br3 shadow-5'
        >
          <input
            className='f4 pa2 w-70 center'
            type='text'
            id='urlInput'
            name='urlInput'
            onChange={formik.handleChange}
            value={formik.values.urlInput}
          />
          <button
            type='submit'
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
          >
            Detect
          </button>
        </form>
      </div>
    </div>
  )
}

export default ImageLinkForm
