import * as yup from 'yup';
import { useFormik } from 'formik';

export const FormikSetter = () => {
    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: ""
    }

    const validationSchema = yup.object({
        first_name: yup.string().required('First Name is required'),
        last_name: yup.string().required('Last Name is required'),
        email: yup.string().required('Email Address is required'),
        phone: yup.string().required('Phone Number is required'),
        message: yup.string().required('Message is required'),
    })

    const encode = (data) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
    }

    const formik = useFormik ({
        initialValues,
        validationSchema,
        validateOnBlur: true,
        enableReinitialize: false,
        onSubmit: (values, { setSubmitting }) => {
        fetch("/", {                                 
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'message',
            ...values,
          }),
        })
          .then(() => {
            alert('Your message has been sent!')
            setSubmitting(false)
          })
          .catch(error => {
            alert(`${error}`)                            
            setSubmitting(false)
          })
        }
    });

    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleBlur,
        setFieldValue,
        handleChange,
        handleSubmit,
        handleReset,
    } = formik;

    return {
        values,
        touched,
        errors,
        isSubmitting,
        handleBlur,
        setFieldValue,
        handleChange,
        handleSubmit,
        handleReset
    }
}